import { Text, Box, Flex, Image } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Box w="70%" mx="auto">
        <Text fontSize="3xl" fontWeight="medium" align="center">
          1つのダッシュボード、全てのAPI
        </Text>
        <Text
          fontSize="lg"
          fontWeight="medium"
          align="center"
          color="gray.800"
          pt="1rem"
        >
          RapidAPIは、および使用している他のものを明確に可視化します。
          複数のキーとサブスクリプションアカウントについて心配する必要はありません
        </Text>
      </Box>
      <Flex mt="3rem" mx="3rem" justifyContent="space-around">
        <Box w="30%">
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/blue-number-1.svg"
            alt="..."
            w="50px"
            mx="auto"
          />
          <Text pt="1rem" fontSize="3xl" align="center">
            コール数と 利用料金
          </Text>
          <Text pt="1rem" align="center" color="gray.600" fontWeight="medium">
            1つの ダッシュボードで すべての APIの コール数と 対応する 利用料金を
            モニタリング できます。
          </Text>
        </Box>
        <Box w="30%">
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/blue-number-2.svg"
            alt="..."
            w="50px"
            mx="auto"
          />
          <Text pt="1rem" fontSize="3xl" align="center">
            エラーと レイテンシ
          </Text>
          <Text pt="1rem" align="center" color="gray.600" fontWeight="medium">
            APIのエラーと、 レイテンシの 傾向を 常に 追跡することで、 アプリの
            稼働時間を 向上させます。
          </Text>
        </Box>
        <Box w="30%">
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/blue-number-3.svg"
            alt="..."
            w="50px"
            mx="auto"
          />
          <Text pt="1rem" fontSize="3xl" align="center">
            APIコールの ログ
          </Text>
          <Text pt="1rem" align="center" color="gray.600" fontWeight="medium">
            APIコールの ログを 検索・確認 することで より迅速に 不具合の 修正を
            行えます。
          </Text>
        </Box>
      </Flex>
      <Image
        src="https://api.rakuten.net/static-assets/rakuten/charts.png"
        alt="..."
      />
    </>
  );
};
export default Dashboard;
