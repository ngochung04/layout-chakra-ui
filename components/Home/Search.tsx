import {
  InputGroup,
  Button,
  Box,
  Text,
  Input,
  InputRightElement,
  InputLeftElement,
  Grid,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
  OrderedList,
  UnorderedList,
  HStack,
  Spacer,
  Container,
} from "@chakra-ui/react";
import {
  SearchIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import Slider from "react-slick";

const Search = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box
        bg={
          "url(https://api.rakuten.net/static-assets/rakuten/homepage-hero-v3.svg) center top / 1920px no-repeat;"
        }
        // position="absolute"
        height="400px"
        maxHeight="400px"
        width="100%"
        marginTop="-100px"
      >
        <Grid column={1} mx="100px" display="inline">
          <Text
            fontSize={{ base: "30px", md: "45px" }}
            color="rgb(29, 67, 113)"
            align="center"
            wordBreak="break-word"
            mt="10rem"
          >
            数千に及ぶ豊富なラインナップからAPIを検索、
            <br />
            簡単に接続しましょう
          </Text>

          <Text
            fontSize={{ base: "18px" }}
            mt="2rem"
            color="gray.700"
            align="center"
          >
            1つのSDK、 1つのAPIキー、統合された1つのダッシュボード
          </Text>
        </Grid>
      </Box>
      <Box>
        <Flex display="flex" justifyContent="center">
          <InputGroup w="3xl" bg="whitesmoke" borderRadius="xl">
            <InputLeftElement mt="0.5rem">
              <SearchIcon color="blue.500" />
            </InputLeftElement>
            <Input
              _placeholder={{ color: "gray.500" }}
              h="3.5rem"
              pr="4.5rem"
              placeholder="APIを検索"
              _focus={{ bg: "white" }}
            />
            <InputRightElement width="6rem">
              <Button
                mt="1rem"
                h="3rem"
                w="5rem"
                size="sm"
                px="3.5rem"
                mr="2rem"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
              >
                検索
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          w="3xl"
          mt="1rem"
          mb="3rem"
          color={"rgb(74, 144, 226)"}
          justifyContent={"space-between"}
          mx="auto"
        >
          <UnorderedList display={"flex"} gap={"1rem"}>
            <ListItem>データ</ListItem>
            <ListItem>スポーツ</ListItem>
            <ListItem>ファイナンス </ListItem>
            <ListItem>旅行</ListItem>
          </UnorderedList>

          <UnorderedList display={{ base: "none", md: "block" }}>
            <ListItem>すべての カテゴリー</ListItem>
          </UnorderedList>
        </Flex>
        <Container maxW="container.xl">
          <HStack
            w="100%"
            spacing="24px"
            mt={{ base: "30px" }}
            // mx={{ base: "50px", md: "110px" }}
          >
            <Box pb="5px" borderBottom="2px" borderColor="blue.500">
              <Text color={"blue.500"}>開発者の 皆様</Text>
            </Box>
            <Link>
              <Text color={"blue.500"}>APIプロバイダの 皆様</Text>
            </Link>
            <Link>
              <Text color={"blue.500"}>チーム管理</Text>
            </Link>
          </HStack>
        </Container>
        <Flex
          px={{ base: "50px", md: "110px" }}
          bg={"gray.100"}
          h="80px"
          direction="column"
          justifyContent="center"
        >
          <Container maxW="container.xl">
            <Slider {...settings}>
              <Text color={"gray.900"} mr="1rem">
                <SearchIcon color={"blue.500"} />
                APIを検索
              </Text>
              <Text color={"gray.900"} mr="1rem">
                <CheckIcon color={"blue.500"} />
                ブラウザ上で 即座にテスト
              </Text>
              <Text color={"gray.900"} mr="1rem">
                <ChevronLeftIcon color={"blue.500"} />
                <ChevronRightIcon color={"blue.500"} />
                接続用スニペットの自動生成
              </Text>
              <Text color={"gray.900"} mr="1rem">
                <CheckIcon color={"blue.500"} />
                ダッシュボードで 一括管理
              </Text>
              <Button
                color={"blue.500"}
                ml="-1"
                border="1px"
                borderColor="gray.300"
                size="sm"
              >
                詳しくは こちら
              </Button>
            </Slider>
          </Container>
        </Flex>
      </Box>
    </div>
  );
};

export default Search;
