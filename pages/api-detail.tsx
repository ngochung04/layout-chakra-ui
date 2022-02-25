import Header from "../components/Layout";
import Footer from "../components/Layout";
import PageHeader from "../containers/detail/PageHeader";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

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
