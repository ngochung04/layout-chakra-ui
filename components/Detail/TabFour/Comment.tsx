import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Avatar,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  item: {
    name: string;
    comment: string;
    time: number;
    reply: number;
    avatar: string;
  };
}

const Comment: FC<Props> = ({ item }) => {
  return (
    <>
      <Flex>
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(22, 1fr)">
          <GridItem rowSpan={3} colSpan={1} p="0.25rem" px="0.5rem">
            <Avatar
              size="sm"
              src={item.avatar}
              border="1px"
              borderColor="gray.300"
            />
          </GridItem>
          <GridItem colSpan={21} color="#5a90e2" fontWeight="medium">
            {item.name}
          </GridItem>
          <GridItem colSpan={21} fontWeight="medium">
            {item.comment}
          </GridItem>
          <GridItem
            colSpan={21}
            color="gray.500"
            fontWeight="medium"
            fontSize="sm"
          >
            {item.time + "ヶ月前"}
          </GridItem>
        </Grid>
        <Box my="auto">
          <Text display="inline" mr="0.5rem" color="gray.500">
            コメント
          </Text>
          <Button bg="blue.500" color="white" display="inline" size="sm">
            {item.reply}
          </Button>
        </Box>
      </Flex>
      <Divider borderColor="gray.900" />
    </>
  );
};
export default Comment;
