import {
  Link,
  Container,
  Flex,
  Spacer,
  HStack,
  VStack,
  Text,
  Box,
  Image,
  Divider,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <footer>
      <Box bgColor={"#133154"} maxW="100%" p={5}>
        <Container maxW="container.xl">
          <Flex direction="column" mb="5rem">
            <HStack
              alignItems="flex-start"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/rapidNinja.svg"
                alt="..."
                w="100px"
                display={{ base: "none", md: "block" }}
              />
              <Spacer />
              <VStack alignItems="flex-start" spacing={3}>
                <Text color="white">Rakuten RapidAPIとは</Text>
                <HStack
                  flexDirection={{ base: "row", md: "column" }}
                  alignItems="flex-start"
                >
                  <Link color={"gray.400"} p="2" fontSize="xs">
                    サービス概要
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    ブログ
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    採用情報
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    運営チーム
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    プレスルーム
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    お問い合わせ
                  </Link>
                </HStack>
              </VStack>
              <Divider display={{ base: "block", md: "none" }} />
              <VStack alignItems="flex-start" spacing={3}>
                <Text color="white">マーケットプレイス</Text>
                <HStack
                  flexDirection={{ base: "row", md: "column" }}
                  alignItems="flex-start"
                >
                  <Link color={"gray.400"} p="2" fontSize="xs">
                    機械学習 API
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    SMS API
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    Email API
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    決済 API
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    グルメ・レシピ API
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    全カテゴリから 探す
                  </Link>
                </HStack>
              </VStack>
              <Divider display={{ base: "block", md: "none" }} />
              <VStack alignItems="flex-start" spacing={3}>
                <Text color="white">開発者の 皆様</Text>

                <HStack
                  flexDirection={{ base: "row", md: "column" }}
                  alignItems="flex-start"
                >
                  <Link color={"gray.400"} p="2" fontSize="xs">
                    開発者にとっての 価値
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    ドキュメント： APIの利用
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    ダッシュボード
                  </Link>
                </HStack>
              </VStack>{" "}
              <Divider display={{ base: "block", md: "none" }} />
              <VStack alignItems="flex-start" spacing={3}>
                <Text color="white">APIプロバイダの 皆様</Text>

                <HStack
                  flexDirection={{ base: "row", md: "column" }}
                  alignItems="flex-start"
                >
                  <Link color={"gray.400"} p="2" fontSize="xs">
                    APIプロバイダにとっての 価値
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    ドキュメント： APIの 追加と 管理
                  </Link>

                  <Link color={"gray.400"} p="2" fontSize="xs">
                    プロバイダダッシュボード
                  </Link>
                </HStack>
              </VStack>
            </HStack>
          </Flex>
          <Divider />
          <HStack justifyContent="space-between">
            <Link color={"gray.400"} fontSize="small">
              © 2020 R Software, Inc.,Rakuten, Inc. All rights reserved.
            </Link>
            <HStack justifyContent="space-between">
              <Link color={"gray.400"} p="2" fontSize="xs">
                利用規約
              </Link>
              <Link color={"gray.400"} p="2" fontSize="xs">
                プライバシーポリシー
              </Link>
            </HStack>
            <HStack>
              <Link color={"gray.400"} p="2" fontSize="xs">
                English
              </Link>
              <Link color={"gray.400"} p="2" fontSize="xs">
                日本語
              </Link>
            </HStack>
            <Spacer />
            <HStack>
              <Spacer />
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/facebook.svg"
                alt="..."
              />
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/twitter.svg"
                alt="..."
              />
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/linked-in.svg"
                alt="..."
              />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
