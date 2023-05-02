import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Plan from "./components/plans";
import Footer from "./components/footer";
import Services from "./components/services";
import Testimonial from "./components/testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Box
        bgGradient="linear(-45deg, rgb(75,14,140),rgb(23,182,158))"
        color={"white"}
      >
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          px={10}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          >
            Bievenido a Barter Capital <br />
          </Heading>
          <Text color={"white"} maxW="450px">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points.
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            align={"left"}
            alignSelf={"left"}
            position={"relative"}
          >
            <Button color={"white"} bg={"#565DA5"} px={6}>
              Get Started
            </Button>
            <Box></Box>
          </Stack>
        </Stack>
      </Box>
      <Plan />
      <Services />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
