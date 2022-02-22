import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeader from "../../containers/Detail/PageHeader";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Header />
      <Box bg="white" mt="1" pb="3">
        <PageHeader />
      </Box>
      <Footer />
    </>
  );
};

export default Index;
