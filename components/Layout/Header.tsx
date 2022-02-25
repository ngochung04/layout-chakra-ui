import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Spacer,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Center,
  Button,
  Stack,
  VStack,
  HStack,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Grid,
  IconButton,
  LinkOverlay,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FC } from "react";

interface Props {
  search?: boolean;
}

const Header: FC<Props> = ({ search }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box
      position="sticky"
      h="50"
      borderBottom="1px"
      borderBottomColor="gray.200"
      top="0"
      bg="white"
      zIndex="1000"
    >
      <Flex>
        <Flex mx="30px" display="inline-flex" wrap="wrap">
          <Center>
            {/* <Text size="lg">Logo</Text> */}
            <Link href="/">
              <Image
                src="https://api.rakuten.net/static-assets/rakuten/rakuten_logo.svg"
                alt="Rakuten"
                h="2.15rem"
              />
            </Link>
            {search ? (
              <Box
                alignContent="center"
                display={{ base: "none", lg: "inline-flex" }}
              >
                <SearchIcon
                  ml="30px"
                  my="3px"
                  color="blue.500"
                  display={{ base: "block", xl: "none" }}
                />

                <Box ml="30px" my="3px" display={{ base: "none", xl: "block" }}>
                  <InputGroup size="md">
                    <InputLeftElement>
                      <SearchIcon color="blue.500" />
                    </InputLeftElement>
                    <Input
                      w="30vw"
                      pr="4.5rem"
                      placeholder="APIを検索"
                      bg="gray.50"
                      _focus={{ bg: "white" }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        bg="blue.500"
                        h="1.75rem"
                        size="xs"
                        color="white"
                        px="40px"
                        mr="20px"
                        borderRadius="sm"
                      >
                        検索
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <Link mx="30px" color="blue.500" alignSelf="center">
                  カテゴリー
                </Link>
              </Box>
            ) : null}
          </Center>
        </Flex>
        <Spacer />
        <Flex display={{ base: "none", lg: "inline-flex" }} mx="30px">
          <Stack
            marginTop="3px"
            spacing={8}
            align="center"
            justify={"flex-end"}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block" fontSize="xs">
                組織登録
              </Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block" fontSize="xs">
                APIを追加
              </Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block" fontSize="xs">
                ドキュメント
              </Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block" fontSize="xs">
                ログイン
              </Text>
            </Link>

            <Button
              bgColor="orange"
              borderRadius={0}
              _hover={{ background: "orange.200" }}
            >
              <Text display="block" color={"white"}>
                新規登録
              </Text>
            </Button>
          </Stack>
        </Flex>
        <IconButton
          display={{ base: "block", lg: "none" }}
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerContent display={{ base: "block", lg: "none" }}>
            <DrawerHeader borderBottomWidth="1px" py={0}>
              <HStack h={50}>
                {/* Logo */}
                {/* <Text fontSize="lg" fontWeight="bold">
                  Logo
                </Text> */}
                <Image
                  src="https://api.rakuten.net/static-assets/rakuten/rakuten_logo.svg"
                  alt="Rakuten"
                  h="2.15rem"
                />
                <Spacer />
                {/* Menu */}
                <Box display={{ base: "block", lg: "none" }}>
                  <IconButton
                    onClick={onToggle}
                    icon={
                      isOpen ? (
                        <CloseIcon w={3} h={3} />
                      ) : (
                        <HamburgerIcon w={5} h={5} />
                      )
                    }
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                    mr="-1.25rem"
                  />
                </Box>
              </HStack>
            </DrawerHeader>

            <DrawerBody px={0}>
              <Grid columnGap={10}>
                <Link
                  href="#"
                  h={50}
                  px={3}
                  py={1}
                  display="grid"
                  placeItems={"center"}
                  _hover={{ textDecoration: "none", color: "blue.200" }}
                >
                  <Text textAlign="center">組織登録</Text>
                </Link>

                <Link
                  href="#"
                  h={50}
                  px={3}
                  py={1}
                  display="grid"
                  placeItems={"center"}
                  _hover={{ textDecoration: "none", color: "blue.200" }}
                >
                  <Text textAlign="center">APIを追加</Text>
                </Link>

                <Link
                  href="#"
                  h={50}
                  px={3}
                  py={1}
                  display="grid"
                  placeItems={"center"}
                  _hover={{ textDecoration: "none", color: "blue.200" }}
                >
                  <Text textAlign="center">ドキュメント</Text>
                </Link>

                <Link
                  href="#"
                  h={50}
                  px={3}
                  py={1}
                  display="grid"
                  placeItems={"center"}
                  _hover={{ textDecoration: "none", color: "blue.200" }}
                >
                  <Text textAlign="center">ログイン</Text>
                </Link>

                <Button
                  bgColor="orange"
                  borderRadius={0}
                  _hover={{ background: "orange.200" }}
                >
                  <Text display="block" color={"white"}>
                    新規登録
                  </Text>
                </Button>
              </Grid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};
export default Header;
