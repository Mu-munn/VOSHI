import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  color,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import Appbar from "../../components/Appbar"
import { NavContent } from "../../components/chakra/NavbarWithSubmenu/NavContent"
import { App } from "../../components/chakra/ShellWithSidebarOnFullAccent/App"
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App"
import { Card } from "../../components/Cards/idea-card/App"

const MyPage = () => {
  return (
    <Box bg='gray.100'>
      <NavbarWithAvator></NavbarWithAvator>
      <HStack alignItems={"self-start"}>
        <Spacer></Spacer>

        <Box w='' m={"auto"}>
          <Box h='' w={"800px"} bgColor='' mb='70px' mt={30} bg={""}>
            <Heading fontFamily={"Zen Kaku Gothic New"} color={"#333333"}>
              ７ found .{" "}
            </Heading>
          </Box>

          <VStack bg='' spacing={10}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </VStack>
        </Box>

        <Spacer></Spacer>

        <VStack position={"sticky"} top='120px'>
          <VStack
            w={"230px"}
            shadow={"inner"}
            bgColor={"gray.200"}
            borderRadius={"2xl"}
            alignItems={"center"}
            mb={"50px"}
            p='10px'
          >
            <Text color={"#333333"} fontFamily={"Zen Kaku Gothic New"} fontSize={"2xl"} mb={"1px"}>
              SORT
            </Text>
            <Flex gap={4} wrap={"wrap"} mt={"20px"} justifyContent={"space-between"} p={'10px'}>
              {["lg", "lg", "lg", "lg", "lg", "lg", "lg"].map((size) => (
                <Tag
                  size='md'
                  key={size}
                  borderRadius='5'
                  variant='solid'
                  colorScheme='gray'
                  boxShadow={"2xl"}
                >
                  <TagLabel>React.js</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>
          </VStack>{" "}
          <VStack
            w={"230px"}
            shadow={"inner"}
            bgColor={"gray.200"}
            borderRadius={"2xl"}
            alignItems={"center"}
            // mb={"50px"}
            p='10px'
          >
            <Text color={"#333333"} fontFamily={"Zen Kaku Gothic New"} fontSize={"2xl"} mb={"1px"}>
              CATEGORY
            </Text>
            <Flex gap={4} wrap={"wrap"} mt={"20px"} justifyContent={"space-between"} p={'10px'}>
              {["lg", "lg", "lg", "lg", "lg", "lg", "lg"].map((size) => (
                <Tag
                  size='md'
                  key={size}
                  borderRadius='5'
                  variant='solid'
                  colorScheme='gray'
                  boxShadow={"2xl"}
                >
                  <TagLabel>React.js</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>
          </VStack>{" "}
        </VStack>

        <Spacer></Spacer>
      </HStack>

      <Container h='200px'></Container>
    </Box>
  )
}
export default MyPage
