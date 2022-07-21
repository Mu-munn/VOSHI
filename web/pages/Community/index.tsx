import { PhoneIcon } from "@chakra-ui/icons"
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
  Link,
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
  textDecoration,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"

import ArticleCard from "../../components/Cards/idea-card/ArticleCard/app"
import OfficeCardTag from "../../components/Cards/idea-card/CardTag"
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App"
import { BiCategory } from "react-icons/bi"
import AddNewModal from "components/Popups/AddNewModal/App"
import { Community } from "@/project-types/community"
import React, { useEffect, useState } from "react"
import { GetServerSideProps } from "next/types"
import { CommunityService } from "src/service/community-service"
import router from "next/router"
import { getAllPathIds } from "src/lib/community"

interface CommunityPageProps {
  fetchCommunitiesData: any
  communities: Community[]
}

export const getStaticProps = async () => {
  const fetchCommunitiesData = await CommunityService.fetchCommunties()

  return {
    props: {
      fetchCommunitiesData,
      revalidate: 1,
    },
  }
}

const CommunityPage = (props: CommunityPageProps) => {
  const communities = props
  const communitiesArray = communities.fetchCommunitiesData

  const defaultValue: Community = {
    id: "",
    name: "",
    vtuberId: "",
    taglds: [],
    latestUid: [],
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [isShow, setIsShow] = useState(false)
  const [fieldValues, setFieldValues] = useState<Community>(defaultValue)

  const InputChange = (e: any) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setFieldValues({ ...fieldValues, [name]: value })
  }

  const submit = async () => {
    try {
     await CommunityService.createCommunity({ community: fieldValues })
    } catch (e) {
      console.log(e)
    }
    location.reload()
  }

  return (
    <Box bgColor={"aliceblue"} h='2000px'>
      {console.log(communitiesArray)}

      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant='outline'
              mr={3}
              onClick={onClose}
              bgColor='gray.400'
              color={"white"}
              fontWeight={"light"}
              borderRadius='full'
            >
              Cancel
            </Button>
            <Button
              colorScheme='blue'
              bgColor='#FF0080'
              color={"white"}
              fontWeight={"light"}
              borderRadius='full'
              onClick={() => {}}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {isShow === true && (
        <Modal
          onClose={() => {
            setIsShow(false)
          }}
          isOpen={true}
          isCentered
        >
          <ModalOverlay />
          <ModalContent h='600px' maxW='1000px'>
            <ModalHeader>ADD NEW</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor='first-name' fontSize={"30px"}>
                  Title
                </FormLabel>
                <Input
                  id='title'
                  name='name'
                  placeholder='Input Title'
                  size={"lg"}
                  onChange={(e) => {
                    InputChange(e)
                  }}
                ></Input>
                <Box height={"20px"}></Box>
                <FormLabel htmlFor='Icon' fontSize={"30px"}>
                  Icon
                </FormLabel>
                <Select id='icon' placeholder='Select Vtuber' size={"lg"}>
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
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  setIsShow(false)
                }}
                bgColor='gray.400'
                color={"white"}
                fontWeight={"light"}
                borderRadius='full'
              >
                Cancel
              </Button>
              <Box w={"10px"}></Box>
              <Button
                onClick={() => {
                  setIsShow(false)
                  submit()
                }}
                bgColor='#FF0080'
                color={"white"}
                fontWeight={"light"}
                borderRadius='full'
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      <NavbarWithAvator></NavbarWithAvator>
      <Stack justify={"space-between"} w='95%' direction={"row"} m={"0 auto"} alignItems={"end"}>
        <Heading
          m={"0 auto"}
          alignItems={"end"}
          fontSize={"100px"}
          bgColor='#e30079'
          bgClip='text'
          fontWeight='extrabold'
        >
          COMMUNITY
        </Heading>
      </Stack>

      <Box h={"28px"}></Box>

      <Box className='content' w={"95%"} m='0 auto'>
        <Box
          pos={"sticky"}
          top='50px'
          zIndex={1}
          bgColor='white'
          borderRadius={"2xl"}
          p={2}
          boxShadow='md'
          w='86%'
          m={"0 auto"}
        >
          <HStack h={"70px"} bgColor='' justifyContent={"space-between"}>
            {/* <SimpleGrid>{test.length && <OfficeCardTag></OfficeCardTag>}</SimpleGrid> */}
            <Flex wrap={"wrap"} w='800px' gap={1}>
              {["green", "red"].map((m) => (
                <Tag key={m} borderRadius='full' variant='solid' colorScheme={m}>
                  <TagLabel>{m}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>
            <HStack alignItems={"flex-end"}>
              <IconButton
                colorScheme={"pink"}
                variant='outline'
                aria-label='Call Segun'
                icon={<BiCategory />}
                size='md'
                borderRadius={"full"}
                ref={btnRef}
                onClick={onOpen}
              />
              <Box w={"10px"}></Box>
              <Button
                bgColor='#FF0080'
                color={"white"}
                fontWeight={"light"}
                borderRadius='full'
                onClick={() => {
                  setIsShow(true)
                }}
              >
                ADD NEW
              </Button>
              <Box w={"30px"}></Box>
            </HStack>
          </HStack>
        </Box>

        <Box h={"28px"}></Box>
        <Center>
          <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            {/* <ArticleCard /> */}
            {/* ここで繰り返し */}
            {communitiesArray.map((m) => {
              // console.log(m);
              return (
                <Link key={""} href={`/Community/${m.id}`} _hover={{ textDecoration: "none" }}>
                  <ArticleCard key={m.id} title={m.name}></ArticleCard>
                </Link>
              )
            })}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  )
}
export default CommunityPage
