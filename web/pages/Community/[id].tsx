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
    <Box>
      {/* <Text>{props.title}</Text> */}
      <NavbarWithAvator></NavbarWithAvator>
      <Center>
        <VStack width={"90%"}>
          <Heading
            m={"0 auto"}
            alignItems={"end"}
            fontSize={"100px"}
            bgColor="#e30079"
            bgClip="text"
            fontWeight="extrabold"
          >
            BulletinBoard
          </Heading>
          
          <HStack h={"100px"} spacing="20px">
            <Divider orientation="vertical"/>
            <Avatar h={"100px"} w={"100px"} src="" />
            <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
          </HStack>
          
          <Divider />
        </VStack>
      </Center>
    </Box>
  );
}
