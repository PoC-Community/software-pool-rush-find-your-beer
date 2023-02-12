import {
  Center,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  Heading,
  Button, Tooltip
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


function Nslider3 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={139}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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
  )
}

function Nslider2 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={175}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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
  )
}

function Nslider1 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={81}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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
      <Heading size='4xl' fontSize='100px' color='white'>
        Mouthfeel
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>ASTRINGENCY</Text>
        <Nslider1/>
      </VStack>
      <Text fontSize='2xl' color='white'>81</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>BODY</Text>
        <Nslider2/>
      </VStack>
      <Text fontSize='2xl' color='white'>175</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>ALCOHOL</Text>
        <Nslider3/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl' color='white'>139</Text>
    </Center>
  </div>
);
export default Question2;