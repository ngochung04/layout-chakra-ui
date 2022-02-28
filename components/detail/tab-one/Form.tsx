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
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
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
  const { isOpen: isOpenForm1, onToggle: onToggleForm1 } = useDisclosure();
  const { isOpen: isOpenForm2, onToggle: onToggleForm2 } = useDisclosure();
  return (
    <Box mt="5rem">
      <Text my="1rem" mx="1rem">
        {item.description}
      </Text>
      <Divider mt="1rem" borderColor="gray.300" />
      <Box
        px="1rem"
        w="100%"
        h="3rem"
        bg="#fafafa"
        border="1px"
        borderColor="gray.300"
        onClick={onToggleForm1}
        display="flex"
        alignItems="center"
      >
        {isOpenForm1 ? <AiOutlineDown /> : <AiOutlineRight />}
        <Text mx="1rem" my="auto" display="inline">
          ヘッダのパラメータ
        </Text>
      </Box>
      <Collapse in={isOpenForm1}>
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

      {/* Form 2 */}
      <Box
        px="1rem"
        w="100%"
        h="3rem"
        bg="#fafafa"
        border="1px"
        borderColor="gray.300"
        onClick={onToggleForm2}
        display="flex"
        alignItems="center"
      >
        {isOpenForm2 ? <AiOutlineDown /> : <AiOutlineRight />}
        <Text mx="1rem" my="auto">
          ボディのリクエスト
        </Text>
      </Box>
      <Collapse in={isOpenForm2}>
        <Box mx="1rem">
          {item.params.map((param, index) => (
            <Flex
              key={index}
              direction="row"
              justifyContent="space-between"
              my="1.5rem"
            >
              <Flex direction="column" m="0.25rem">
                <Text>{param.name}</Text>
                <Text mt="0.25rem" color="#000000a6">
                  {param.type.toUpperCase()}
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
                <Flex>
                  <Text fontSize="sm" fontWeight="medium" color="#4e4e4e">
                    {param.require ? "REQUIRED" : "OPTIONAL"}
                  </Text>
                  <Text mx="0.5rem" fontSize="sm">
                    {param.description}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
export default Form;
