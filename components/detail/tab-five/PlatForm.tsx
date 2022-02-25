import { Text, Box, Flex, Image } from "@chakra-ui/react";
const PlatForm = () => {
  return (
    <>
      <Box w="70%" mx="auto">
        <Text fontSize="3xl" fontWeight="medium" align="center">
          スケールのある実績のあるプラットフォーム
        </Text>
        <Text
          fontSize="lg"
          fontWeight="medium"
          align="center"
          color="gray.600"
          pt="1rem"
        >
          NAVITIME Route(walk) APIから始めて、開発プロセスを
          加速するための広範なエコシステムにアクセスできます
        </Text>
      </Box>
      <Flex mt="3rem" mx="3rem" justifyContent="space-between">
        <Box>
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/group-blue.png"
            alt="..."
            w="110px"
            mx="auto"
          />
          <Text fontSize="3xl" align="center">
            100万人以上
          </Text>
          <Text align="center" color="gray.600">
            の開発者
          </Text>
        </Box>
        <Box>
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/network-blue.png"
            alt="..."
            w="65px"
            mx="auto"
          />
          <Text fontSize="3xl" align="center">
            10,000以上
          </Text>
          <Text align="center" color="gray.600">
            のAPI
          </Text>
        </Box>
        <Box>
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/phone-info-blue.png"
            alt="..."
            w="65px"
            mx="auto"
          />
          <Text fontSize="3xl" align="center">
            数十億
          </Text>
          <Text align="center" color="gray.600">
            のAPIコール/月
          </Text>
        </Box>
        <Box>
          <Image
            src="https://api.rakuten.net/static-assets/rakuten/earth-blue.png"
            alt="..."
            w="65px"
            mx="auto"
          />
          <Text fontSize="3xl" align="center">
            175
          </Text>
          <Text align="center" color="gray.600">
            コール/月
          </Text>
        </Box>
      </Flex>
      <Image
        src="https://api.rakuten.net/static-assets/rakuten/logos.png"
        alt="logo"
        px="3rem"
        mt="1rem"
        w="100%"
      />
    </>
  );
};
export default PlatForm;
