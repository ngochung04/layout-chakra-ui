import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
type Props = {
  children?: ReactNode;
  search: boolean;
};
const Layout: FC<Props> = ({ children, search }) => {
  return (
    <>
      <Header search={search} />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
