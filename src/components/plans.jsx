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
      <Text fontSize="2xl" textAlign="center" mb={18} mt={8}>
        Planes
      </Text>
      <Flex>
        <Center>
          <Card>
            <CardBody>
              <Center m={4}>
                <Text fontSize="xl">Basico</Text>
                <Text fontSize="xl">$20 / Año</Text>
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

        <Center>
          <Card>
            <CardBody>
              <Center m={4}>
                <Text fontSize="xl">Intermedio</Text>
                <Text fontSize="xl">$50 / Año</Text>
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

        <Center>
          <Card>
            <CardBody>
              <Center m={4}>
                <Text fontSize="xl">Avanzado</Text>
                <Text fontSize="xl">$100 / Año</Text>
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
    </div>
  );
};

export default Plan;
