import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Provider = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex my="0.5rem">
      <Box w="70%" position="relative">
        <Text fontSize="2xl" pb="2rem">
          Google Translate概要
        </Text>
        <Collapse startingHeight="3rem" in={isOpen}>
          <Text fontSize="md">
            The Translation API provides a simple programmatic interface for
            translating an arbitrary string into any supported language using
            state-of-the-art Neural Machine Translation. It is highly
            responsive, so websites and applications can integrate with
            Translation API for fast, dynamic translation of source text from
            the source language to a target language (such as French to
            English). Language detection is also available in cases where the
            source language is unknown. The underlying technology is updated
            constantly to include improvements from Google research teams, which
            results in better translations and new languages and language pairs.
          </Text>
        </Collapse>
        <Box
          display={isOpen ? "none" : "block"}
          position="absolute"
          w="100%"
          bg="blackAlpha.100"
          h="2rem"
          mt={-6}
          bgClip="content-box"
          bgGradient="linear-gradient(to-b ,#fdfdfd 0%, #ffffff55 80%,  #fff 100%)"
        />
        <Link onClick={onToggle} color="blue.500">
          {isOpen ? (
            <Text pt="1.5rem">表示を戻す...</Text>
          ) : (
            <Text pt="2rem">もっと見る...</Text>
          )}
        </Link>
        <Box my="auto" display="flex" alignItems="center" mt="1rem">
          <Box alignItems="center" display="flex">
            <Image
              alt="..."
              src="https://s3.amazonaws.com/rapidapi-prod-user/9071a569-9898-4379-a413-4a9f652cc407"
              w="50px"
            />
            <Text fontWeight="md" mx="1rem">
              Google Cloud
            </Text>
          </Box>
          <Spacer />
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/envelope.svg"
            alt="mail"
          />
        </Box>
      </Box>
      <Box>
        <Text>APIフォロワー</Text>
        <AvatarGroup size="md" alignItems="flex-start" mb="1rem">
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Box zIndex="10">
            <Badge
              pt="0"
              borderRadius="1rem"
              px="0.5rem"
              bgColor="blue.500"
              color="white"
            >
              +77
            </Badge>
          </Box>
        </AvatarGroup>
        <Text>情報</Text>
        <Link color="blue.500">利用規約</Link>
      </Box>
    </Flex>
  );
};
export default Provider;
