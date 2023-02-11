import {
  Center,
  Text,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button, Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Rslider () {
  return(
    <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 1000]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
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
    navigate("/question2");
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

const Question1 = (): JSX.Element => (
  <div>
    <Center mt="64px">
      <Heading size='4xl' fontSize='100px'>
        Stats
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>IBU(International Bitterness Units)</Text>
        <Rslider/>
      </VStack>
      <Text fontSize='2xl'>100</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>ABV(Alcool By Volume)</Text>
        <Nslider/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl'>57.5</Text>
    </Center>
  </div>
);
export default Question1;