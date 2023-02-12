import {
  Center,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button, Heading, Switch, FormLabel, FormControl, Tooltip
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

function Nslider3 () {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Slider
      w="600px"
      id='slider'
      defaultValue={5}
      min={0}
      max={284}
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
      max={263}
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
      max={150}
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
      <Heading size='4xl' fontSize='100px' color='white'>
        Taste
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>Bitter</Text>
        <Nslider1/>
      </VStack>
      <Text fontSize='2xl' color='white'>150</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>Sweet</Text>
        <Nslider2/>
      </VStack>
      <Text fontSize='2xl' color='white'>263</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>Sour</Text>
        <Nslider3/>
      </VStack>
      <Text fontSize='2xl' color='white'>284</Text>
    </Center>
    <Center mt="64px">
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>Salty</Text>
        <Switch_Button/>
        <MyButton/>
      </VStack>
    </Center>
  </div>
);
export default Question3;