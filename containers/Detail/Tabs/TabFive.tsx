import { Box, Text, Heading, Flex } from "@chakra-ui/react";

const TabFive = () => {
  return (
    <Box>
      <Flex direction="column" alignItems="center">
        <Text fontSize="2xl" align="center" mt="10px">
          プランを選択してください
        </Text>
        <Text fontSize="lg" align="center" mt="20px" w="800px">
          RapidAPIは、および使用している他のものを明確に可視化します。
          複数のキーとサブスクリプションアカウントについて心配する必要はありません
        </Text>
      </Flex>
      <Flex direction="column" mt="100px" mx="50px">
        <Text fontSize="xs">
          * リストされた米ドルの価格からの現在の為替レートに基づいた見積もり
        </Text>
      </Flex>
    </Box>
  );
};
export default TabFive;
