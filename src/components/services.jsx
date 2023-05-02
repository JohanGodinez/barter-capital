import React from "react";
import {
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  Button,
  Image,
} from "@chakra-ui/react";

const Services = () => {
  return (
    <div>
      <Text fontSize="2xl" textAlign="center" mb={18} mt={24} fontWeight={700}>
        SERVICIOS
      </Text>
      <Flex>
        <Box p={4}>
          <Card>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Text fontSize="xl" fontWeight={700} align="center">
                    RED DE MERCADEO
                  </Text>
                  <Text fontSize="md" fontWeight={400} align="center">
                    Nuestros Socios
                  </Text>
                </Box>
                <center>
                  <Button w="60%" my={4}>
                    Ver mas
                  </Button>
                </center>
              </Flex>
            </CardBody>
          </Card>
        </Box>
        <Box p={4}>
          <Card>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Text fontSize="xl" fontWeight={700} align="center">
                    RED DE MERCADEO
                  </Text>
                  <Text fontSize="md" fontWeight={400} align="center">
                    Nuestros Socios
                  </Text>
                </Box>
                <center>
                  <Button w="60%" my={4}>
                    Ver mas
                  </Button>
                </center>
              </Flex>
            </CardBody>
          </Card>
        </Box>
        <Box p={4}>
          <Card>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Text fontSize="xl" fontWeight={700} align="center">
                    RED DE MERCADEO
                  </Text>
                  <Text fontSize="md" fontWeight={400} align="center">
                    Nuestros Socios
                  </Text>
                </Box>
                <center>
                  <Button w="60%" my={4}>
                    Ver mas
                  </Button>
                </center>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default Services;
