import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import VtuberCommunityPage from "../../../../pages/VtuberCommunityPage";
import OfficeCardTag from "../CardTag";

export default function VtuberIconCard() {
  const h = "250px";
  const radiusSize = "39px";
  return (
    <>
      <Link href={"/VtuberCommunityPage"}>
        <Box position={"relative"} bgColor="red" borderRadius={radiusSize}>
          <Image
            borderRadius={radiusSize}
            h={h}
            w={h}
            bgSize="inherit"
            src={
              "https://yt3.ggpht.com/ytc/AKedOLQZ7kGnEH7CsX4Eoe79iPVh6Vp6oa2iP3_kInXO=s800-c-k-c0x00ffffff-no-rj"
            }
            alt="a"
          ></Image>
          <OfficeCardTag></OfficeCardTag>
          <Center
            borderBottomRadius={radiusSize}
            bgColor={"rgba(0,0,0,0.8)"}
            position="absolute"
            w={"100%"}
            h="50px"
            bottom="0"
          >
            <Text
              fontFamily={"Dela Gothic One"}
              fontSize="20px"
              color={"white"}
            >
              一ノ瀬うるは
            </Text>
          </Center>
        </Box>{" "}
      </Link>
    </>
  );
}
