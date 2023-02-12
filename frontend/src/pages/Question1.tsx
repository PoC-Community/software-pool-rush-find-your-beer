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
  Button, Heading, SliderMark, Tooltip, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure
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

function Helpme() {
  const style = {
    position: 'fixed',
    bottom: 100,
    right: 100,
  };
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          ?
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>International Bitterness Units</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Il existe l'IBU, pour International Bitterness Units, mais aussi l'EBU, European Bitterness Units. Le reste ce sont des chiffres, plus ça tape haut, plus c'est amer. L'échelle IBU permet donc de se faire une idée de l'amertume d'une bière.</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

function Helpme2() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        ?
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Alcool By Volume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>L'ABV (ou Alcool By Volume) est l'unité internationale de mesure de la quantité d'alcool contenu dans une bière.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const Question1 = (): JSX.Element => (
  <div>
    <Center mt="64px">
      <Heading size='4xl' fontSize='100px' color='white'>
        Stats
      </Heading>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>IBU</Text>
        <Rslider/>
        <Helpme/>
      </VStack>
      <Text fontSize='2xl' color='white'>100</Text>
    </Center>
    <Center mt="64px">
      <Text fontSize='2xl' color='white'>0</Text>
      <VStack spacing="32px">
        <Text fontSize='4xl' color='white'>ABV</Text>
        <Nslider/>
      </VStack>
      <Text fontSize='2xl' color='white'>57.5</Text>
      <Helpme2/>
    </Center>
    <Center mt="64px">
      <MyButton/>
    </Center>
  </div>
);
export default Question1;