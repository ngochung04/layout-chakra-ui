import { Box, Link, Text } from "@chakra-ui/react";
import SplitPane, { Pane } from "react-split-pane";
import Split from "react-split";
const TabOne = () => {
  return (
    <Box>
      <Text fontSize="2xl" my="1rem">
        「Google Translate 」のドキュメント
      </Text>
      <Text fontSize="md" my="1rem">
        Dynamically translate between languages.
      </Text>
      <Link color="blue.500" _hover={{ textDecoration: "none" }}>
        <Text my="2rem">このAPIについて詳しく見る</Text>
      </Link>
      {/* <SplitPane split="vertical" minSize={50} defaultSize={100}>
        <Box w="100px" h="100px" bg="red" />
        <Box w="100px" h="100px" bg="yellow" />
      </SplitPane> */}
      {/* <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Box bg="red">0</Box>
        <Box bg="yellow">1</Box>
      </Split> */}
      <SplitPane split="vertical">
        <Pane>You can use a Pane component</Pane>
        <div>or you can use a plain old div</div>
        <Pane>Using a Pane allows you to specify any constraints directly</Pane>
      </SplitPane>
      ;
    </Box>
  );
};
export default TabOne;
