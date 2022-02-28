import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  LinkOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { Resizeable } from "../../../components/Resize";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Item from "../../../components/detail/tab-one/Item";
import Form from "../../../components/detail/tab-one/Form";
const data = [
  {
    name: "detect",
    method: "POST",
    description: "リクエスト内のテキストの言語を検出します。",
    params: [
      {
        name: "q",
        type: "string",
        description:
          "The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs.",
        require: true,
      },
    ],
  },
  {
    name: "languages",
    description: "Returns a list of supported languages for translation.",
    method: "GET",
    params: [
      {
        name: "q",
        type: "string",
        description:
          "The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.",
        require: false,
      },

      {
        name: "model",
        type: "string",
        description:
          "The language to translate the source text into. If omitted, the response will include all supported languages.",
        require: false,
      },
    ],
  },
  {
    name: "translate",
    method: "POST",
    description: "入力テキストを翻訳し、翻訳されたテキストを返します",

    params: [
      {
        name: "q",
        type: "string",
        description:
          "The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.",
        require: false,
      },
      {
        name: "format",
        type: "string",
        description:
          "The format of the source text, in either HTML (default) or plain-text. A value of html indicates HTML and a value of text indicates plain-text.",
        require: false,
      },
      {
        name: "source",
        type: "string",
        description:
          "The language to use for translation of the input text, set to one of the language codes listed in the overview tab.",
        require: false,
      },
      {
        name: "target",
        type: "string",
        description:
          "The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to detect the source language automatically and return it within the response.",
        require: false,
      },
      {
        name: "model",
        type: "string",
        description:
          "The translation model. Can be either base to use the Phrase-Based Machine Translation (PBMT) model, or nmt to use the Neural Machine Translation (NMT) model. If omitted, then nmt is used. If the model is nmt, and the requested language translation pair is not supported for the NMT model, then the request is translated using the base model.",
        require: false,
      },
    ],
  },
];
const TabOne = () => {
  const [selectItem, setSelectItem] = useState<number>(0);

  const handleSetSelectItem = (index: number) => () => {
    return setSelectItem(index);
  };
  return (
    <Box>
      <Container maxW="container.xl">
        <Text fontSize="2xl" my="1rem">
          「Google Translate 」のドキュメント
        </Text>
        <Text fontSize="md" my="1rem">
          Dynamically translate between languages.
        </Text>
        <Link color="blue.500" _hover={{ textDecoration: "none" }}>
          <Text my="2rem">このAPIについて詳しく見る</Text>
        </Link>
      </Container>

      {/* Resizable Component */}
      <Box mx="-1rem">
        <Resizeable
          sizes={[300, 620, 620]}
          bgs={["whitesmoke"]}
          h="50rem"
          mb="-1.5rem"
        >
          {/* First Column */}
          <Box bg="whitesmoke">
            <Box bg="whitesmoke" border="1px" borderColor="gray.300" h="4rem">
              <InputGroup p="0.5rem">
                <InputLeftElement pt="1rem" pl="1rem">
                  <SearchIcon />
                </InputLeftElement>
                <Input bg="white" placeholder="エンドポイントの検索" />
              </InputGroup>
            </Box>
            <Box bg="whitesmoke">
              {data.map((item, index) => (
                <Link
                  key={index}
                  onClick={handleSetSelectItem(index)}
                  _hover={{ textDecoration: "none" }}
                >
                  <Item item={item} index={index} selectItem={selectItem} />
                </Link>
              ))}
            </Box>
          </Box>

          {/* Second Column */}

          <Box overflowY="scroll" h="100vh" position="relative">
            <Flex
              w="100%"
              bg="whitesmoke"
              border="1px"
              borderColor="gray.300"
              h="4rem"
              alignItems="center"
              position="absolute"
              zIndex="10"
            >
              <Box p="0.5rem">
                <Text
                  display="inline"
                  ml="1rem"
                  mr="0.25rem"
                  fontWeight="bold"
                  color={
                    data[selectItem].method == "POST" ? "blue.500" : "green.500"
                  }
                >
                  {data[selectItem].method.toUpperCase()}
                </Text>
                <Text display="inline">{data[selectItem].name}</Text>
              </Box>
              <Spacer />
              <Button
                mx="1rem"
                bg="blue.500"
                color="white"
                borderRadius="sm"
                leftIcon={
                  <Image
                    src="https://api.rakuten.net/static-assets/rakuten/test.svg"
                    alt="icon"
                    mt="0.25rem"
                  />
                }
                _hover={{ bg: "blue.400" }}
              >
                登録してテスト
              </Button>
            </Flex>
            <Form item={data[selectItem]} />
          </Box>

          {/* Third Column */}

          <Box bg="whitesmoke">
            <Flex bg="whitesmoke" border="1px" borderColor="gray.300" h="4rem">
              <Text my="auto">コードスニペット</Text>
            </Flex>
          </Box>
        </Resizeable>
      </Box>
    </Box>
  );
};
export default TabOne;
