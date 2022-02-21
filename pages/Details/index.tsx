import NavBar from "./layout/NavBar";
import PageBody from "./PageBody";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <NavBar />
      <Box bg="white" mt="1" pb="3">
        <PageHeader />

        {/* <PageBody /> */}
      </Box>
      <Footer />
    </>
  );
};

export default Index;
