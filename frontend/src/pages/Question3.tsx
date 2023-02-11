import {
  Center,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button, Heading, Switch, FormLabel, FormControl
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Switch_Button () {
  return(
    <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='yes_or_no' mb='0'>
        With or Without
      </FormLabel>
      <Switch id='yes_or_no' size='lg'/>
    </FormControl>
  )
}

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
    navigate("/question4");
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

const Question3 = (): JSX.Element => (
  <div>
    <Center mt="64px">
      <Heading size='4xl' fontSize='100px'>
        Taste
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Bitter</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>150</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Sweet</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>263</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Sour</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl'>284</Text>
    </Center>
    <Center mt="64px">
      <VStack spacing="32px">
        <Text fontSize='4xl'>Salty</Text>
        <Switch_Button/>
        <MyButton/>
      </VStack>
    </Center>
  </div>
);
export default Question3;