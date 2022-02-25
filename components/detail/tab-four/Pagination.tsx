import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { BiChevronsRight, BiDotsHorizontalRounded } from "react-icons/bi";
const Name = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const settingButton = {
    border: "1px",
    borderRadius: "sm",
    borderColor: "gray.300",
    display: "inline",
    size: "xs",
    mx: "0.25rem",
    bg: "white",
    _hover: { borderColor: "blue.500", color: "blue.500" },
  };
  return (
    <Box my="1.5rem" textAlign="right">
      <Button disabled {...settingButton} borderColor="gray.500">
        {"<"}
      </Button>
      <Button {...settingButton}>1</Button>
      <Button {...settingButton}>2</Button>
      <Button {...settingButton}>3</Button>
      <Button {...settingButton}>4</Button>
      <Button {...settingButton}>5</Button>
      <Button
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        size="xs"
        bg="white"
        _hover={{ bg: "white" }}
      >
        {isOpen ? (
          <BiChevronsRight color="#4a90e2" />
        ) : (
          <BiDotsHorizontalRounded />
        )}
      </Button>

      <Button {...settingButton}>8</Button>
      <Button {...settingButton}>{">"}</Button>
    </Box>
  );
};
export default Name;
