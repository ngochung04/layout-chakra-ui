import {
  Text,
  Box,
  Image,
  HStack,
  Tooltip,
  Flex,
  LinkOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import PopUpCardItem from "./PopUpCardItem";
import Link from "next/link";
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
  width?: string;
  showIcon?: boolean;
  display?: boolean;
}

const CardItem: FC<Props> = ({
  item,
  showIcon = false,
  display = true,
  width,
}) => {
  return (
    <Box
      w={width}
      h={200}
      mr={5}
      my={10}
      key={item.id}
      borderWidth="1px"
      borderRadius="lg"
      position="relative"
      // bgColor="blackAlpha.50"
      boxShadow="md"
      display={display ? "block" : "none"}
    >
      <Link href="/api-detail" passHref>
        <Box>
          {/* HEARDER CARD */}
          <PopUpCardItem
            ml={-100}
            item={item}
            trigger={
              <Box>
                <HStack m={2}>
                  <Box w="3rem" h="10">
                    <Image src={item.image} alt="..." />
                  </Box>
                  <Box w="80%" h="10">
                    <Text fontSize="md" fontWeight="bold">
                      {item.name}
                    </Text>
                  </Box>
                  {showIcon ? (
                    <Box w="50px" right="-50">
                      <Image
                        src="https://api.rakuten.net/static-assets/rakuten/teams-icon.svg"
                        alt="..."
                        maxW="2rem"
                      />
                    </Box>
                  ) : null}
                </HStack>
              </Box>
            }
          />

          <PopUpCardItem
            ml={-1}
            item={item}
            trigger={
              <Text px="2" h="7rem" wordBreak={"revert"} fontSize="sm">
                {item.content}
              </Text>
            }
          />

          <Flex
            p={2}
            w="100%"
            justify="space-between"
            position="absolute"
            bottom="0px"
          >
            <Tooltip label={`人気度：${item.core}/10`} bgColor="gray.800">
              <Flex>
                <Image
                  src="https://api.rakuten.net/static-assets/rakuten/popularity.svg"
                  display="inline"
                  m="1"
                  alt="..."
                  htmlWidth="15px"
                />
                <Text fontSize="small">{item.core ? item.core : "-"}</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="過去30日間の平均レイテンシ" bgColor="gray.800">
              <Flex alignContent="center">
                <Image
                  src="https://api.rakuten.net/static-assets/rakuten/latency.svg"
                  display="inline"
                  m="1"
                  alt="..."
                  htmlWidth="15px"
                />
                <Text fontSize="small">
                  {item.time ? item.time + "ms" : "- "}
                </Text>
              </Flex>
            </Tooltip>
            <Tooltip label="過去30日間の平均正常稼働率" bgColor="gray.800">
              <Flex alignContent="center">
                <Image
                  src="https://api.rakuten.net/static-assets/rakuten/success-new.svg"
                  display="inline"
                  m="1"
                  alt="..."
                  htmlWidth="15px"
                />
                <Text fontSize="small" mr="1rem">
                  {item.percent ? item.percent + "%" : "-"}
                </Text>
              </Flex>
            </Tooltip>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default CardItem;
