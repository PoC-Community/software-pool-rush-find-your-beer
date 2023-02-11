import { Center, Text, VStack, Heading, Box , Button, ButtonGroup, Image } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';

function MyImage() {
    return <img src="/logobiere.png" alt="Logo" width="20%" height="200px" />;
}

function MyButton() {
    return (
        <Center mt="0px">
            <VStack spacing={4} direction='row' align='center'>
                <Button colorScheme='messenger' size='lg'>
                    SEARCH
                </Button>
            </VStack>
        </Center>
    );
}
const Home = (): JSX.Element => (
<div style={{ backgroundColor: "#0163C7", height: "20vh" }}>
    <MyImage />
    <Center mt="160px">
     <VStack spacing="32px">
          <Text fontSize='md'>You are looking for the perfect beer for you ?</Text>
          <Text fontSize='md'>You are on the right site !</Text>
          <MyButton />
     </VStack>
    </Center>
</div>
);
export default Home;