import PageHeader from "../containers/detail/PageHeader";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Head from "next/head";

const apiDetail = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Layout search={true}>
        <Box bg="white" mt="1" pb="3">
          <PageHeader />
        </Box>
      </Layout>
    </>
  );
};

export default apiDetail;
