import MainContainer from "./components/MainContainer";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Flex flexGrow={1} display="flex" h="100vh" p="0" m="0" bgColor="#67bed9">
      <MainContainer />
    </Flex>
  </ChakraProvider>
);

export default App;
