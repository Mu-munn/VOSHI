import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleCard from "../../components/Cards/idea-card/ArticleCard/app";
import OfficeCardTag from "../../components/Cards/idea-card/CardTag";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import { BiCategory } from "react-icons/bi";

export default function CommunityPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [test, SetTest] = useState(["aa"]);
  const SelectTag = () => {
    test.push("aa");
    test.push("aa");
    test.push("aa");
  };
  const reptiles = ["alligator", "snake", "lizard"];
  return (
    <Box bgColor={"aliceblue"} h="2000px">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={SelectTag}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <NavbarWithAvator></NavbarWithAvator>
      <Stack
        justify={"space-between"}
        w="95%"
        direction={"row"}
        m={"0 auto"}
        alignItems={"end"}
      >
        <Heading
          m={"0 auto"}
          alignItems={"end"}
          fontSize={"100px"}
          // bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgColor="#e30079"
          bgClip="text"
          fontWeight="extrabold"
        >
          COMMUNITY
        </Heading>
        {/* <HStack>
          <IconButton
            bgColor={"#FF0080"}
            aria-label='Call Segun'
            size='lg'
            icon={<PhoneIcon />}
            borderRadius='90%'
            color={"white"}
          />
          <Box w={"20px"}></Box>
          <Button
            bgColor='#FF0080'
            color={"white"}
            fontWeight={"light"}
            onClick={onOpen}
            ref={btnRef}
          >
            ADD NEW
          </Button>
          <Box w={"30px"}></Box>
        </HStack> */}
      </Stack>

      <Box h={"28px"}></Box>

      <Box className="content" w={"95%"} m="0 auto">
        <Box
          pos={"sticky"}
          top="50px"
          zIndex={1}
          bgColor="white"
          borderRadius={"2xl"}
          p={2}
          boxShadow="md"
          w="86%"
          m={"0 auto"}
        >
          <HStack h={"70px"} bgColor="" justifyContent={"space-between"}>
            {/* <SimpleGrid>{test.length && <OfficeCardTag></OfficeCardTag>}</SimpleGrid> */}
            <Flex wrap={"wrap"} w="800px" gap={1}>
              {["green", "red"].map((m) => (
                <Tag
                  key={m}
                  borderRadius="full"
                  variant="solid"
                  colorScheme={m}
                >
                  <TagLabel>{m}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>
            <HStack alignItems={"flex-end"}>
              <IconButton
                colorScheme={"pink"}
                variant="outline"
                aria-label="Call Segun"
                icon={<BiCategory />}
                size="md"
                borderRadius={"full"}
                ref={btnRef}
                onClick={onOpen}
              />
              <Box w={"10px"}></Box>
              <Button
                bgColor="#FF0080"
                color={"white"}
                fontWeight={"light"}
                borderRadius="full"
              >
                ADD NEW
              </Button>
              <Box w={"30px"}></Box>
            </HStack>
          </HStack>
        </Box>

        <Box h={"28px"}></Box>

        <SimpleGrid w={"100%"} bgColor='' m={"0 auto"} columns={[2, null, 3]} spacing='40px'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
