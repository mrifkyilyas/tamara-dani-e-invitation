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
  color
} from '@chakra-ui/react';
import RightPatternHeader from './../assets/RightPatternHeader.svg';
import LeftPatternHeader from './../assets/LeftPatternHeader.svg';
import CenterPatternHeader from './../assets/CenterPatternHeader.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import RightWayang from './../assets/RightWayang.svg';
import LeftWayang from './../assets/LeftWayang.svg';
import "./../styles.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InvitationApi from '../api/invitation';
import useAuth from './Auth';
import { Loading } from './Loading';

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Welcome = () => {
  const { loading, found, data } = useAuth();

  const navigate = useNavigate();
  return (
    loading ? <Loading/> : <Container maxWidth={"420px"} height={"100vh"} padding={"0"} margin={"auto"}
      backgroundColor={"white"} style={
        {
          backgroundImage: `url(${RightPatternHeader}),
           url(${LeftPatternHeader}), 
           url(${CenterPatternHeader}), 
           url(${RightWayang}), 
           url(${LeftWayang}), 
           url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top, left top, center top, right bottom, left bottom, center",
          backgroundSize: "auto, auto, auto, auto, auto, cover",
        }
      }>
      <VStack
        textAlign={'center'}
        align={'center'}
        justifyContent={'center'}
        height={"100%"}
        py={"4rem"}
      >
        <VStack
          spacing={8}
          flex={1}
          justifyContent={"center"}>
          <Image src={Logo} alt="Logo" className="Logo" />
          <Box>
            <Text color={'#222222'} fontSize="14" fontFamily={"Lora"}>
              Kepada,
            </Text>
            <Text color={'#222222'} fontSize="22" fontFamily={"Lora-italic"} fontWeight={"bold"} textColor={"orange.900"}>
              {data?.name.split(" ").map((word) => capitalize(word)).join(" ")}
            </Text >
          </Box>
        </VStack>
        <Button
          bgColor={"orange.900"}
          width={"80%"}
          height={"3rem"}
          rounded={"full"}
          color={"whiteAlpha.800"}
          fontFamily={"Lora"}
          _hover={{
            bg: 'orange.800',
            color: 'whiteAlpha.900'
          }}
          _active={{
            bg: 'orange.700',
            transform: 'scale(0.95)',
            color: 'whiteAlpha.900'
          }}
          onClick={() => navigate('/invitation-detail/' + data?.slug)}

        >Buka Undangan</Button>
      </VStack>
      {/* <Flex>
          <Image src={LeftWayang} objectFit='cover' />
          <Spacer />
          <Image src={RightWayang} objectFit='cover' />
        </Flex> */}
    </Container>
  );
}

export default Welcome;
