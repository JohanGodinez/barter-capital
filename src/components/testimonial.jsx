import React from "react";
import {
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <div>
      <Text fontSize="2xl" textAlign="center" mb={18} mt={24}>
        Servicios
      </Text>
      <Flex>
        <Box flex={1} p="4">
          <Card>
            <CardBody>
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Flex flexDirection="row" alignItems="center">
                    <Box pr="4">
                      <Avatar name="Johan Godinez" />
                    </Box>
                    <Box>
                      <Text fontSize="md" fontWeight={700} align="left">
                        Lizzette
                      </Text>
                    </Box>
                  </Flex>
                  <Text fontSize="md" fontWeight={400} align="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vel molestias assumenda necessitatibus perspiciatis eius
                    dignissimos error tempore non in pariatur, voluptatem alias
                    quos facere id repellendus corrupti excepturi laborum a?
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
        <Box flex={1} p="4">
          <Card>
            <CardBody>
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Flex flexDirection="row" alignItems="center">
                    <Box pr="4">
                      <Avatar name="Johan Godinez" />
                    </Box>
                    <Box>
                      <Text fontSize="md" fontWeight={700} align="left">
                        Lizzette
                      </Text>
                    </Box>
                  </Flex>
                  <Text fontSize="md" fontWeight={400} align="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vel molestias assumenda necessitatibus perspiciatis eius
                    dignissimos error tempore non in pariatur, voluptatem alias
                    quos facere id repellendus corrupti excepturi laborum a?
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
        <Box flex={1} p="4">
          <Card>
            <CardBody>
              <Flex m={4} direction="column" justifyContent="center">
                <Box>
                  <Flex flexDirection="row" alignItems="center">
                    <Box pr="4">
                      <Avatar name="Johan Godinez" />
                    </Box>
                    <Box>
                      <Text fontSize="md" fontWeight={700} align="left">
                        Lizzette
                      </Text>
                    </Box>
                  </Flex>
                  <Text fontSize="md" fontWeight={400} align="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vel molestias assumenda necessitatibus perspiciatis eius
                    dignissimos error tempore non in pariatur, voluptatem alias
                    quos facere id repellendus corrupti excepturi laborum a?
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default Testimonial;
