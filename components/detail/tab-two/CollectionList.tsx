import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import CardItem from "../../home/CardItem";
const CollectionList = () => {
  const data = [
    {
      id: 1,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/2c/b45d00330d11e992f97d269135b3f5/9fa0d9bcaa68996ccc71d5e3410c01ff.png",
      name: "Google Maps Geocoding",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 270,
      core: 9.6,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Reverse Geocoding",
          description: "アドレス検索",
        },
        {
          method: "GET",
          name: "Geocoding",
          description: "緯度/経度ルックアップ",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/5d/604950331211e9be8b734faeb302df/3fc76a884560c170fce905be4756bacc.png",
      name: "Google Maps Time",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 0,
      time: 0,
      core: 0,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Timezone",
          description: "アドレス検索",
        },
      ],
    },
  ];
  const data2 = [
    {
      id: 1,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/da/da41a577d9406fa653e53345fb8617/62fdcd2bdf8cb1ec7cd2ebcbeeb528f4.png",
      name: "Twilio SMS",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 1155,
      core: 9.1,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "POST",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/a3/b32870371111e98fa4f768e3b3776c/1017853ad6caff0e4486825248299cad.png",
      name: "Google Translate",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 1155,
      core: 9.1,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "POST",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/53aa5f41e4b0596140341a36_medium.png",
      name: "Goofle Play Store",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 1155,
      core: 9.1,
      price: "PREMIUM",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "POST",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://s3.amazonaws.com/mashape-production-logos/apis/5b42b71de4b0a5b0626e97ae_medium",
      name: "Nexmo Verify",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 1155,
      core: 9.1,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "POST",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
      ],
    },
    {
      id: 5,
      image:
        "https://rapidapi-prod-apis.s3.amazonaws.com/c1/15f1be53744a6d98d77a020d769513/1d4767145139c8d08ce11ba951b9e6d0.png",
      name: "amazon-price",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      percent: 100,
      time: 1155,
      core: 9.1,
      price: "FREE",
      timeAgo: "6ヶ月前",
      type: "Data",
      data: [
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "GET",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
        {
          method: "POST",
          name: "Fetch an Account Resource",
          description: "上記のプロパティを含むアカウントの表現を返します。",
        },
      ],
    },
  ];

  return (
    <Box>
      <Text fontSize="lg">googlecloudが提供する他のAPI</Text>
      <Flex className="mt-3">
        <CardItem item={data[0]} width="14rem" />
        <CardItem item={data[1]} width="14rem" />
      </Flex>
      <Divider mb="2rem" />
      <Text display="inline">
        Google Translateを見た開発者は、こんなAPIにも興味を持っています
      </Text>
      <Link color="blue.500" display="inline">
        すべて表示
      </Link>
      {/* <Flex className="mt-3">
        {data2.map((item) => (
          <CardItem item={item} width="15rem" key="item.id" />
        ))}
      </Flex> */}
      {/* <Flex className="mt-3">
        {data2.map((item) => (
          <CardItem item={item} width="15rem" key="item.id" />
        ))}
      </Flex> */}
      <Box mb="2rem">
        <Text>評価</Text>
        <HStack>
          <Image
            alt="start"
            src="https://api.rakuten.net/static-assets/rakuten/star-yellow.svg"
            w="1.25rem"
          />
          <Image
            alt="start"
            src="https://api.rakuten.net/static-assets/rakuten/star-yellow.svg"
            w="1.25rem"
          />
          <Image
            alt="start"
            src="https://api.rakuten.net/static-assets/rakuten/star-yellow.svg"
            w="1.25rem"
          />
          <Image
            alt="start"
            src="https://api.rakuten.net/static-assets/rakuten/star-yellow.svg"
            w="1.25rem"
          />

          <Image
            alt="start"
            src="https://api.rakuten.net/static-assets/rakuten/star-white.svg"
            w="1.25rem"
          />
        </HStack>
      </Box>
    </Box>
  );
};
export default CollectionList;
