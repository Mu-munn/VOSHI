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
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import * as React from "react"
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi"
import { Logo } from "./Logo"
import NextLink from "next/link"

export const NavbarWithAvator = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <>
      <Box
        as='section'
        pb={{ base: "1", md: "1" }}
        zIndex={"sticky"}
        position='sticky'
        top={0}
        fontWeight='light'
        bgColor='transparent'
      >
        {/* <Box as="section" pb={{ base: '12', md: '12' }} bg={'transparent'} zIndex={'sticky'}  position='sticky' top={0}></Box> */}
        <Box as='nav' bgColor='transparent'>
          <Box py={{ base: "2", lg: "2" }} w='100%' px={6}>
            <Flex justify='space-between'>
              <HStack spacing='4'>
                {/* <Logo /> */}
                <NextLink href='/' passHref>
                  <Heading _hover={{ cursor: "pointer" }}>VOSHI</Heading>
                </NextLink>

                <Text>話し合えるコミュニティ</Text>
              </HStack>
              {isDesktop ? (
                <HStack spacing='4'>
                  {/* <ButtonGroup variant='ghost' spacing='1'>
                  <IconButton icon={<FiSearch fontSize='1.25rem' />} aria-label='Search' />
                  <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                  <IconButton icon={<FiHelpCircle fontSize='1.25rem' />} aria-label='Help Center' />
                </ButtonGroup> */}
                  <ButtonGroup spacing='4' fontFamily={""} color='gray'>
                    <Button
                      variant={"ghost"}
                      colorScheme='pin2k'
                      w={"130-px"}
                      as='a'
                      href='/Community'
                      _hover={{ color: "black" }}
                    >
                      COMMUNITY
                    </Button>
                    <Button
                      variant={"ghost"}
                      colorScheme='pin2k'
                      w={"130-px"}
                      as='a'
                      // href='/VTuber'
                      _hover={{ color: "black" }}
                    >
                      VTUBER
                    </Button>
                    <Button
                      variant={"ghost"}
                      colorScheme='pin2k'
                      w={"130-px"}
                      as='a'
                      // href='/Songs'
                      _hover={{ color: "black" }}
                    >
                      SONGS
                    </Button>
                  </ButtonGroup>
                  )
                  <Menu>
                    <MenuButton >
                      <Avatar
                        boxSize='10'
                        name='Christoph Winston'
                        src='https://tinyurl.com/yhkm2ek8'
                        as='a'
                      ></Avatar>
                    </MenuButton>
                    <MenuList color={"#333333"}>
                      <MenuGroup>
                        <MenuItem>My Account</MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      {/* <MenuGroup title="Help">
                      <MenuItem>Docs</MenuItem>
                    </MenuGroup> */}
                    </MenuList>
                  </Menu>
                </HStack>
              ) : (
                <IconButton
                  variant='ghost'
                  icon={<FiMenu fontSize='1.25rem' />}
                  aria-label='Open Menu'
                />
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}
