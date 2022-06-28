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
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { Logo } from "./Logo";

export const NavbarWithAvator = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      as="section"
      pb={{ base: "12", md: "12" }}
      bg={""}
      zIndex={"sticky"}
      position="sticky"
      top={0}
    >
      {/* <Box as="section" pb={{ base: '12', md: '12' }} bg={'transparent'} zIndex={'sticky'}  position='sticky' top={0}></Box> */}
      <Box as="nav" bg="transparent">
        {/* Box as="nav" bg="white" boxShadow={useColorModeValue('sm', 'sm-dark')} bgColor=""> */}
        <Box py={{ base: "3", lg: "4" }} bg="transparent" w="100%" px={6}>
          <Flex justify="space-between">
            <HStack spacing="4">
              {/* <Logo /> */}
              <Heading>VOSHI</Heading>
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  {/* <Button>ダッシュボード</Button> */}
                  {/* <Button aria-current="page">探す</Button>
                  <Button>集める</Button>
                  <Button>Bookmarks</Button>
                  <Button>Users</Button> */}
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost" spacing="1">
                  <IconButton
                    icon={<FiSearch fontSize="1.25rem" />}
                    aria-label="Search"
                  />
                  {/* <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" /> */}
                  <IconButton
                    icon={<FiHelpCircle fontSize="1.25rem" />}
                    aria-label="Help Center"
                  />
                </ButtonGroup>
                <Avatar
                  boxSize="10"
                  name="Christoph Winston"
                  src="https://tinyurl.com/yhkm2ek8"
                  as="a"
                  href="/ProfilePage"
                ></Avatar>
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
