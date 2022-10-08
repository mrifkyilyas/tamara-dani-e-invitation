import {
  Container,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import RightPatternHeader from './../assets/RightPatternHeader.svg';
import LeftPatternHeader from './../assets/LeftPatternHeader.svg';
import CenterPatternHeader from './../assets/CenterPatternHeader.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import RightWayang from './../assets/RightWayang.svg';
import LeftWayang from './../assets/LeftWayang.svg';
import "./../styles.css";

export function NotFound() {
  return (
    <Container maxWidth={"420px"} height={"100vh"} padding={"0"} margin={"auto"}
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

          <Text width={"70%"} color={'#222222'} fontSize="22" fontFamily={"Lora-italic"} fontWeight={"bold"} textColor={"orange.900"}>
            Maaf halaman yang anda cari tidak ditemukan
          </Text >

        </VStack>
      </VStack>
    </Container>
  );
}

