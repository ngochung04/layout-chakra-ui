import {
  Box,
  Collapse,
  Divider,
  Flex,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
interface Params {
  name: string;
  type: string;
  description: string;
  require: boolean;
}
interface Props {
  item: {
    name: string;
    method: string;
    description: string;
    params: Params[];
  };
}
const Form: FC<Props> = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Text my="1rem" mx="1rem">
        {item.description}
      </Text>
      <Divider mt="1rem" borderColor="gray.300" />
      <Box
        w="100%"
        h="3rem"
        bg="#fafafa"
        border="1px"
        borderColor="gray.300"
        onClick={onToggle}
        display="flex"
      >
        <Text my="auto">ヘッダのパラメータ</Text>
      </Box>
      <Collapse in={isOpen}>
        <Box mx="1rem">
          <Flex direction="row" justifyContent="space-between" my="1.5rem">
            <Flex direction="column" m="0.25rem">
              <Text>Accept-Encoding</Text>
              <Text mt="0.25rem" color="#000000a6">
                STRING
              </Text>
            </Flex>
            <Flex direction="column" w="70%">
              <Input
                rounded="xs"
                w="100%"
                borderColor="gray.300"
                placeholder="application/gzip"
                _placeholder={{ color: "gray.600", fontSize: "lg" }}
              />
              <Text fontSize="sm" fontWeight="medium" color="#4e4e4e">
                OPTIONAL
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" justifyContent="space-between" pb="1rem">
            <Flex direction="column" m="0.25rem">
              <Text>X-RapidAPI-Key</Text>
              <Text mt="0.25rem" color="#000000a6">
                ENUM
              </Text>
            </Flex>
            <Flex direction="column" w="70%">
              <Select
                rounded="xs"
                w="100%"
                borderColor="gray.300"
                // placeholder="application/gzip"
                _placeholder={{ color: "gray.600", fontSize: "lg" }}
              >
                <option value="option">SIGN-UP-FOR-KEY</option>
              </Select>
              <Text fontSize="sm" fontWeight="medium" color="#4e4e4e">
                ENUM
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" justifyContent="space-between" pb="1rem">
            <Flex direction="column" m="0.25rem">
              <Text>X-RapidAPI-Host</Text>
              <Text mt="0.25rem" color="#000000a6">
                ENUM
              </Text>
            </Flex>
            <Flex direction="column" w="70%">
              <Select
                rounded="xs"
                w="100%"
                borderColor="gray.300"
                placeholder="google-translate1.p.rapidapi.com"
                _placeholder={{ color: "gray.600", fontSize: "lg" }}
                disabled
                bg="#d9d9d9"
              />
              <Text fontSize="sm" fontWeight="medium" color="#4e4e4e">
                ENUM
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};
export default Form;
