import { Center, Text, VStack, Heading, Box , Button, ButtonGroup, Image } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function MyImage() {
    return <img src="/logobiere.png" alt="Logo" width="50%" height="100px" />;
}

function MyButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question1");
  };
    return (
        <Center mt="0px">
            <VStack spacing={4} direction='row' align='center'>
                <Button colorScheme='messenger' size='lg' onClick={handleClick}>
                    SEARCH
                </Button>
            </VStack>
        </Center>
    );
}
const Home = (): JSX.Element => (
<div>
    <Center mt="64px">
     <VStack spacing="32px">
          <MyImage />
          <Text fontSize='4xl' color='white'>Are you looking for the perfect beer for you ?</Text>
          <Text fontSize='4xl' color='white'>You are on the right place !</Text>
          <MyButton />
     </VStack>
    </Center>
</div>
);
export default Home;