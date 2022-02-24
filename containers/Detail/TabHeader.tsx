import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
  Container,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import TabFive from "./TabFive";
import TabFour from "./TabFour";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";
// import TabOne from "./TabOne";

const TabHeader: FC = () => {
  return (
    <Tabs defaultIndex={0}>
      <TabList border="0" color="blue.500">
        <Container maxW="container.xl" display="inline-flex">
          <Tab>エンドポイント</Tab>
          <Tab>概要</Tab>
          <Tab>チュートリアル</Tab>
          <Tab>ディスカッション</Tab>
          <Tab>料金プラン</Tab>
        </Container>
      </TabList>
      <Divider />
      <Container maxW="container.xl">
        <TabPanels>
          <TabPanel>
            <TabOne />
          </TabPanel>
          <TabPanel>
            <TabTwo />
          </TabPanel>
          <TabPanel>
            <TabThree />
          </TabPanel>
          <TabPanel>
            <TabFour />
          </TabPanel>
          <TabPanel>
            <TabFive />
          </TabPanel>
        </TabPanels>
      </Container>
    </Tabs>
  );
};
export default TabHeader;
