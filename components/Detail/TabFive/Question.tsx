import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

interface Item {
  question: string;
  answer: string;
}
interface Props {
  item: Item;
}

const Question: FC<Props> = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box onClick={onToggle} border="1px" borderColor="gray.200" mx="3rem">
      <Flex justifyContent="space-between">
        <Text p="2rem" fontSize="lg" fontWeight="medium" color="gray.600">
          {item.question}
        </Text>
        {isOpen ? (
          <MinusIcon m="2rem" color="gray.300" />
        ) : (
          <AddIcon m="2rem" color="gray.300" />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box px="2rem" pb="2rem">
          <Text fontSize="md" fontWeight="medium" color="gray.600">
            {item.answer}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Question;
