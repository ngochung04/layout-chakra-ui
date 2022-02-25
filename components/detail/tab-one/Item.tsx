import { Box, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
interface Props {
  item: {
    name: string;
    method: string;
    description: string;
    params: {
      name: string;
      type: string;
      description: string;
      require: boolean;
    }[];
  };
  selectItem: Number;
  index: Number;
}
const Item: FC<Props> = ({ item, index, selectItem }) => {
  return (
    <Box
      px="1rem"
      py="0.5rem"
      _hover={{ bg: "#efefef" }}
      bg={selectItem === index ? "#dfdfdf" : ""}
    >
      <Text
        fontSize="xs"
        fontWeight="bold"
        display="inline"
        color={item.method == "POST" ? "blue.500" : "green.500"}
      >
        {item.method}
      </Text>
      <Text mx="0.5rem" fontSize="sm" fontWeight="medium" display="inline">
        {item.name}
      </Text>
    </Box>
  );
};
export default Item;
