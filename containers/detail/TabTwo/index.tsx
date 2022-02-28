import { Box, Container, Divider } from "@chakra-ui/react";
import CollectionList from "../../../components/detail/tab-two/CollectionList";
import MoreDetails from "../../../components/detail/tab-two/MoreDetails";
import AboutView from "../../../components/detail/tab-two/Provider";

const TabTwo = () => {
  return (
    <Container px="2rem" maxW="container.xl">
      <AboutView />
      <Divider mt="1rem" borderColor="gray.300" />
      <MoreDetails />
      <Divider mt="1rem" borderColor="gray.300" />
      <CollectionList />
    </Container>
  );
};
export default TabTwo;
