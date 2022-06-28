import {
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react"

export const Card = () => {
  return (
    <VStack bg='white' w='850px' h='' boxShadow='' p={5} rounded='md' align={"flex-start"}>
      <Box h={""} bgColor=''>
        <HStack>
          {/* <Box h={"60px"} w={"86px"} bgColor='' borderRadius={"lg"}></Box> */}
          <Avatar boxSize='20' name='Christoph Winston' src='https://avatars.githubusercontent.com/u/86332503?v=4' />
          <Heading fontFamily={"Zen Kaku Gothic New"} fontWeight={"bold"} color={"#383838"}>
            エンジニアのための学習記録サービス
          </Heading>
        </HStack>
      </Box>

      {/* <HStack spacing={2}>
        <Badge variant='solid' colorScheme='green'>
          カテゴリ
        </Badge>
        {["lg", "lg", "lg", "lg", "lg"].map((size) => (
          <Tag size='sm' key={size} borderRadius='full' variant='outline' colorScheme='green'>
            <TagLabel>React.js</TagLabel>
          </Tag>
        ))}
      </HStack> */}

      {/* <Divider></Divider> */}

      <Stack h={""} bgColor='gray.50' borderRadius={"lg"} w={"100%"} p={"1"}>
        <HStack p={3}>
          {/* <Avatar boxSize='10' name='Christoph Winston' src='https://tinyurl.com/yhkm2ek8' /> */}
          <Text fontFamily={"Zen Kaku Gothic New"} color={"#333333"}>
            エンジニアが日々の学習記録を残せるサービスを作っています！Reactを練習したい人募集してます！！
          </Text>
        </HStack>

        <Flex bgColor={""}>
          {/* <Box w='70px' h='10' bg='red.500' /> */}
          <Spacer />
          {/* <Box w='170px' h='10' bg='red.500' /> */}
          <Spacer />

          {/* <HStack justifyContent={"flex-end"} alignItems={"self-end"} bgColor={"gray.50"}>
            <Text fontWeight={"bold"}>残り</Text>
            <Heading fontFamily={"sans-serif"} fontWeight={"bold"}>
              3
            </Heading>
            <Text fontWeight={"bold"}>人</Text>
          </HStack> */}
        </Flex>
      </Stack>
      <HStack spacing={2}>
        {/* <Badge variant='outline' colorScheme='#333333'>
          カテゴリ
        </Badge> */}

        {["sm", "sm", "sm", "sm", "sm"].map((size) => (
          <Tag size='sm' key={size} borderRadius='lg' variant={''} colorScheme='gray'>
            <TagLabel>React.js</TagLabel>
          </Tag>
        ))}
      </HStack>
    </VStack>
  )
}
