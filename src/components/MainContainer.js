import { chakra, Flex, Heading, Text } from "@chakra-ui/react";
import Gatcha from "./Gatcha";

const MainContainer = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100%"
        w="100%"
      >
        <Text
          fontFamily="Open Sans"
          textColor="#f2495c"
          fontWeight="bold"
          fontSize={{ base: "1.2rem", md: "1.4rem" }}
          mb={2}
        >
          GATCHA Message
        </Text>
        <Heading
          fontFamily="Poppins"
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
        >
          GATCHA BLESSING FOR YOU
        </Heading>
        <Gatcha />
      </Flex>
    </chakra.main>
  );
};

export default MainContainer;
