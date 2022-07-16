import {
  Avatar,
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavbarWithAvator } from "components/chakra/NavbarWithAvatar/App";
import { GetStaticPaths, GetStaticProps } from "next";
type PageProps = {
  title: string;
  author: string;
};
type PathParams = {
  id: string;
};
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: [{ params: { id: "a97052d7-d8a6-4f78-8b9b-59f2dfcf4a28" } }],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { id } = context.params as PathParams;

  const props: PageProps = {
    title: `Title-${id}`,
    author: `Author-${id}`,
  };

  return { props };
};
export default function CommunityDetailPage(props) {
  return (
    <Box bgColor={"aliceblue"}>
      <NavbarWithAvator></NavbarWithAvator>
      <Center>
        <VStack width={"65%"}>
          <Heading
            m={"0 auto"}
            alignItems={"end"}
            fontSize={"100px"}
            bgColor="#e30079"
            bgClip="text"
            fontWeight="extrabold"
          >
            {/* {props.title} */}
            title
          </Heading>
          <Text>掲示板</Text>
          <Box height={"20px"}></Box>
          <Divider
            borderColor={"#e30079"}
            borderBottomWidth="5px"
            borderRadius="10px"
          />
          <Box height={"20px"}></Box>
          <VStack
            bg={"#f1e1cd"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            borderRadius="30px"
            w="100%"
          >
            <Box height={"20px"}></Box>
            <HStack h={"100px"} spacing="30px">
              <Avatar h={"50px"} w={"50px"} src="" />
              <Box w={"900px"}>
                <Text fontSize={"15px"}>
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
              </Box>
            </HStack>
            <Divider borderRadius="10px" w={"90%"} borderColor={"#343434"} />
            <HStack h={"100px"} spacing="30px">
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
            <Box height={"20px"}></Box>
          </VStack>
        </VStack>      <Box
        pos={"fixed"}
        bottom="50px"
        zIndex={1}
        bgColor="white"
        borderRadius={"2xl"}
        p={2}
        boxShadow="md"
        w="65%"
        h={"100px"}
        m={"0 auto"}
      >
        
      </Box>
      </Center>
      

      <Box height={"2000px"}></Box>
    </Box>
  );
}
