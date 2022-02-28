import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
  Container,
  Text,
  Box,
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
      <TabList
        borderBottom="1px"
        w="100%"
        color="blue.500"
        mt={{
          base: "13.25rem",
          sm: "10.425rem",
          xl: "6.275rem",
        }}
        position="fixed"
        bg="white"
        zIndex={100}
      >
        <Container
          fontSize="xl"
          mx="auto"
          maxW="container.xl"
          display="inline-flex"
        >
          <Tab wordBreak="keep-all">エンドポイント</Tab>
          <Tab wordBreak="keep-all">概要</Tab>
          <Tab wordBreak="keep-all">チュートリアル</Tab>
          <Tab wordBreak="keep-all">ディスカッション</Tab>
          <Tab wordBreak="keep-all">料金プラン</Tab>
        </Container>
      </TabList>
      <Box pt={{ base: "16rem", sm: "14rem", xl: "10rem" }}>
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
      </Box>
    </Tabs>
  );
};
export default TabHeader;
