import {
  Container,
  Text,
  Button,
  Image,
  VStack,
  Center,
} from '@chakra-ui/react';
import RightPatternHeader from './../assets/RightPatternHeader.svg';
import LeftPatternHeader from './../assets/LeftPatternHeader.svg';
import CenterPatternHeader from './../assets/CenterPatternHeader.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import RightWayang from './../assets/RightWayang.svg';
import LeftWayang from './../assets/LeftWayang.svg';
import "./../styles.css";
import { useNavigate } from 'react-router-dom';
import useAuth from './Auth';
import { Loading } from './Loading';



const Welcome = () => {
  const { loading, found, data } = useAuth();

  const navigate = useNavigate();
  return (
    
    loading ? <Loading/> : <Center><Container  maxWidth={"420px"} padding={"0"} margin={"auto"}
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
          bottom: "0",
          top: "0",
          position: "fixed",
          
         
        }
      }>
      <VStack
        textAlign={'center'}
        align={'center'}
        justifyContent={'center'}
        height={"100%"}
        py={"3rem"}
      >
        <VStack
          spacing={8}
          flex={1}
          justifyContent={"center"}>
          <Image src={Logo} alt="Logo" className="Logo" />
          <VStack width={"85%"}>
            <Text color={'#222222'} fontSize="14" fontFamily={"Lora"}>
              Kepada,
            </Text>
            <Text  color={'#222222'} fontSize="22" fontFamily={"Lora-italic"} fontWeight={"bold"} textColor={"#673B16"}>
              {data?.name}
            </Text >
          </VStack>
        </VStack>
        <Button
          bgColor={"#673B16"}
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
    </Center>
  );
}

export default Welcome;
