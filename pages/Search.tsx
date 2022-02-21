import {
  InputGroup,
  Button,
  Box,
  Text,
  Input,
  InputRightElement,
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
} from "@chakra-ui/react";
import {
  SearchIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Search = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div>
      <Box
        bg={
          "url(https://api.rakuten.net/static-assets/rakuten/homepage-hero-v3.svg) center top / 1920px no-repeat;"
        }
        // position="absolute"
        height="400px"
        maxHeight="400px"
        width="100%"
        marginTop="-100x"
        marginBottom="100px"
      >
        <Grid column={1} mx="100px" display="inline">
          <Text
            fontSize={{ base: "30px", md: "45px" }}
            color="rgb(29, 67, 113)"
            align="center"
            wordBreak="break-word"
            mt="200px"
          >
            数千に及ぶ豊富なラインナップからAPIを検索、
            <br />
            簡単に接続しましょう
          </Text>

          <Text
            fontSize={{ base: "18px" }}
            mt="12px"
            mb="25px"
            color="gray.700"
            align="center"
          >
            1つのSDK、 1つのAPIキー、統合された1つのダッシュボード
          </Text>
        </Grid>
      </Box>
      <Box>
        <InputGroup size="md" mx="auto" mt="-100px" mb="25px" px="400px">
          <Input pr="4.5rem" placeholder="APIを検索" />
          <InputRightElement width="100px">
            <Button colorScheme="blue" mr="850px" px="50px">
              検索
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex
          color={"rgb(74, 144, 226)"}
          justifyContent={"space-between"}
          mx="auto"
          px="100px"
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

        <HStack
          spacing="24px"
          mt={{ base: "30px" }}
          mx={{ base: "110px", md: "50px" }}
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

        <Box bg={"gray.100"} h="50px">
          <Carousel responsive={responsive} autoPlay={false}>
            <Box mx={{ base: "110px", md: "50px" }}>
              <Text color={"gray.900"}>
                <SearchIcon color={"blue.500"} />
                APIを検索
              </Text>
            </Box>

            <Box mx={{ base: "110px", md: "50px" }}>
              <Text color={"gray.900"}>
                <CheckIcon color={"blue.500"} />
                ブラウザ上で 即座にテスト{" "}
              </Text>
            </Box>
            <Box mx={{ base: "110px", md: "50px" }}>
              <Text color={"gray.900"}>
                <ChevronLeftIcon color={"blue.500"} />
                <ChevronRightIcon color={"blue.500"} />
                接続用スニペットの自動生成{" "}
              </Text>
            </Box>
            <Box mx={{ base: "110px", md: "50px" }}>
              <Text color={"gray.900"}>
                <CheckIcon color={"blue.500"} />
                ダッシュボードで 一括管理{" "}
              </Text>
            </Box>
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default Search;
