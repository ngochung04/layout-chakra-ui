import { Box, Text, Flex, Container } from "@chakra-ui/react";
import Questions from "./Questions";
import Table from "../../../components/detail/tab-five/Table";
import PlatForm from "../../../components/detail/tab-five/PlatForm";
import Dashboard from "../../../components/detail/tab-five/Dashboard";
const TabFive = () => {
  const settingBox = {
    border: "1px",
    borderColor: "gray.200",
    w: "13.75rem",
  };
  const settingButton = {
    bg: "blue.500",
    color: "white",
    _hover: { bg: "blue.300" },
  };
  return (
    <Container maxW="container.xl">
      <Flex direction="column" alignItems="center" w="70%" mx="auto">
        <Text fontSize="3xl" fontWeight="medium" align="center" mt="10px">
          プランを選択してください
        </Text>
        <Text
          fontSize="lg"
          align="center"
          fontWeight="medium"
          mt="20px"
          w="50rem"
        >
          RapidAPIは、および使用している他のものを明確に可視化します。複数のキーとサブスクリプションアカウントについて心配する必要はありません
        </Text>
      </Flex>
      <Flex direction="column" mt="100px" mx="50px" mb="1rem">
        <Text fontSize="sm" fontWeight="medium">
          * リストされた米ドルの価格からの現在の為替レートに基づいた見積もり
        </Text>
      </Flex>

      {/* Table */}
      <Box>
        <Table />
      </Box>
      <Box mt="3rem">
        <Text align="center" fontSize="3xl" fontWeight="medium" mb="3rem">
          よくあるご質問
        </Text>
        <Questions />
      </Box>
      <Box mt="3rem">
        <PlatForm />
      </Box>
      <Box mt="3rem">
        <Dashboard />
      </Box>
    </Container>
  );
};
export default TabFive;
