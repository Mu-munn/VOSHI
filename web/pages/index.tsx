import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import "focus-visible/dist/focus-visible"
import PostForm from "../components/textArea"
import PostPreview from "../components/previewArea"
import Appbar from "../components/Appbar"
import ReactMarkdown from "react-markdown"
import { NavContent } from "../components/chakra/NavbarWithSubmenu/NavContent"
import { FirebaseApp, getApp } from "firebase/app"
import { NavbarWithAvator } from "../components/chakra/NavbarWithAvatar/App"
import VtuberIconCard from "../components/Cards/idea-card/VtuberIconCard"
import YouTube from "react-youtube"
import ArticleCard from "../components/Cards/idea-card/ArticleCard/app"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import ArticleSliders from "../components/Sliders/ArticleSlider/App"

export default function Home() {
  const app: FirebaseApp = getApp()

  const h = "250px"

  return (
    <>
      {/* https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC9xRxuzPaWS5vgrlH9436rQ&key=AIzaSyAP7sERAjo5k_SlyPs_gIM6UOF40ImgOig */}
      <Head>
        <title>VOSHI</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box bgColor={"aliceblue"}>
        <NavbarWithAvator></NavbarWithAvator>
        <VStack mb='150px' bgColor={""}>
          <Heading textAlign={"left"}>COMMUNITY</Heading>
          <Text>話題のコミュニティ</Text>
          <Box h='20px' w={"80%"} pos={"relative"}>
            <Button
            // onClick={

            // }
                // rightIcon={<ArrowForwardIcon />}
                // variant='unstyled'
                position={"absolute"}
                bottom='0'
                right='0'
              >
                LEARN MORE ＞
              </Button>
          </Box>
          

          <Box h='30px'></Box>
          <Center m={"auto 0"}>
            {/* ここスライドにしたい */}
            {/* <ArticleSliders></ArticleSliders> */}
            <VStack>
              <HStack>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
              </HStack>
            </VStack>
          </Center>
        </VStack>

        <Box
          w='100%'
          bgColor={"#fa709a"}
          py='6'
          borderTopLeftRadius={"200px"}
          boxShadow='dark-lg'
          h={"3000px"}
        >
          <VStack h='' p={""} w='80%' m={"0 auto"} >
            <Box h='30px'></Box>
            <Box  w="90%" pos={"relative"}>
              <Heading textAlign={"center"}>PICK UP</Heading>
              <Button
                // rightIcon={<ArrowForwardIcon />}
                variant='unstyled'
                position={"absolute"}
                bottom='0'
                right='0'
              >
                LEARN MORE ＞
              </Button>
            </Box>

            <Text>話題のVtuber</Text>

            <Box h='20px'></Box>
            <HStack justifyContent={"space-between"} spacing='30px'>
              <VtuberIconCard></VtuberIconCard>
              <VtuberIconCard></VtuberIconCard>
              <VtuberIconCard></VtuberIconCard>
              <VtuberIconCard></VtuberIconCard>
            </HStack>
          </VStack>

          <Box h='100px'></Box>

          {/* <VStack h='' p={""} w='80%' m={"0 auto"}>
            <Box h='20px'></Box>
            <Heading>RANKING</Heading>
            <Text>最も推し活してるユーザー</Text>
            <Box h='20px'></Box>
            <HStack justifyContent={"space-between"} spacing='30px'>
              <VtuberIconCard></VtuberIconCard>
              <VtuberIconCard></VtuberIconCard>
              <VtuberIconCard></VtuberIconCard>
            </HStack>
          </VStack>

          <Box h='100px'></Box> */}

          <VStack h='' p={""} w='80%' m={"0 auto"}>
            <Box h='20px'></Box>
            <Heading>SONG</Heading>
            <Text>オススメの歌ってみた</Text>
            <Box h='20px'></Box>
            <HStack justifyContent={"space-between"} spacing='30px'>
              <YouTube videoId='xhgDks7aDqo'></YouTube>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </>
  )
}
