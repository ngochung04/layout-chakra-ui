import { Box, Container, Flex, Text, Image, Divider } from "@chakra-ui/react";
import Comments from "./Comments";
import Pagination from "../../../components/detail/tab-four/Pagination";
const TabFour = () => {
  return (
    <>
      <Container maxW="container.xl" px="2rem">
        <Flex justifyContent="space-between">
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="medium"
              color="gray.700"
              display="inline"
            >
              ディスカッション
            </Text>
            <Text
              mx="1rem"
              px="0.6rem"
              py="0.3rem"
              border="1px"
              borderRadius="0.25rem"
              borderColor="#919191"
              display="inline"
              fontWeight="bold"
              color="gray.500"
            >
              43
            </Text>
            <Text display="inline" fontWeight="medium">
              ディスカッションを開始
            </Text>
          </Box>
          <Box pt="1rem">
            <Text display="inline" mx="1rem" color="gray.500" fontSize="sm">
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/dd-arrow.svg"
                display="inline"
                alt="arrow"
              />
              コメント
            </Text>
            <Text display="inline" color="gray.500" fontSize="sm">
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/dd-arrow.svg"
                display="inline"
                alt="arrow"
              />
              新着
            </Text>
          </Box>
        </Flex>
        <Divider mt="1rem" orientation="horizontal" />
        <Comments />
        <Pagination />
      </Container>
    </>
  );
};
export default TabFour;
