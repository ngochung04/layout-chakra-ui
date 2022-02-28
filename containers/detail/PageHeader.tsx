import {
  Box,
  Container,
  Image,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  Spacer,
  Badge,
  VStack,
  Link,
  Divider,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiBookmark } from "react-icons/fi";
import TabHeader from "./TabHeader";

const PageHeader: FC = () => {
  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="gray.300"
        bg="white"
        w="100%"
        mt="-0.25rem"
        position="fixed"
        zIndex={100}
      >
        <Container maxWidth="container.xl">
          <Flex direction={{ base: "column", xl: "row" }}>
            <Flex alignItems="center" mx="1rem">
              <Image
                src="https://rapidapi-prod-apis.s3.amazonaws.com/a3/b32870371111e98fa4f768e3b3776c/1017853ad6caff0e4486825248299cad.png"
                alt="logo"
                w="60px"
                h="60px"
              />
              <VStack alignItems="baseline" mx="10px">
                <HStack>
                  <Text fontSize="xl" wordBreak="keep-all">
                    Google Translate
                  </Text>
                  <FiBookmark />
                  <Badge bg="gray.700" wordBreak="keep-all" color="white">
                    フリーミアム
                  </Badge>
                </HStack>
                <Spacer />
                <HStack>
                  <Text wordBreak="keep-all" fontSize="sm" color="gray.500">
                    開発者
                    <Link color="blue.500">googlecloud</Link>
                  </Text>

                  <Text wordBreak="keep-all" fontSize="sm" color="gray.500">
                    {"| "}更新日 5ヶ月前
                  </Text>
                  <Text wordBreak="keep-all" fontSize="sm" color="gray.500">
                    {"| "}
                    <Link color="blue.500">テキスト解析</Link>
                  </Text>
                </HStack>
              </VStack>
            </Flex>
            <Spacer />
            {/*  */}
            <Flex mx="3rem" mt="1.5rem">
              <Flex
                mx="5px"
                direction="column"
                alignContent="space-around"
                justifyContent="space-between"
              >
                <Box textAlign="center">
                  <Image
                    verticalAlign="middle"
                    src="https://api.rakuten.net/static-assets/rakuten/popularity.svg"
                    display="inline"
                    m="1"
                    alt="..."
                    htmlWidth="15px"
                  />
                  <Text fontSize="xs" display="inline" color="gray.500">
                    人気度
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="4xl">9.9/10</Text>
                </Box>
              </Flex>
              <Divider orientation="vertical" borderColor="gray.300" />
              <Flex
                mx="5px"
                direction="column"
                alignContent="space-around"
                justifyContent="space-between"
              >
                <Box textAlign="center">
                  <Image
                    verticalAlign="middle"
                    src="https://api.rakuten.net/static-assets/rakuten/latency.svg"
                    display="inline"
                    m="1"
                    alt="..."
                    htmlWidth="15px"
                  />
                  <Text fontSize="xs" display="inline" color="gray.500">
                    レイテンシ
                  </Text>
                </Box>
                <Text fontSize="4xl">489ms</Text>
              </Flex>
              <Divider orientation="vertical" borderColor="gray.300" />
              <Flex
                direction="column"
                alignContent="space-around"
                justifyContent="space-between"
                mx="5px"
              >
                <Box
                  wordBreak="keep-all"
                  textAlign="center"
                  justifyItems="center"
                >
                  <Image
                    verticalAlign="middle"
                    src="https://api.rakuten.net/static-assets/rakuten/success-new.svg"
                    display="inline"
                    m="1"
                    alt="..."
                    htmlWidth="15px"
                  />
                  <Text
                    wordBreak="keep-all"
                    fontSize="xs"
                    display="inline"
                    color="gray.500"
                  >
                    正常稼働率
                  </Text>
                </Box>
                <Text fontSize="4xl">91%</Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box borderTop="1px" borderColor="gray.200" bg="white">
        <TabHeader />
      </Box>
    </>
  );
};
export default PageHeader;
