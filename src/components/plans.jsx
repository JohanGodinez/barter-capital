import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Center,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";

const Plan = () => {
  return (
    <div>
      <Text fontSize="2xl" textAlign="center" mb={18} mt={8} fontWeight={700}>
        KIT PLANS
      </Text>
      <Flex>
        <Center p={8}>
          <Card>
            <CardBody>
              <Center m={4}>
                <Flex flexDirection={"column"}>
                  <Text fontSize="3xl" fontWeight={700}>
                    Basico
                  </Text>
                  <Text fontSize="3xl" fontWeight={800}>
                    $20 / Año
                  </Text>
                </Flex>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni culpa nam, voluptate quia excepturi tenetur. Vitae enim
                  inventore nihil.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </Center>

        <Center p={8}>
          <Card>
            <CardBody>
              <Center m={4}>
                <Flex flexDirection={"column"}>
                  <Text fontSize="3xl" fontWeight={700}>
                    Intermedio
                  </Text>
                  <Text fontSize="3xl" fontWeight={800}>
                    $50 / Año
                  </Text>
                </Flex>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni culpa nam, voluptate quia excepturi tenetur. Vitae enim
                  inventore nihil.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </Center>

        <Center p={8}>
          <Card>
            <CardBody>
              <Center m={4}>
                <Flex flexDirection={"column"}>
                  <Text fontSize="3xl" fontWeight={700}>
                    Avanzado
                  </Text>
                  <Text fontSize="3xl" fontWeight={800}>
                    $100 / Año
                  </Text>
                </Flex>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni culpa nam, voluptate quia excepturi tenetur. Vitae enim
                  inventore nihil.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
                <ListItem>
                  <ListIcon color="green.400" />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </Center>
      </Flex>
      <Center>
        <Text
          p={8}
          fontSize="2xl"
          fontWeight={"600"}
          textDecoration="underline"
        >
          Ver todos los kit plans
        </Text>
      </Center>
    </div>
  );
};

export default Plan;
