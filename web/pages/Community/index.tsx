import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  color,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import ArticleCard from "../../components/Cards/idea-card/ArticleCard/app";
import OfficeCardTag from "../../components/Cards/idea-card/CardTag";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import { BiCategory } from "react-icons/bi";
import AddNewModal from "components/Popups/AddNewModal/App";

export default function CommunityPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [test, SetTest] = useState(["aa"]);
  const SelectTag = () => {
    test.push("aa");
    test.push("aa");
    test.push("aa");
  };
  const [isShow, setIsShow] = useState(false);
  const reptiles = ["alligator", "snake", "lizard"];

  // const [isSubmit, setIsSubmit] = useState(false);
  // const submit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmit(true);
  //   return;
  // };
  // const submitData: AddNewCreate = {
  //   ...fieldValues,
  //   created: serverTimestamp(),
  // };
  // try {
  //   const submitDataWithId = await AddNewCreate.createInternshipEntry({
  //     AddNewCreate : submitData,
  //     Title : Title,
  //     Icon : Icon,
  //     Tag : Tag,
  //   })
  // }catch{
    
  // }

    // 参考ここから
    // const submit = async (e: FormEvent<HTMLFormElement>) => {
    //   e.preventDefault()
    //     setIsShowLogin(true)
    //     return
    //   }
    //   setIsLoading(true)
  
    //   const submitData: InternshipEntryCreate = {
    //     ...fieldValues,
    //     created: serverTimestamp(),
    //   }
    //   try {
    //     const submitDataWithId = await InternshipEntryService.createInternshipEntry({
    //       internshipEntryCreate: submitData,
    //       corpId: internship.corpId,
    //       userId: userId,
    //     })
        // 参考ここまで
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
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              bgColor="gray.400"
              color={"white"}
              fontWeight={"light"}
              borderRadius="full"
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={SelectTag}
              bgColor="#FF0080"
              color={"white"}
              fontWeight={"light"}
              borderRadius="full"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {isShow === true && (
        <Modal
          onClose={() => {
            setIsShow(false);
          }}
          isOpen={true}
          isCentered
        >
          <ModalOverlay />
          <ModalContent h="600px" maxW="1000px">
            <ModalHeader>ADD NEW</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name" fontSize={"30px"}>
                  Title
                </FormLabel>
                <Input id="Title" placeholder="Input Title" size={"lg"} />
                <Box height={"20px"}></Box>
                <FormLabel htmlFor="Icon" fontSize={"30px"}>
                  Icon
                </FormLabel>
                <Select id="Icon" placeholder="Select Vtuber" size={"lg"}>
                  <option>一ノ瀬うるは</option>
                  <option>橘ひなの</option>
                  <option>藍沢エマ</option>
                  <option>空澄 セナ</option>
                  <option>花芽 すみれ</option>
                  <option>花芽 なずな</option>
                  <option>神成きゅぴ</option>
                  <option>如月 れん</option>
                </Select>
                <Box height={"20px"}></Box>
                <FormLabel htmlFor="Tag" fontSize={"30px"}>
                  Tag
                </FormLabel>
                <Input id="Tag" placeholder="Input Tag" size={"lg"} />
                <Box height={"20px"}></Box>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  setIsShow(false);
                }}
                bgColor="gray.400"
                color={"white"}
                fontWeight={"light"}
                borderRadius="full"
              >
                Cancel
              </Button>
              <Box w={"10px"}></Box>
              <Button
                onClick={() => {
                  setIsShow(false);
                }}
                bgColor="#FF0080"
                color={"white"}
                fontWeight={"light"}
                borderRadius="full"
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

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
                onClick={() => {
                  setIsShow(true);
                }}
              >
                ADD NEW
              </Button>
              <Box w={"30px"}></Box>
            </HStack>
          </HStack>
        </Box>

        <Box h={"28px"}></Box>

        <SimpleGrid bgColor="" m={"0 auto"} columns={3} gap="5">
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
