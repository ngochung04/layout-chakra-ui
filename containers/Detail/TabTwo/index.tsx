import { Box, Divider } from "@chakra-ui/react";
import CollectionList from "../../../components/Detail/TabTwo/CollectionList";
import MoreDetails from "../../../components/Detail/TabTwo/MoreDetails";
import AboutView from "../../../components/Detail/TabTwo/Provider";

const TabTwo = () => {
  return (
    <Box>
      <AboutView />
      <Divider mt="1rem" borderColor="gray.300" />
      <MoreDetails />
      <Divider mt="1rem" borderColor="gray.300" />
      <CollectionList />
    </Box>
  );
};
export default TabTwo;
