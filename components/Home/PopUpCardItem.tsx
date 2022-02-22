import {
  Text,
  Box,
  Image,
  HStack,
  Tooltip,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
interface Data {
  name: string;
  description: string;
  method: string;
}

interface Item {
  id: number;
  name: string;
  content: string;
  image: string;
  percent: number;
  time: number;
  timeAgo: string;
  core: number;
  price: string;
  type: string;
  data: Data[];
}
interface Props {
  item: Item;
  ml: number;
  trigger: any;
}

import { FC } from "react";
const PopUpCardItem: FC<Props> = ({ item, ml, trigger }) => {
  return (
    <Popover trigger="hover" placement="right">
      <PopoverTrigger>{trigger}</PopoverTrigger>

      <PopoverContent border="0" width="320px" bgColor="white" ml={ml}>
        <PopoverArrow />
        <Box p={5} zIndex="10" borderWidth="2px" borderRadius="md">
          {item.data.map((data, index) => (
            <div key={index}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                color={data.method === "POST" ? "blue.500" : "green.500"}
                display="inline"
              >
                {data.method}
              </Text>
              <Text color="gray.500" fontSize="xs" display="inline">
                {" " + data.name}
              </Text>
              <Text fontSize="xs" m="5px" isTruncated>
                {data.description}
              </Text>
              <hr />
            </div>
          ))}
          <Button bgColor="blue.50" color="blue.500" my="5px" size="xs">
            {item.type}
          </Button>
          <Flex mt="10px" justifyContent="space-between">
            <Text fontSize="xs" color="gray.500">
              {item.timeAgo}
            </Text>
            <Button
              size="xs"
              bgColor="gray.600"
              color="white"
              fontWeight="bold"
            >
              {item.price}
            </Button>
          </Flex>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default PopUpCardItem;
