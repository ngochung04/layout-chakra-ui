import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react";
const Table = () => {
  const settingBox = {
    border: "1px",
    borderColor: "gray.200",
    w: "13.75rem",
  };
  const settingButton = {
    bg: "blue.500",
    color: "white",
    _hover: { bg: "blue.300" },
  };
  return (
    <Flex justifyContent="center">
      <Box>
        <Box {...settingBox} h="15rem">
          <Text fontSize="sm" fontWeight="bold" pt="95%" px="2rem">
            課金対象
          </Text>
        </Box>
        <Box {...settingBox} py="1.45rem" px="2rem">
          <Text fontSize="sm">Characters</Text>
        </Box>
        <Box {...settingBox} py="1.15rem" px="2rem">
          <Text fontWeight="bold" fontSize="sm">
            割当量
          </Text>
        </Box>
      </Box>
      <Box>
        <Box {...settingBox} h="15rem">
          <VStack>
            <Text fontSize="2xl" color="gray.600" mt="1rem">
              Basic
            </Text>
            <Text fontSize="2xl" fontWeight="medium" color="gray.600" pb="2rem">
              0円
            </Text>
            <Button {...settingButton}>プランを選択</Button>
            <Text fontSize="xs" px="0.5rem" align="center">
              必要最小限で、 すぐに使い始めたい方向け
            </Text>
          </VStack>
        </Box>
        <Box {...settingBox} pt="0.25rem" pb="1.175rem">
          <Text align="center" color="#1d4371" fontWeight="medium">
            500 / 月割当制限
          </Text>
          <Text
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="#1d4371"
          >
            ハードリミット
          </Text>
        </Box>
        <Box {...settingBox} py="1.25rem">
          <Text align="center" fontSize="xs" fontWeight="medium">
            分毎の5
          </Text>
        </Box>
      </Box>
      <Box>
        <Box {...settingBox} h="15rem">
          <VStack>
            <Text fontSize="2xl" color="gray.600" mt="1rem">
              Pro
            </Text>
            <Text fontSize="2xl" fontWeight="medium" color="gray.600">
              2178円* / 月{" "}
            </Text>
            <Text>($20 USD)</Text>
            <Button {...settingButton}>プランを選択</Button>
            <Text fontSize="xs" px="0.5rem" align="center">
              アプリケーションに、より多くのボリュームが
              必要なプロフェッショナル向け
            </Text>
          </VStack>
        </Box>
        <Box {...settingBox} pt="0.25rem" pb="1.175rem">
          <Text align="center" color="#1d4371" fontWeight="medium">
            1000000 / 月割当制限
          </Text>
          <Text
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="#1d4371"
          >
            ハードリミット
          </Text>
        </Box>
        <Box {...settingBox} py="1.25rem">
          <Text align="center" fontSize="xs" fontWeight="medium">
            -
          </Text>
        </Box>
      </Box>
      <Box>
        <Box {...settingBox} h="15rem">
          <VStack>
            <Text fontSize="2xl" color="gray.600" mt="1rem">
              Ultra
            </Text>
            <Text fontSize="2xl" fontWeight="medium" color="gray.600">
              4357円* / 月
            </Text>
            <Text>($40 USD)</Text>
            <Button {...settingButton}>プランを選択</Button>
            <Text fontSize="xs" px="0.5rem" align="center">
              大規模なアプリケーションで 作業するプロフェッショナル向け
            </Text>
          </VStack>
        </Box>
        <Box {...settingBox} pt="0.25rem" pb="1.175rem">
          <Text align="center" color="#1d4371" fontWeight="medium">
            2000000 / 月割当制限
          </Text>
          <Text
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="#1d4371"
          >
            ハードリミット
          </Text>
        </Box>
        <Box {...settingBox} py="1.25rem">
          <Text align="center" fontSize="xs" fontWeight="medium">
            -
          </Text>
        </Box>
      </Box>
      <Box>
        <Box {...settingBox} h="15rem">
          <VStack>
            <Text fontSize="2xl" color="gray.600" mt="1rem">
              Mega
            </Text>
            <Text fontSize="2xl" fontWeight="medium" color="gray.600">
              32677円* / 月
            </Text>
            <Text>($80 USD)</Text>
            <Button {...settingButton}>プランを選択</Button>
            <Text fontSize="xs" px="0.5rem" align="center">
              大規模なアプリケーションで 作業するプロフェッショナル向け
            </Text>
          </VStack>
        </Box>
        <Box {...settingBox} pt="0.25rem" pb="1.175rem">
          <Text align="center" color="#1d4371" fontWeight="medium">
            4000000 / 月割当制限
          </Text>
          <Text
            align="center"
            fontSize="sm"
            fontWeight="medium"
            color="#1d4371"
          >
            ハードリミット
          </Text>
        </Box>
        <Box {...settingBox} py="1.25rem">
          <Text align="center" fontSize="xs" fontWeight="medium">
            -
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Table;
