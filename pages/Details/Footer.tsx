import {
  Link,
  Container,
  Flex,
  Spacer,
  HStack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <footer>
      <Container bgColor={"blue.800"} maxW="100%" p={5}>
        <Flex justifyContent="space-around">
          <HStack alignItems="flex-start">
            <Image
              src="https://api.rakuten.net/static-assets/rakuten/rapidNinja.svg"
              alt="..."
              w="150px"
            />
            <Spacer />
            <VStack alignItems="flex-start">
              <Text color="white">Rakuten RapidAPIとは</Text>
              <div>
                <Link color={"gray.400"} p="2">
                  サービス概要
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  ブログ
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  採用情報
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  運営チーム
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  プレスルーム
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  お問い合わせ
                </Link>
              </div>
            </VStack>
            <VStack alignItems="flex-start">
              <Text color="white">マーケットプレイス</Text>

              <div>
                <Link color={"gray.400"} p="2">
                  機械学習 API
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  SMS API
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  Email API
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  決済 API
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  グルメ・レシピ API
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  全カテゴリから 探す
                </Link>
              </div>
            </VStack>
            <VStack alignItems="flex-start">
              <Text color="white">開発者の 皆様</Text>
              <div>
                <Link color={"gray.400"} p="2">
                  開発者にとっての 価値
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  ドキュメント： APIの利用
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  ダッシュボード
                </Link>
              </div>
            </VStack>
            <VStack alignItems="flex-start">
              <Text color="white">APIプロバイダの 皆様</Text>
              <div>
                <Link color={"gray.400"} p="2">
                  APIプロバイダにとっての 価値
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  ドキュメント： APIの 追加と 管理
                </Link>
              </div>
              <div>
                <Link color={"gray.400"} p="2">
                  プロバイダダッシュボード
                </Link>
              </div>
            </VStack>
          </HStack>
        </Flex>
        <hr className="bg-secondary" />
        <HStack justifyContent="space-between">
          <Link color={"gray.400"} fontSize="small">
            © 2020 R Software, Inc.,Rakuten, Inc. All rights reserved.
          </Link>
          <HStack justifyContent="space-between">
            <Link color={"gray.400"} p="2" fontSize="small">
              利用規約
            </Link>
            <Link color={"gray.400"} p="2" fontSize="small">
              プライバシーポリシー
            </Link>
          </HStack>
          <HStack>
            <Link color={"gray.400"} p="2" fontSize="small">
              English
            </Link>
            <Link color={"gray.400"} p="2" fontSize="small">
              日本語
            </Link>
          </HStack>
          <Spacer />
          <HStack>
            <Spacer />
            <img src="https://api.rakuten.net/static-assets/rakuten/facebook.svg" />
            <img src="https://api.rakuten.net/static-assets/rakuten/twitter.svg" />
            <img src="https://api.rakuten.net/static-assets/rakuten/linked-in.svg" />
          </HStack>
        </HStack>
      </Container>
    </footer>
  );
};
export default Footer;
