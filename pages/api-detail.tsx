import PageHeader from "../containers/detail/PageHeader";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  return (
    <>
      <Layout search={true}>
        <Box bg="white" mt="1" pb="3">
          <PageHeader />
        </Box>
      </Layout>
    </>
  );
};

export default Index;
