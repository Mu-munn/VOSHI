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
} from "@chakra-ui/react";
import { FaGratipay } from "react-icons/fa";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import { Card } from "../../components/idea-card/App";

export const ProfilePage = () => {
  return (
    <Box bg="gray.100">
      <NavbarWithAvator></NavbarWithAvator>
      <VStack w={"80%"} m={"auto"}>
        <Heading color={"#333333"} mb={"100px"}>
          PROFILE
        </Heading>
        <HStack bgColor={""} w={"75%"} py={"50px"}>
          <Spacer></Spacer>
          <Avatar
            size={"lg"}
            src="https://avatars.githubusercontent.com/u/86332503?v=4"
          ></Avatar>
          <Text pl={"25px"} fontSize={"42px"}>
            Mu-munn
          </Text>
          <Spacer></Spacer>
        </HStack>
        <Flex justifyContent={"space-between"} w={"850px"}>
          <Center
            fontWeight={"bold"}
            fontSize="30px"
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
          >
            <Avatar
              size={"lg"}
              src="https://avatars.githubusercontent.com/u/86332503?v=4"
            ></Avatar>
          </Center>

          <Box
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
            textAlign="center"
          >
            <Text>プロジェクト成功率</Text>
            <Center fontWeight={"bold"} fontSize="30px" bgColor={""} h={"80%"}>
              100%
            </Center>
          </Box>
          <Box
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
            textAlign="center"
          >
            <Text>プロジェクト成功率</Text>
            <Center fontWeight={"bold"} fontSize="30px" bgColor={""} h={"80%"}>
              100%
            </Center>
          </Box>
        </Flex>
        <Box h={"20px"}></Box>
        <Flex justifyContent={"space-between"} w={"850px"}>
          <Box
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
            textAlign="center"
          >
            <Text>参加数</Text>
            <Center fontWeight={"bold"} fontSize="30px" bgColor={""} h={"80%"}>
              3回
            </Center>
          </Box>
          <Box
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
            textAlign="center"
          >
            <Text>プロジェクト成功率</Text>
            <Center fontWeight={"bold"} fontSize="30px" bgColor={""} h={"80%"}>
              100%
            </Center>
          </Box>
          <Box
            bgColor={"white"}
            borderRadius={"lg"}
            h={200}
            w={200}
            p={4}
            textAlign="center"
          >
            <Text>プロジェクト成功率</Text>
            <Center fontWeight={"bold"} fontSize="30px" bgColor={""} h={"80%"}>
              100%
            </Center>
          </Box>
        </Flex>
        <Box h={"80px"}></Box>
        <VStack>
          <Text
            fontSize={"30px"}
            my={"20px"}
            textAlign="left"
            bgColor={""}
            w="850px"
            color={"#333333"}
          >
            現在のプロジェクト
          </Text>
          <Card></Card>
        </VStack>
        <Box h={"80px"}></Box>
        <VStack spacing={"5"}>
          <Text
            fontSize={"30px"}
            my={"20px"}
            textAlign="left"
            bgColor={""}
            w="850px"
            color={"#333333"}
          >
            完成したプロジェクト
          </Text>
          <Card></Card>
          <Card></Card> <Card></Card>
        </VStack>
      </VStack>
    </Box>
  );
};
export default ProfilePage;
