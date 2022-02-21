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
      <Box bg="white" mt="1" pb="3">
        <Container maxWidth="container.xl">
          <Flex>
            <Flex position="static">
              <Image
                src="https://rapidapi-prod-apis.s3.amazonaws.com/a3/b32870371111e98fa4f768e3b3776c/1017853ad6caff0e4486825248299cad.png"
                alt="logo"
                w="60px"
              />
              <VStack alignItems="baseline" mx="10px">
                <HStack>
                  <Text fontSize="xl">Google Translate</Text>
                  <FiBookmark />
                  <Badge bg="gray.700" color="white">
                    フリーミアム
                  </Badge>
                </HStack>
                <Spacer />
                <HStack>
                  <Text fontSize="sm" color="gray.500">
                    開発者
                    <Link color="blue.500">googlecloud</Link>
                  </Text>
                  <Divider orientation="vertical" />
                  <Text fontSize="sm" color="gray.500">
                    更新日 5ヶ月前
                  </Text>
                  <Divider orientation="vertical" />
                  <Text fontSize="sm" color="gray.500">
                    <Link color="blue.500">テキスト解析</Link>
                  </Text>
                </HStack>
              </VStack>
            </Flex>
            <Spacer />
            {/*  */}
            <Flex display={{ base: "none", lg: "inline-flex" }}>
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
                  <Text fontSize="4xl">9.9 / 10</Text>
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
                <Box textAlign="center" justifyItems="center">
                  <Image
                    verticalAlign="middle"
                    src="https://api.rakuten.net/static-assets/rakuten/success-new.svg"
                    display="inline"
                    m="1"
                    alt="..."
                    htmlWidth="15px"
                  />
                  <Text fontSize="xs" display="inline" color="gray.500">
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
