import "../styles/globals.css";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";

import theme from "../theme";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container
        className="App"
        as="main"
        maxW="960px"
        px={{ base: 5, md: 8 }}
        minH={{ base: "calc(100vh - 115px)", md: "calc(100vh - 136px)" }}
      >
        <Box mt={{ base: "20px", md: "20px" }} pb={8}>
          <Component {...pageProps} />
        </Box>
      </Container>
      {/* <Menu /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
