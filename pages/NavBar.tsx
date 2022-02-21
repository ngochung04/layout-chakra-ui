import {
  useDisclosure,
  Flex,
  Box,
  Text,
  Link,
  Stack,
  Button,
  Collapse,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  Grid,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  // ChevronDownIcon,
  // ChevronRightIcon,
} from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box position="sticky" top={"0"} w="100%" h={50} zIndex="1000">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={30}
        h="100%"
        w="100%"
        wrap="wrap"
        bg={"gray.100"}
        color={"black"}
      >
        {/* Logo */}
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Logo
          </Text>
        </Box>

        {/* Menu */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block">組織登録</Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block">APIを追加</Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block">ドキュメント</Text>
            </Link>

            <Link
              href="#"
              _hover={{ textDecoration: "none", color: "blue.200" }}
            >
              <Text display="block">ログイン</Text>
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
        </Box>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity> */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" px={30} py={0}>
            <HStack justify={"space-between"} h={50}>
              {/* Logo */}
              <Text fontSize="lg" fontWeight="bold">
                Logo
              </Text>

              {/* Menu */}
              <Box display={{ base: "block", md: "none" }}>
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
                />
              </Box>
            </HStack>
          </DrawerHeader>

          <DrawerBody px={0}>
            <Grid columnGap={16}>
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
                h={50}
                // w="100%"
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
      {/* </Collapse> */}
    </Box>
  );
};

export default NavBar;
