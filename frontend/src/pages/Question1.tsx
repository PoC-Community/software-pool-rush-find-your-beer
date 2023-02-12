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
  Button, Heading, SliderMark, Tooltip
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Rslider () {
  return(
    <RangeSlider
      min={0}
      max={100}
      w="600px"
      defaultValue={[20, 80]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  )
}

function Nslider () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={57.5}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Slider aria-label='slider-ex-5' onChangeEnd={(val) => console.log(val)}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
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
        <Text fontSize='4xl'>IBU</Text>
        <Rslider/>
      </VStack>
      <Text fontSize='2xl'>100</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>ABV</Text>
        <Nslider/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl'>57.5</Text>
    </Center>
  </div>
);
export default Question1;