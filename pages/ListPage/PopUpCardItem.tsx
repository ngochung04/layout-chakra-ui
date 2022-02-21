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
import { Item } from "../models/CardItem";

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
          {item.data.map((data) => (
            <>
              <Text
                fontSize="xs"
                fontWeight="bold"
                key={item.data.indexOf(data)}
                color={data.method === "POST" ? "blue.500" : "green.500"}
              >
                {data.method}
                <Text color="gray.500" fontWeight="normal" display="inline">
                  {" " + data.name}
                </Text>
              </Text>
              <Text fontSize="xs" m="5px" isTruncated>
                {data.description}
              </Text>
              <hr />
            </>
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
