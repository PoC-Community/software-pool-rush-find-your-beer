import {
  Center,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button, Heading, Tooltip
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Nslider4 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={239}
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

function Nslider3 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={184}
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
      max={172}
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
        <Nslider1/>
      </VStack>
      <Text fontSize='2xl'>175</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Hoppy</Text>
        <Nslider2/>
      </VStack>
      <Text fontSize='2xl'>172</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Spices</Text>
        <Nslider3/>
      </VStack>
      <Text fontSize='2xl'>184</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl'>Malty</Text>
        <Nslider4/>
        <MyButton/>
      </VStack>
      <Text fontSize='2xl'>239</Text>
    </Center>
  </div>
);
export default Question4;