import { Box, Center, Container, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react"
import Appbar from "../../components/Appbar"
import { NavContent } from "../../components/chakra/NavbarWithSubmenu/NavContent"
import { App } from "../../components/chakra/ShellWithSidebarOnFullAccent/App"
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App"
import { Card } from "../../components/idea-card/app"

const MyPage = () => {
  return (
    <Box bg='gray.50' height="100vh">
      <NavbarWithAvator></NavbarWithAvator>
      <VStack bg="">
        <Card></Card>
      </VStack>
    </Box>
  )
}
export default MyPage
