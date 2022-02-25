import {
  Box,
  Container,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const TabThree = () => {
  return (
    <Container maxW="container.xl" px="2rem">
      <Box>
        <Text fontSize="2xl" mt="1rem">
          チュートリアル
        </Text>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftElement mt="1rem">
            <FiSearch />
          </InputLeftElement>

          <Input
            mt="1rem"
            borderRadius="md"
            maxW="30rem"
            placeholder="チュートリアルを検索"
            _placeholder={{ color: "gray.500", fontWeight: "medium" }}
          />
        </InputGroup>
      </Box>
      <Box mt="3rem" border="1px" borderColor="gray.300">
        <Image
          alt="..."
          src="https://rapidapi.com/blog/wp-content/uploads/2020/01/google-translate-form-app.gif"
          w="100%"
          h="115px"
          objectFit="cover"
        />
        <Box mx="2rem">
          <Text fontWeight="md" fontSize="2xl" color="#1d4371" mt="1rem">
            How to use the Google Translate API with JavaScript
          </Text>
          <Box my="auto" display="flex">
            <Image
              alt="..."
              src="https://s3.amazonaws.com/rapidapi-prod-user/9071a569-9898-4379-a413-4a9f652cc407"
              w="35px"
            />
            <Text fontWeight="md" mx="1rem">
              Google Cloud
            </Text>
          </Box>
        </Box>
        <Text mx="2rem" fontSize="xs" my="1rem">
          公開済み 2022/02/23 - 12 min read
        </Text>
      </Box>
    </Container>
  );
};
export default TabThree;
