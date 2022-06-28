import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { NavbarWithAvator } from "../../components/chakra/NavbarWithAvatar/App";
export default function VtuberCommunityPage() {
  return (
    <>
    <NavbarWithAvator></NavbarWithAvator>
      <Tabs ml={"50px"} mr={"50px"}>
        <TabList>
          <Tab>Oned</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
