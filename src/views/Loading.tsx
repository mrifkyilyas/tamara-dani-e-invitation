import {
  Container,
  VStack,
  Spinner
} from '@chakra-ui/react';
import CenterPatternHeaderInvitation from './../assets/CenterPatternHeaderInvitation.svg';
import Background from './../assets/Background.svg';
import Gunungan from './../assets/Gunungan.svg';
import "./../styles.css";

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

