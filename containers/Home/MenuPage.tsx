import {
  Container,
  Text,
  Box,
  Image,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Row, Col, Stack } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlickSlider from "../../components/home/SlickSlider";

const data1 = [
  {
    id: 1,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 4532,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 324,
    core: 8.9,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten 4",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 12424,
    core: 7.7,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten 5",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 554,
    core: 9.2,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/98384c43-908b-4049-8d44-1b3c4b83e7eb.png",
    name: "Rakuten 6",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 11255,
    core: 8.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
];
const data2 = [
  {
    id: 1,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/da/da41a577d9406fa653e53345fb8617/62fdcd2bdf8cb1ec7cd2ebcbeeb528f4.png",
    name: "Twilio SMS",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/a3/b32870371111e98fa4f768e3b3776c/1017853ad6caff0e4486825248299cad.png",
    name: "Google Translate",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/53aa5f41e4b0596140341a36_medium.png",
    name: "Goofle Play Store",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "PREMIUM",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://s3.amazonaws.com/mashape-production-logos/apis/5b42b71de4b0a5b0626e97ae_medium",
    name: "Nexmo Verify",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/c1/15f1be53744a6d98d77a020d769513/1d4767145139c8d08ce11ba951b9e6d0.png",
    name: "amazon-price",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/63/5abbaa32ca4265a27ee3ba46c2f5c3/cd0bf186d542466b03aee00e539c575a.png",
    name: "YouTbe to MP$",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
];
const data3 = [
  {
    id: 1,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/da/da41a577d9406fa653e53345fb8617/62fdcd2bdf8cb1ec7cd2ebcbeeb528f4.png",
    name: "Twilio SMS",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/a3/b32870371111e98fa4f768e3b3776c/1017853ad6caff0e4486825248299cad.png",
    name: "Google Translate",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/53aa5f41e4b0596140341a36_medium.png",
    name: "Goofle Play Store",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://s3.amazonaws.com/mashape-production-logos/apis/5b42b71de4b0a5b0626e97ae_medium",
    name: "Nexmo Verify",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/c1/15f1be53744a6d98d77a020d769513/1d4767145139c8d08ce11ba951b9e6d0.png",
    name: "amazon-price",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
  {
    id: 6,
    image:
      "https://rapidapi-prod-apis.s3.amazonaws.com/63/5abbaa32ca4265a27ee3ba46c2f5c3/cd0bf186d542466b03aee00e539c575a.png",
    name: "YouTbe to MP$",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    percent: 100,
    time: 1155,
    core: 9.1,
    price: "FREE",
    timeAgo: "6ヶ月前",
    type: "Data",
    data: [
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "GET",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
      {
        method: "POST",
        name: "Fetch an Account Resource",
        description: "上記のプロパティを含むアカウントの表現を返します。",
      },
    ],
  },
];

const MenuPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container maxW="container.xl">
        <Row className="mt-3">
          <Col md={2} className="d-none d-md-block">
            <Stack gap={2}>
              <Text color="gray.700" fontWeight="bold" mt="0.5rem">
                カテゴリー
              </Text>
              <Text color="blue.500">データ</Text>
              <Text color="blue.500">スポーツ</Text>
              <Text color="blue.500">ファイナンス</Text>
              <Text color="blue.500">旅行</Text>
              <Text color="blue.500">エンターテイメント</Text>
              <Text color="blue.500">全てのカテゴリー</Text>
            </Stack>
          </Col>
          <Col md={1}>
            <Image
              alt="icon"
              src="https://api.rakuten.net/static-assets/rakuten/magnifying-glass.svg"
            />
          </Col>
          <Col xs={12} md={9}>
            <Text color={"blue.800"} fontSize={"4xl"} fontWeight="bold">
              最新の API を確認
            </Text>
            <Text
              color={"blue.800"}
              fontSize={"1xl"}
              fontWeight="bold"
              mb="2rem"
            >
              アプリケーション実装にあたり事例集を確認する
            </Text>
            <Carousel responsive={responsive} autoPlay={false}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mx="0.5rem"
                mb="0.5rem"
              >
                <Image
                  src="https://d12sqxodahk3ac.cloudfront.net/collections/29dca674-d783-41a2-9bd7-aa17a2c8eb5c.jpg"
                  alt="preview"
                  objectFit={"cover"}
                  w="100%"
                  h="8rem"
                />

                <Box p="6" fontSize="sm" h="5rem">
                  コロナウィルス COVID-19 API
                </Box>
              </Box>
              <Box
                mx="0.5rem"
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
                  h="8rem"
                />

                <Box p="6" fontSize="sm" h="5rem">
                  企業情報検索API
                </Box>
              </Box>
              <Box
                mx="0.5rem"
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
                  h="8rem"
                />

                <Box p="6" fontSize="sm" h="5rem">
                  画像処理・顔認識APIランキング
                </Box>
              </Box>
              <Box
                mx="0.5rem"
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
                  h="8rem"
                />

                <Box p="6" fontSize="sm" h="5rem">
                  コロナウィルス COVID-19 API
                </Box>
              </Box>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container maxW="container.xl">
        <Row className="mt-3">
          <Text fontSize={"2xl"}>ナビタイムジャパン API コレクション</Text>
          <Text fontSize={"md"}>
            経路探索エンジンの技術で業界をけん引するナビタイムジャパンのAPIを集めたコレクションです。
          </Text>
          <SlickSlider data={data1} showIcon={true} />
          <Link>
            <Text fontSize="sm" align="right" color="blue.500" mb="10px">
              その他 {">"}
            </Text>
          </Link>
        </Row>
      </Container>
      <Container maxW="container.xl">
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
      <Container maxW="container.xl">
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
      <Container maxW="container.xl">
        <Row className="mt-3">
          <Text fontSize={"2xl"}>天気予報​API​ランキング</Text>
          <Text fontSize={"md"}>
            過去の天気から最新の予報まで、200b気象情報を教えてくれるAPIをご紹介します。
          </Text>
          <SlickSlider data={data3} />
        </Row>
        <Link>
          <Text fontSize="sm" align="right" color="blue.500" mb="10px">
            その他 {">"}
          </Text>
        </Link>
      </Container>
      <Flex justifyContent="center" mb="3rem">
        <Button
          px="9rem"
          fontSize="sm"
          size="sm"
          borderRadius="xs"
          border="1px"
          borderColor="gray.200"
          fontWeight="medium"
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
