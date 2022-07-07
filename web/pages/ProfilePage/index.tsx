import {
  Box,
  Heading,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Avatar,
  Center,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaGratipay } from "react-icons/fa";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import { Card } from "../../components/Cards/idea-card/App";
import VtuberIconCard from "../../components/Cards/idea-card/VtuberIconCard";

export const ProfilePage = () => {
  return (
    <Box bg="aliceblue">
      <NavbarWithAvator></NavbarWithAvator>
      <Box
        w={"100%"}
        // borderBottomRadius={"200px"}
        h="350px"
        bgGradient="linear(to-b, aliceblue,yellow,aliceblue)" //推しのテーマカラーに真ん中の値を変更可能にする
      >
        <Box position={"relative"}>
          <Button position={"absolute"} top="5%" right="20%">
            Edit
          </Button>
          <VStack>
            <Avatar h={"200px"} w={"200px"} src="" />
            <Text fontSize={"100px"}>たまたま</Text>
          </VStack>
        </Box>
        <VStack>
          <Box h={"50px"}></Box>
          {/*空白*/}
          <Text fontSize={"50px"}>FAVORITE</Text>
          <Text>推し</Text>
          <HStack justifyContent={"space-between"} spacing="30px">
            <VtuberIconCard></VtuberIconCard>
          </HStack>
          <Box h={"50px"}></Box>
          {/*空白*/}
          <Text fontSize={"50px"}>INTRODUCTION</Text>
          <Text>自己紹介</Text>
          <Text fontSize={"25px"}>!!!!aaaaaaaaaaaaaaaaaaaaaa!!!!</Text>
          <Box h={"50px"}></Box>
          {/*空白*/}
          <Text fontSize={"50px"}>RECORD</Text>
          <Text>記録</Text>
          <HStack>
            <Center bgColor={"gray.200"} w="200px" h="200px" borderRadius={"lg"}>
              <VStack>
                <Text fontSize={"25px"}>視聴回数</Text>
                <Text fontSize={"40px"}>100</Text>
                <Text fontSize={"25px"}>回</Text>
              </VStack>
            </Center>
            <Center bgColor={"gray.200"} w="200px" h="200px" borderRadius={"lg"}>
              <VStack>
                <Text fontSize={"25px"}>視聴回数</Text>
                <Text fontSize={"40px"}>100</Text>
                <Text fontSize={"25px"}>回</Text>
              </VStack>
            </Center><Center bgColor={"gray.200"} w="200px" h="200px" borderRadius={"lg"}>
              <VStack>
                <Text fontSize={"25px"}>視聴回数</Text>
                <Text fontSize={"40px"}>100</Text>
                <Text fontSize={"25px"}>回</Text>
              </VStack>
            </Center>
          </HStack>
        </VStack>
      </Box>
      <Box h={"100000px"}></Box> {/*スクロールするためのスペース「削除予定」 */}
    </Box>
  );
};
export default ProfilePage;
