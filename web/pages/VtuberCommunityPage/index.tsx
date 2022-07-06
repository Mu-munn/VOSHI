import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
  Link
} from "@chakra-ui/react";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
import OfficeCardTag from "../../components/Cards/idea-card/CardTag/index";
import ArticleCard from "../../components/Cards/idea-card/ArticleCard/app";
import VtuberIconCard from "../../components/Cards/idea-card/VtuberIconCard";
export default function VtuberCommunityPage() {
  return (
    <Box backgroundColor={"aliceblue"}>
      <NavbarWithAvator></NavbarWithAvator>
      <Center
        // backgroundColor={"skyblue"}
        w={"100%"}
        borderBottomLeftRadius={"200px"}
        h="350px"
        bgGradient="linear(to-t, skyblue, aliceblue)"
      >
        <HStack justifyContent={"space-between"} spacing="200px">
          <Image
            marginLeft={"30px"}
            borderRadius={"90%"}
            h={"250px"}
            w={"250px"}
            bgSize="inherit"
            src={
              "https://yt3.ggpht.com/ytc/AKedOLQZ7kGnEH7CsX4Eoe79iPVh6Vp6oa2iP3_kInXO=s800-c-k-c0x00ffffff-no-rj"
            }
            alt="a"
          ></Image>
          <Stack justifyContent={"start"} spacing="30px">
            <HStack>
            <OfficeCardTag/>
            <OfficeCardTag/>
            <OfficeCardTag/>
            <OfficeCardTag/>
            <OfficeCardTag/>
            <OfficeCardTag/>
            </HStack>
            <HStack justifyContent={"space-between"} spacing="30px">
              <Heading fontSize={"100px"} fontWeight="light">
                <div className="VtuberCommunityPageText" id="WhiteText">
                  一ノ瀬　うるは
                </div>
              </Heading>
            </HStack>
            <HStack justifyContent={"flex-start"} spacing="50px">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC5LyYg6cCA4yHEYvtUsir3g">
            <FiYoutube size={"35px"} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/uruha_ichinose">
            <FiTwitter size={"35px"}/>
            </a>
              
            </HStack>
          </Stack>
        </HStack>
        <Box h={"30px"}></Box>
      </Center>
      <Box h={"30px"}></Box>
      <VStack>
        <Heading textAlign={"center"}>COMMUNITY</Heading>
        <Text>コミュニティ</Text>
      </VStack>
      <Box h="30px" w={"80%"} pos={"relative"}>
        <Button position={"absolute"} bottom="0px" right="0px">
          LEARN MORE ＞
        </Button>
      </Box>
      <Box h={"30px"}></Box>
      <Center m={"auto 0"}>
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
        <Button position={"absolute"} bottom="0px" right="0px">
          LEARN MORE ＞
        </Button>
      </Box>
      <Box h={"30px"}></Box>
      <Center m={"auto 0"}>
        <VStack>
          <HStack justifyContent={"space-between"} spacing="30px">
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
