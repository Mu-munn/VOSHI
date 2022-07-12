import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useBreakpointValue,
  useColorModeValue as mode,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import * as React from "react";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { Logo } from "./Logo";
import NextLink from "next/link";
import { useClient } from "../../../src/hooks/use-client";
import { useAuthUser } from "../../../src/hooks/use-auth-user";
import { useRouter } from "next/router";
import { AuthService } from "src/service/auth-service";
import { SignInPopup } from "components/common/SignInPopup";
import { destroyCookie } from "nookies";

export const NavbarWithAvator = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isShowLogin, setIsShowLogin } = useClient();
  const authUser = useAuthUser();
  const isLoggedin = authUser?.isAnonymous === false;

  const router = useRouter();

  React.useEffect(() => {
    const handleShowLogin = async () => {
      console.log(isShowLogin);

      try {
        const query = router.query;
        const showSignIn = query.showSignIn;
        if (showSignIn === "true") {
          await AuthService.signOut();
          setIsShowLogin(true);
        }
      } catch (error) {}
    };
    handleShowLogin();
  }, [router.query]);

  return (
    <Box
      as="section"
      pb={{ base: "1", md: "1" }}
      zIndex={"sticky"}
      position="sticky"
      top={0}
      fontWeight="light"
      bgColor="transparent"
    >
      {/* <Box as="section" pb={{ base: '12', md: '12' }} bg={'transparent'} zIndex={'sticky'}  position='sticky' top={0}></Box> */}
      <Box as="nav" bgColor="transparent">
        <Box py={{ base: "2", lg: "2" }} w="100%" px={6}>
          <Flex justify="space-between">
            <HStack spacing="4">
              {/* <Logo /> */}
              <NextLink href="/" passHref>
                <Heading _hover={{ cursor: "pointer" }}>VOSHI</Heading>
              </NextLink>

              <Text>話し合えるコミュニティ</Text>
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                {/* <ButtonGroup variant='ghost' spacing='1'>
                  <IconButton icon={<FiSearch fontSize='1.25rem' />} aria-label='Search' />
                  <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                  <IconButton icon={<FiHelpCircle fontSize='1.25rem' />} aria-label='Help Center' />
                </ButtonGroup> */}
                <ButtonGroup spacing="4" fontFamily={""} color="gray">
                  <Button
                    variant={"ghost"}
                    colorScheme="pin2k"
                    w={"130-px"}
                    as="a"
                    href="/Community"
                    _hover={{ color: "black" }}
                  >
                    COMMUNITY
                  </Button>
                  <Button
                    variant={"ghost"}
                    colorScheme="pin2k"
                    w={"130-px"}
                    as="a"
                    href="/VTuber"
                    _hover={{ color: "black" }}
                  >
                    VTUBER
                  </Button>
                  <Button
                    variant={"ghost"}
                    colorScheme="pin2k"
                    w={"130-px"}
                    as="a"
                    href="/Songs"
                    _hover={{ color: "black" }}
                  >
                    SONGS
                  </Button>
                </ButtonGroup>
                )
                {isLoggedin && (
                  <Menu>
                    <MenuButton as={Button}>
                      <Avatar
                        boxSize="10"
                        name="Christoph Winston"
                        src="https://tinyurl.com/yhkm2ek8"
                        as="a"
                      ></Avatar>
                    </MenuButton>
                    <MenuList color={"#333333"}>
                      <MenuItem
                        onClick={() => {
                          router.push("/ProfilePage");
                        }}
                      >
                        <Text>Profile</Text>
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem
                        onClick={async () => {
                          destroyCookie(null, "__session");
                          await AuthService.signOut();
                          router.push("/");
                        }}
                      >
                        <Text>sign out</Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
                {!isLoggedin && (
                  <>
                    {/* <Button
                      fontWeight={"normal"}
                      as="a"
                      href="#"
                      color={mode("blue.600", "blue.300")}
                      onClick={() => setIsShowLogin(true)}
                    >
                      ログイン
                    </Button> */}
                    <Button
                      fontWeight={"normal"}
                      // as="a"
                      // href="#"
                      colorScheme="blue"
                      onClick={() => setIsShowLogin(true)}
                    >
                      ログイン
                    </Button>
                  </>
                )}
                :{isShowLogin && <SignInPopup></SignInPopup>}
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
