import {
  Center,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  Heading,
  Button
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/question3");
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

const Question2 = (): JSX.Element => (
  <div>
    <Center mt="64px">
      <Heading size='4xl' fontSize='100px'>
        Mouthfeel
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>ASTRINGENCY</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>81</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>BODY</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>175</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>ALCOHOL</Text>
        <Nslider/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl'>139</Text>
    </Center>
  </div>
);
export default Question2;