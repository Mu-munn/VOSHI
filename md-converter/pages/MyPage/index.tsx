import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
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
  VStack,
} from "@chakra-ui/react"
import Appbar from "../../components/Appbar"
import { NavContent } from "../../components/chakra/NavbarWithSubmenu/NavContent"
import { App } from "../../components/chakra/ShellWithSidebarOnFullAccent/App"
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App"
import { Card } from "../../components/idea-card/app"

const MyPage = () => {
  return (
    <Box bg='gray.100'>
      <NavbarWithAvator></NavbarWithAvator>
      <HStack alignItems={"self-start"}>
        <Spacer></Spacer>

        <Box w='70%' m={"auto"}>
          {/* <Box h='' bgColor='' mb='70px'>
          <HStack spacing={4}>
            {["lg","lg"].map((size) => (
              <Tag size='lg' key={size} borderRadius='full' variant='solid' colorScheme='blue'>
                <TagLabel>React.js</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </HStack>
        </Box> */}

          <VStack bg='' spacing={7}>
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

        <Box w={"20%"} h={""} bgColor={""} borderRadius={"2xl"} position={"sticky"} top='130px'>
          {/* <Heading color={'black.300'} fontFamily={'Zen Kaku Gothic New'}>カテゴリー</Heading> */}
          <Flex gap={4} wrap={"wrap"}>
            {["lg", "lg", "lg", "lg", "lg", "lg", "lg"].map((size) => (
              <Tag size='lg' key={size} borderRadius='5' variant='solid' colorScheme='blue'>
                <TagLabel>React.js</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </Flex>
        </Box>
        <Spacer></Spacer>
      </HStack>

      <Container h='200px'></Container>
    </Box>
  )
}
export default MyPage
