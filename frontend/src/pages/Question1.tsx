import { Center, Text, VStack, Heading, Box , Button, ButtonGroup, Image } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';

const Question1 = (): JSX.Element => (
  <div style={{ backgroundColor: "white", height: "20vh" }}>
    <Center mt="160px">
      <VStack spacing="32px">
        <Text fontSize='md'>QUESTION 1</Text>
      </VStack>
    </Center>
  </div>
);
export default Question1;