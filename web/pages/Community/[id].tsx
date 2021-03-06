import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { NavbarWithAvator } from "components/chakra/NavbarWithAvatar/App"
import { GetStaticPaths, GetStaticProps } from "next"
import { useState } from "react"
import { getAllPathIds } from "src/lib/community"
import { CommunityService } from "src/service/community-service"
type PageProps = {
  title: string
  author: string
}

type Statement = {
  id: string
  created: Date
  text: string
  userId: string
}
export const getStaticPaths =  async () => {
  const allPaths = await getAllPathIds()

  return {
    // paths: [{ params: { id: "4c8b2200-2a65-467d-a4b6-1c045252a614" } }],
    paths: allPaths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { id } = context.params

  const props: PageProps = {
    title: `Title-${id}`,
    author: `Author-${id}`,
  }

  return { props }
}
export default function CommunityDetailPage(props) {
  const defaultValue: Statement = {
    id: "",
    created: undefined,
    text: "",
    userId: "",
  }
  const [fieldValues, setFieldValues] = useState<Statement>(defaultValue)
  const InputChange = (e: any) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setFieldValues({ ...fieldValues, [name]: value })
  }
  const submit = () => {
    console.log(fieldValues)
  }
  return (
    <Box bgColor={"aliceblue"}>
      <NavbarWithAvator></NavbarWithAvator>
      <Center>
        <VStack width={"65%"}>
          <Heading
            m={"0 auto"}
            alignItems={"end"}
            fontSize={"100px"}
            bgColor='#e30079'
            bgClip='text'
            fontWeight='extrabold'
          >
            {/* {props.title} */}
            title
          </Heading>
          <Text>掲示板</Text>
          <Box height={"20px"}></Box>
          <Divider borderColor={"#e30079"} borderBottomWidth='5px' borderRadius='10px' />
          <Box height={"20px"}></Box>
          <VStack
            bg={"#f1e1cd"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius='30px'
            w='100%'
          >
            {/* ///TODO:繰り返し要素ここから */}
            <Box height={"20px"}></Box>
            <HStack h={"100px"} spacing='' justifyContent={"space-between"}>
              <Avatar h={"50px"} src='' />
              <Center w={"900px"}>
                <Text fontSize={"15px"} maxW='80%'>
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
              </Center>
            </HStack>
            {/* <Divider borderRadius="10px" w={"90%"} borderColor={"#343434"} /> */}
            <Box height={"20px"}></Box>
            {/* ///TODO:繰り返し要素ここまで */}
            {/* <HStack h={"100px"} spacing="30px">
              <Avatar h={"50px"} w={"50px"} src="" />
              <Box w={"900px"}>
                <Text fontSize={"15px"}>
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
              </Box>
            </HStack>
            <Divider borderRadius="10px" w={"90%"} borderColor={"#e30079"} />
            <Box height={"20px"}></Box>
            <HStack h={"100px"} spacing="30px">
              <Avatar h={"50px"} w={"50px"} src="" />
              <Box w={"900px"}>
                <Text fontSize={"15px"}>
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
              </Box>
            </HStack>
            <Divider borderRadius="10px" w={"90%"} borderColor={"#e30079"} />
            <Box height={"20px"}></Box> */}
          </VStack>
        </VStack>
        <Center
          pos={"fixed"}
          bottom='50px'
          zIndex={1}
          bgColor='white'
          borderRadius={"2xl"}
          p={6}
          boxShadow='md'
          w='65%'
          h={"100px"}
        >
          <Stack bg={""} w={"100%"} direction='row' justifyContent={"space-between"} spacing='20px'>
            <Input
              variant='flushed'
              placeholder='Flushed'
              w={"full"}
              name='text'
              onChange={(e) => {
                InputChange(e)
              }}
            />
            <Button
              onClick={() => {
                submit()
              }}
              bgColor='#FF0080'
              color={"white"}
              fontWeight={"light"}
              borderRadius='full'
            >
              Save
            </Button>
          </Stack>
        </Center>
      </Center>

      <Box height={"2000px"}></Box>
    </Box>
  )
}
