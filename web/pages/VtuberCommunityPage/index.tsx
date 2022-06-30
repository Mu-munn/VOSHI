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
} from "@chakra-ui/react";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
export default function VtuberCommunityPage() {
  return (
    <>
      <Box backgroundColor={"aliceblue"}>
        <NavbarWithAvator></NavbarWithAvator>
        <Stack
          backgroundColor={"skyblue"}
          alignItems="center"
          gap="2"
          direction={["column", "row"]}
        >
          <Image
            marginLeft={"30px"}
            borderRadius={"50px"}
            h={"300px"}
            w="300px"
            bgSize="inherit"
            src={
              "https://yt3.ggpht.com/ytc/AKedOLQZ7kGnEH7CsX4Eoe79iPVh6Vp6oa2iP3_kInXO=s800-c-k-c0x00ffffff-no-rj"
            }
            alt="a"
          ></Image>
          <Heading>
            <div className="VtuberCommunityPageText" id="WhiteText">
              一ノ瀬　うるは
            </div>
          </Heading>
          <Link
            href="https://www.youtube.com/channel/UC5LyYg6cCA4yHEYvtUsir3g"
            isExternal
          >
            <div className="VtuberCommunityPageText" id="WhiteText">
            Youtube
            </div>
          </Link>
          <Link href="https://twitter.com/uruha_ichinose" isExternal>
            <div className="VtuberCommunityPageText" id="WhiteText">
            Twitter
            </div>
          </Link>
        </Stack>
        <Divider padding={"10px"} borderColor={"blue"} />
        <Box></Box>
      </Box>
    </>
  );
}
