import { Box, Heading, HStack } from "@chakra-ui/react";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";

export default function CommunityPage() {
  return (
    <Box bgColor={"aliceblue"}>
      <NavbarWithAvator></NavbarWithAvator>
      <Box h={"60px"}> </Box>
      <Heading
        color={"pink"}
        fontSize="100px"
        left={"80px"}
        position="absolute"
        // textShadow={"lg"}
        textDecorationLine="blink"
      >
        COMMUNITY
      </Heading>
      <HStack>
        <Box w={"20%"}></Box>
        <Box
          w="100%"
          bgColor={"#fa709a"}
          py="6"
          borderTopLeftRadius={"200px"}
          // boxShadow="dark-lg"
          h={"3000px"}
        ></Box>
      </HStack>
    </Box>
  );
}
