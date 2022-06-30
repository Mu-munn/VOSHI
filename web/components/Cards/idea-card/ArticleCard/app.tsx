import { Avatar, AvatarGroup, Box, Heading, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"

export default function ArticleCard() {
  return (
    <Box
      bgGradient='linear(to-t, #fa709a, #fee140)'
      h='240px'
      w='450px'
      borderRadius={"20px"}
      boxShadow='2xl'
      p={"3"}
      pos='relative'
    >
      <Stack>
        <Heading h={"80%"} bgColor='' fontWeight={"light"} color='#343434'>
          今日の配信が良かったああああああ件
        </Heading>
      </Stack>
      <HStack position={"absolute"} bottom='15px' right={"10px"}>
        <AvatarGroup size='md' max={5}>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
      </HStack>
      <HStack position={"absolute"} bottom='15px' left={"10px"}></HStack>
      <HStack position={"absolute"} bottom='95px' p={1}>
        <Tag variant={"solid"} size={"md"} colorScheme={"green"}>
          配信
        </Tag>
        <Tag variant={"solid"} size={"md"} colorScheme={"orange"}>
          配信
        </Tag>
        <Tag variant={"solid"} size={"md"} colorScheme={"yellow"}>
          配信
        </Tag>
      </HStack>
    </Box>
  )
}
