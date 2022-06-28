import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "focus-visible/dist/focus-visible";
import PostForm from "../components/textArea";
import PostPreview from "../components/previewArea";
import Appbar from "../components/Appbar";
import ReactMarkdown from "react-markdown";
import { NavContent } from "../components/chakra/NavbarWithSubmenu/NavContent";
import { FirebaseApp, getApp } from "firebase/app";
import { NavbarWithAvator } from "../components/chakra/NavbarWithAvatar/App";

export default function Home() {
  const app: FirebaseApp = getApp();
  return (
    <>
      {/* https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC9xRxuzPaWS5vgrlH9436rQ&key=AIzaSyAP7sERAjo5k_SlyPs_gIM6UOF40ImgOig */}
      <Head>
        <title>VOSHI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor={"aliceblue"}>
        <Box h={"100vh"}>
          <NavbarWithAvator></NavbarWithAvator>
          <Center h={"100px"}>
            <Avatar
              boxSize="10"
              name="Christoph Winston"
              src="https://tinyurl.com/yhkm2ek8"
              as="a"
              href="/VtuberCommunityPage"
            ></Avatar>
          </Center>
          <Box h="320px" p={2} w="80%" m={"0 auto"}>
            <Heading mb="5">話題のVtuber!!</Heading>
            <HStack justifyContent={"space-between"}>
              <Image
                borderRadius={"50px"}
                h={"300px"}
                w="300px"
                bgSize="inherit"
                src={
                  "https://yt3.ggpht.com/ytc/AKedOLQZ7kGnEH7CsX4Eoe79iPVh6Vp6oa2iP3_kInXO=s800-c-k-c0x00ffffff-no-rj"
                }
                alt="a"
              ></Image>
              <Image
                borderRadius={"50px"}
                h={"300px"}
                w="300px"
                bgSize="inherit"
                src={
                  "https://yt3.ggpht.com/BcgqkZ7KsqPj6dIT0NIHWqOLt8XcogzwdI5miNwr412ocSwGP057XIy8-ji9kk_hp6MuKPpW4w=s800-c-k-c0x00ffffff-no-rj"
                }
                alt="a"
              ></Image>
              <Image
                borderRadius={"50px"}
                h={"300px"}
                w="300px"
                bgSize="inherit"
                src={
                  "https://yt3.ggpht.com/BcgqkZ7KsqPj6dIT0NIHWqOLt8XcogzwdI5miNwr412ocSwGP057XIy8-ji9kk_hp6MuKPpW4w=s800-c-k-c0x00ffffff-no-rj"
                }
                alt="a"
              ></Image>
              <Image
                borderRadius={"50px"}
                h={"300px"}
                w="300px"
                bgSize="inherit"
                src={
                  "https://yt3.ggpht.com/BcgqkZ7KsqPj6dIT0NIHWqOLt8XcogzwdI5miNwr412ocSwGP057XIy8-ji9kk_hp6MuKPpW4w=s800-c-k-c0x00ffffff-no-rj"
                }
                alt="a"
              ></Image>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
