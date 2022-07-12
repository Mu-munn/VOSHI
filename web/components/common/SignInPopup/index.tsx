import {
  Text,
  HTMLChakraProps,
  useToast,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  AuthProvider,
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  linkWithPopup,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { FaGoogle } from "react-icons/fa";
import { useAuthUser } from "../../../src/hooks/use-auth-user";
import { useClient } from "../../../src/hooks/use-client";
import { app } from "../../../src/utils/firebase/init";
import { Logo } from "../../chakra/NavbarWithSubmenu/Logo";

const useLoginWithAuthProvider = () => {
  const { setIsShowLogin } = useClient();
  const authUser = useAuthUser();
  const router = useRouter();

  const finishToNavigate = async () => {
    setIsShowLogin(false);
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) return;

    const idToken = await user.getIdToken(true);
    if (idToken) {
      setCookie(null, "__session", idToken);
    }
    router.push("/");
  };
  const result = useCallback(
    async (provider: AuthProvider) => {
      if (authUser) {
        if (authUser.isAnonymous === true) {
          await linkWithPopup(authUser, provider)
            .then(() => {
              finishToNavigate();
            })
            .catch(async (error: Error) => {
              console.log(error.message);
              if (error.message.includes("auth/credential-already-in-use")) {
                console.log("credential-already-in-use do login");
                const auth = getAuth(app);
                await signInWithRedirect(auth, provider)
                  .then((result) => {
                    finishToNavigate();
                  })
                  .catch((error: Error) => {
                    console.log(error);
                  });
                return;
              }
            });
        }
      } else {
        const auth = getAuth();
        await signInWithPopup(auth, provider)
          .then((result) => {
            finishToNavigate();
          })
          .catch((error: Error) => {
            console.log(error);
          });
      }
    },
    [authUser, router, setIsShowLogin]
  );
  return result;
};

export const SignInPopup = () => {
  const { setIsShowLogin } = useClient();
  // const router = useRouter()

  const googleProvider = useMemo(() => new GoogleAuthProvider(), []);

  const loginWithAuthProvider = useLoginWithAuthProvider();

  return (
    <Modal
      isOpen={true}
      onClose={() => setIsShowLogin(false)}
      size="2xl"
      // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" mx="4">
        <ModalBody>
          <Stack
            maxW="xs"
            mx="auto"
            py={{ base: "12", md: "16" }}
            spacing={{ base: "6", md: "10" }}
          >
            <Logo h={9} />
            <Stack spacing="3" textAlign="center">
              <Text fontSize="lg">
                現在はGoogleアカウントのみの認証になっております。
              </Text>
            </Stack>
            <Button
              variant="outline"
              leftIcon={<FaGoogle />}
              colorScheme="black"
              onClick={() => loginWithAuthProvider(googleProvider)}
            >
              Googleでサインインする
            </Button>
          </Stack>
          <Stack
            pb={{ base: "12", md: "16" }}
            spacing="3"
            fontSize="sm"
            maxW="md"
            mx="auto"
            textAlign="left"
          >
            <Text>
              サインインすると、
              <Text
                as="span"
                textDecoration="underline"
                cursor="pointer"
                onClick={() => window.open("/terms", "_blank")}
              >
                利用規約
              </Text>
              ・
              <Text
                as="span"
                textDecoration="underline"
                cursor="pointer"
                onClick={() => window.open("/privacy-policy", "_blank")}
              >
                プライバシーポリシー
              </Text>
              に同意したものとみなされます。
            </Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
