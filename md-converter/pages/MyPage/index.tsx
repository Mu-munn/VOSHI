import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
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
    <Box bg='gray.50'>
      <NavbarWithAvator></NavbarWithAvator>
      <Box w='70%' m='auto'>
        <Box h='' bgColor='' mb='70px'>
          <HStack spacing={4}>
            {["lg","lg"].map((size) => (
              <Tag size='lg' key={size} borderRadius='full' variant='solid' colorScheme='blue'>
                <TagLabel>React.js</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </HStack>
        </Box>

        <Flex bg='' h='50%' m='auto' justifyContent='space-between' wrap='wrap' gap='40px'>
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
        </Flex>
      </Box>

      <Container h='200px'></Container>
    </Box>
  )
}
export default MyPage
