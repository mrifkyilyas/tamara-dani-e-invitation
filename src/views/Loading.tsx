import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  Spacer,
  Image,
  VStack,
  color,
  HStack,
  Divider,
  AspectRatio,
  Spinner
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons'
import RightPatternHeader from './../assets/RightPatternHeader.svg';
import LeftPatternHeader from './../assets/LeftPatternHeader.svg';
import CenterPatternHeaderInvitation from './../assets/CenterPatternHeaderInvitation.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import Gunungan from './../assets/Gunungan.svg';
import RightWayang from './../assets/RightWayang.svg';
import LeftWayang from './../assets/LeftWayang.svg';
import QRExample from './../assets/QRExample.png';
import Pengantin from './../assets/Pengantin.jpeg';
import HorizontalLine from './../assets/HorizontalLine.svg';
import VerticalLine from './../assets/VerticalLine.svg';
import "./../styles.css";
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import useAuth from './Auth';

export function Loading() {

  return (
    <Container maxWidth={"420px"} height={"100vh"} padding={"0"} margin={"auto"}
      backgroundColor={"white"} style={
        {
          backgroundImage: `
           url(${CenterPatternHeaderInvitation}), 
           url(${Gunungan}),
           url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top, center 100px, center",
          backgroundSize: "auto, auto, cover",
        }
      }>
      <VStack
        textAlign={'center'}
        align={'center'}
        justifyContent={'center'}
        height={"100%"}
        py={"3rem"}
      >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.900'
          size='xl'
        />
      </VStack>
    </Container>
  );
}

