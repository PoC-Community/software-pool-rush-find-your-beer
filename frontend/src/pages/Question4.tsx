import {
  Center,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button, Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Nslider () {
  return(
    <Slider aria-label='slider-ex-1' defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}

function MyButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Result");
  };
  return (
    <Center mt="0px">
      <VStack spacing={4} direction='row' align='center'>
        <Button colorScheme='messenger' size='lg' onClick={handleClick}>
          NEXT
        </Button>
      </VStack>
    </Center>
  );
}

const Question4 = (): JSX.Element => (
  <div>
    <Center mt="64px">
      <Heading size='4xl' fontSize='100px'>
        Flavour/Aroma
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Fruits</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>175</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Hoppy</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>172</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Spices</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>184</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Malty</Text>
        <Nslider/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl'>239</Text>
    </Center>
  </div>
);
export default Question4;