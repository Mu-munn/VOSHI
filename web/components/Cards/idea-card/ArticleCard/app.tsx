import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ArticleCard(props) {
  return (
    
      <Stack
        justifyContent={"space-between"}
        bgColor={"#ff5c76"}
        h="230px"
        w="430px"
        borderRadius={"20px"}
        // boxShadow='2xl'
        p={"3"}
        pos="relative"
        _hover={{ opacity: "70%" }}
        transition="0.5s"
      >
        <Heading
          h={"100px"}
          // bgColor='#fa788d'
          fontWeight={"light"}
          // color='#343434'
          color="white"
          borderRadius={"md"}
          // opacity='90%'
          p={1}
          textShadow="2px 2px #ff0000"
        >
          {props.title}
          {/* 今日の配信が良かったああああああ件 */}
        </Heading>

        <HStack p={1}>
          <Tag variant={"solid"} size={"md"} colorScheme={"cyan"}>
            配信
          </Tag>
          <Tag variant={"solid"} size={"md"} colorScheme={"yellow"}>
            配信
          </Tag>
          <Tag variant={"solid"} size={"md"} colorScheme={"yellow"}>
            配信
          </Tag>
        </HStack>

        <HStack justifyContent={"space-between"} bgColor="" w={"100%"}>
          <Avatar
            name=""
            size={"lg"}
            src="https://yt3.ggpht.com/o4GRKhWWG_vvRHtD7PygytWqZNpN8fQD2NTdtmZrFCLjbGJrW9lhJZWmlvdNRc13nd4H7VrLXLc=s800-c-k-c0x00ffffff-no-rj"
          />
          <AvatarGroup size="md" max={5}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </HStack>
      </Stack>
  );
}
