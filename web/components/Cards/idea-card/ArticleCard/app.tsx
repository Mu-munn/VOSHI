import { Box, Heading, HStack, Stack, Tag } from "@chakra-ui/react"

export default function ArticleCard() {
  return (
    <Box bgGradient='linear(to-t, #fa709a, #fee140)' h='240px' w='450px' borderRadius={"20px"} boxShadow='2xl' p={"3"} pos="relative">
      <Stack>
        <Heading h={"80%"} bgColor='' fontWeight={"light"} color="#343434">
          今日の配信が良かったああああああ件
        </Heading>
      </Stack>
      <HStack position={"absolute"} bottom="15px" p={1}>
        <Tag variant={"solid"} size={"md"} colorScheme={"green"}>配信</Tag>
        <Tag variant={"solid"} size={"md"} colorScheme={"orange"}>配信</Tag>
        <Tag variant={"solid"} size={"md"} colorScheme={"yellow"}>配信</Tag>
      </HStack>
    </Box>
  )
}