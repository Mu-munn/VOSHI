import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import VtuberIconCard from "components/Cards/idea-card/VtuberIconCard";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";

export default function VtuberPage() {
  return (
    <Box bgColor={"aliceblue"} h="2000px">
      <NavbarWithAvator></NavbarWithAvator>

      <Center>
        <Heading
          m={"0 auto"}
          fontSize={"100px"}
          bgColor="#e30079"
          bgClip="text"
          fontWeight="extrabold"
        >
          VTUBER
        </Heading>
      </Center>

      <Box h={"100px"}></Box>

      <Center bgColor="#ff5c76" m={"0 auto"} py="60px">
        <Flex w={"82%"} wrap="wrap" gap={"20px"}>
          <VtuberIconCard />
          <VtuberIconCard />
          <VtuberIconCard />
          <VtuberIconCard />
          <VtuberIconCard />
        </Flex>
      </Center>
    </Box>
  );
}
