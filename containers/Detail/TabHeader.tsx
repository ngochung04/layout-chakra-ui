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
import TabFive from "./Tabs/TabFive";
import TabOne from "./Tabs/TabOne";

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
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>
            <TabFive />
          </TabPanel>
        </TabPanels>
      </Container>
    </Tabs>
  );
};
export default TabHeader;
