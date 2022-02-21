import { Text, Box, Image, Button, Flex, Link } from "@chakra-ui/react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlickSlider from "./ListPage/SlickSlider";
import { data1, data2, data3 } from "./data";

const MenuPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col xs={6} md={3} className="d-none d-md-block">
            <Stack>
              <Text color="blue.500">カテゴリー</Text>
              <Text color="blue.500">データ</Text>
              <Text color="blue.500">スポーツ</Text>
              <Text color="blue.500">ファイナンス</Text>
              <Text color="blue.500">旅行</Text>
              <Text color="blue.500">エンターテイメント</Text>
              <Text color="blue.500">全てのカテゴリー</Text>
            </Stack>
          </Col>
          <Col xs={12} md={1} className="d-none d-md-block">
            <img src="https://api.rakuten.net/static-assets/rakuten/magnifying-glass.svg" />
          </Col>
          <Col xs={12} md={8}>
            <Text color={"blue.800"} fontSize={"4xl"} fontWeight="bold">
              最新の API を確認
            </Text>
            <Text color={"blue.800"} fontSize={"1xl"} fontWeight="bold">
              アプリケーション実装にあたり事例集を確認する
            </Text>
            <Carousel responsive={responsive} autoPlay={false}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://d12sqxodahk3ac.cloudfront.net/collections/29dca674-d783-41a2-9bd7-aa17a2c8eb5c.jpg"
                  alt="preview"
                  objectFit={"cover"}
                  w="100%"
                  h="150px"
                />

                <Box p="6">コロナウィルス COVID-19 API</Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://d12sqxodahk3ac.cloudfront.net/collections/c27760fe-6a20-4b3c-b1d2-e9975068dfe4.jpg"
                  alt="preview"
                  objectFit={"cover"}
                  w="100%"
                  h="150px"
                />

                <Box p="6">企業情報検索API</Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://d12sqxodahk3ac.cloudfront.net/collections/58742d8d-1415-4f2f-ab90-fe14115b2788.jpg"
                  alt="preview"
                  objectFit={"cover"}
                  w="100%"
                  h="150px"
                />

                <Box p="6">画像処理・顔認識APIランキング</Box>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://d12sqxodahk3ac.cloudfront.net/collections/29dca674-d783-41a2-9bd7-aa17a2c8eb5c.jpg"
                  alt="preview"
                  objectFit={"cover"}
                  w="100%"
                  h="150px"
                />

                <Box p="6">コロナウィルス COVID-19 API</Box>
              </Box>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Text fontSize={"2xl"}>ナビタイムジャパン API コレクション</Text>
          <Text fontSize={"md"}>
            経路探索エンジンの技術で業界をけん引するナビタイムジャパンのAPIを集めたコレクションです。
          </Text>
          <SlickSlider data={data1} />
          <Link>
            <Text fontSize="sm" align="right" color="blue.500" mb="10px">
              その他 {">"}
            </Text>
          </Link>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Text fontSize={"2xl"}>人気のAPI</Text>
          <Text fontSize={"md"}>
            Rakuten RapidAPIで利用者数の多い人気のAPIをご紹介します。
          </Text>
          <SlickSlider data={data2} />
          <Link>
            <Text fontSize="sm" align="right" color="blue.500" mb="10px">
              その他 {">"}
            </Text>
          </Link>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Text fontSize={"2xl"}>無料で利用可能なAPI</Text>
          <Text fontSize={"md"}>
            Rakuten RapidAPIで​無料で​利用可能な​APIを​チェックして​みましょう。
          </Text>
          <SlickSlider data={data3} />
          <Link>
            <Text fontSize="sm" align="right" color="blue.500" mb="10px">
              その他 {">"}
            </Text>
          </Link>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Text fontSize={"2xl"}>天気予報​API​ランキング</Text>
          <Text fontSize={"md"}>
            過去の天気から最新の予報まで、200b気象情報を教えてくれるAPIをご紹介します。
          </Text>
          <SlickSlider data={data3} />
          <Link>
            <Text fontSize="sm" align="right" color="blue.500" mb="10px">
              その他 {">"}
            </Text>
          </Link>
        </Row>
      </Container>
      <Flex justifyContent="center">
        <Button
          px="100px"
          fontSize="xs"
          size="sm"
          borderRadius="xs"
          border="1px"
          borderColor="gray.500"
          fontWeight="light"
          bgColor="white"
          _hover={{ color: "blue.500", borderColor: "blue.500" }}
        >
          その他のコレクション
        </Button>
      </Flex>
    </>
  );
};
export default MenuPage;
