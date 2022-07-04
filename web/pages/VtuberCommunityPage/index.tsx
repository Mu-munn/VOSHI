import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Image,
  Text,
  Heading,
  Flex,
  Box,
  Stack,
  Divider,
  HStack,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import OfficeCardTag from "../../components/Cards/idea-card/CardTag/index";
import ArticleCard from "../../components/Cards/idea-card/ArticleCard/app";
import VtuberIconCard from "../../components/Cards/idea-card/VtuberIconCard";
export default function VtuberCommunityPage() {
  return (
    <Box backgroundColor={"aliceblue"}>
      <NavbarWithAvator></NavbarWithAvator>
      <Center 
      backgroundColor={"skyblue"} 
      w={"100%"}
      borderBottomLeftRadius={"200px"}
      >
          <Box h={"30px"}></Box>
          <HStack justifyContent={"space-between"} spacing='200px'>
            <Box
            
            >
              <HStack>
                <Image
                  marginLeft={"30px"}
                  borderRadius={"90%"}
                  h={"300px"}
                  w={"300px"}
                  bgSize="inherit"
                  src={
                    "https://yt3.ggpht.com/ytc/AKedOLQZ7kGnEH7CsX4Eoe79iPVh6Vp6oa2iP3_kInXO=s800-c-k-c0x00ffffff-no-rj"
                  }
                  alt="a"
                ></Image>
              </HStack>
            </Box>
            <VStack>
              <Box>
                <HStack justifyContent={"space-between"} spacing='30px'>
                  <Heading fontSize={"100px"} fontWeight="light">
                    <div className="VtuberCommunityPageText" id="WhiteText">
                      一ノ瀬　うるは
                    </div>
                  </Heading>
                  <OfficeCardTag></OfficeCardTag>
                </HStack>
              </Box>

              <Box>
                <HStack justifyContent={"space-between"} spacing='30px'>
                  <Link
                    href="https://www.youtube.com/channel/UC5LyYg6cCA4yHEYvtUsir3g"
                    isExternal
                  >
                    <div className="VtuberCommunityPageText">Youtube</div>
                  </Link>

                  <Link href="https://twitter.com/uruha_ichinose" isExternal>
                    <div className="VtuberCommunityPageText">Twitter</div>
                  </Link>
                </HStack>
              </Box>
            </VStack>
          </HStack>
          <Box h={"30px"}></Box>
      </Center>
      <Box h={"30px"}></Box>
      <VStack>
        <Heading textAlign={"center"}>COMMUNITY</Heading>
        <Text>コミュニティ</Text>
      </VStack>
      <Box h="30px" w={"80%"} pos={"relative"}>
        <Button
          // rightIcon={<ArrowForwardIcon />}
          // variant='unstyled'
          position={"absolute"}
          bottom="0px"
          right="0px"
        >
          LEARN MORE ＞
        </Button>
      </Box>
      <Box h={"30px"}></Box>
      <Center m={"auto 0"}>
        {/* ここスライドにしたい */}
        {/* <ArticleSliders></ArticleSliders> */}
        <VStack>
          <HStack>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </HStack>
          <HStack>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </HStack>
        </VStack>
      </Center>
      <Box h={"30px"}></Box>
      <VStack>
        <Heading textAlign={"center"}>CONNECTION</Heading>
        <Text>関連のVtuber</Text>
      </VStack>
      <Box h="30px" w={"80%"} pos={"relative"}>
        <Button
          // rightIcon={<ArrowForwardIcon />}
          // variant='unstyled'
          position={"absolute"}
          bottom="0px"
          right="0px"
        >
          LEARN MORE ＞
        </Button>
      </Box>
      <Box h={"30px"}></Box>
      <Center m={"auto 0"}>
        {/* ここスライドにしたい */}
        {/* <ArticleSliders></ArticleSliders> */}
        <VStack>
          <HStack justifyContent={"space-between"} spacing='30px'>
            <VtuberIconCard></VtuberIconCard>
            <VtuberIconCard></VtuberIconCard>
            <VtuberIconCard></VtuberIconCard>
            <VtuberIconCard></VtuberIconCard>
          </HStack>
        </VStack>
      </Center>
      <Box h={"1000px"}></Box> {/*スクロールするためのスペース「削除予定」 */}
    </Box>
  );
}
