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
  Spinner,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons'
import CenterPatternHeaderInvitation from './../assets/CenterPatternHeaderInvitation.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import Gunungan from './../assets/Gunungan.svg';
import ProkesMasker from './../assets/ProkesMasker.svg';
import ProkesJarak from './../assets/ProkesJarak.svg';
import ProkesCuci from './../assets/ProkesCuci.svg';
import Pengantin from './../assets/Pengantin.jpeg';
import HorizontalLine from './../assets/HorizontalLine.svg';
import VerticalLine from './../assets/VerticalLine.svg';
import FooterLogo from './../assets/FooterLogo.svg';
import InstagramLogo from './../assets/InstagramLogo.svg';
import Image1 from './../assets/Image-1.png';
import Image2 from './../assets/Image-2.png';
import Image3 from './../assets/Image-3.png';
import Image4 from './../assets/Image-4.png';
import Image5 from './../assets/Image-5.png';
import "./../styles.css";
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import useAuth from './Auth';
import { Loading } from './Loading';
import Countdown from 'react-countdown';
import ProfileUndangan from '../config/profile-undangan';


export function Invitation() {

  const { loading, found, data } = useAuth();
  const hDay = new Date(ProfileUndangan.hDay);

  return (
    loading ? <Loading /> :
      <Container maxWidth={"420px"} height={"auto"} padding={"0"} margin={"auto"}
        backgroundColor={"white"} style={
          {
            backgroundImage: `
           url(${CenterPatternHeaderInvitation}), 
           url(${Gunungan}),
           url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top, center 100px, center",
            backgroundSize: "auto, auto, cover",
            backgroundAttachment: "fixed",
          }
        }>
        {
          loading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='orange.900'
            size='xl'
          /> : <VStack
            textAlign={'center'}
            align={'center'}
            justifyContent={'center'}
            height={"100%"}
            py={"3rem"}
          >
            <VStack spacing={100}>
              <VStack
                spacing={8}
                flex={1}
                justifyContent={"center"}>
                <Image src={Logo} alt="Logo" className="Logo" width={"7rem"} />
                <VStack>
                  <Box bgColor={"whiteAlpha.900"} opacity={"0.7"} p={"20px"} paddingBottom="10px">
                    <QRCode value={data.slug} size={200} />
                    <Text align={"right"} fontSize="10">
                      {data.slug}
                    </Text>
                  </Box>
                  <Text width={"90%"} color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"orange.900"}>
                    Mohon untuk scan Qr di atas untuk masuk ke dalam gedung
                  </Text >
                </VStack>
                <VStack>
                  <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} fontWeight={"bold"} textColor={"orange.900"}>
                    Bismillahirrahmanirrahim Assalamualaikum Warahmatullahi Wabarakatuh
                  </Text >
                  <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"orange.900"}>
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
                  </Text >
                </VStack>
                <VStack spacing={7}>
                  <Image src={Pengantin} borderRadius="10px" width={329} height={200} loading={"lazy"} fit={"cover"} />
                  <VStack>
                    <Text color={'#222222'} fontSize="18" fontFamily={"Lora"} fontWeight={"bold"} textColor={"orange.900"}>
                      {ProfileUndangan.pengantinWanita}
                    </Text >
                    <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"orange.900"}>
                      {ProfileUndangan.orangTuaWanita}
                    </Text >
                  </VStack>
                  <VStack>
                    <Text color={'#222222'} fontSize="18" fontFamily={"Lora"} fontWeight={"bold"} textColor={"orange.900"}>
                      {ProfileUndangan.pengantinPria}
                    </Text >
                    <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"orange.900"}>
                      {ProfileUndangan.orangTuaPria}
                    </Text >
                  </VStack>
                </VStack>
              </VStack>
              <VStack spacing={"12"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"orange.900"}>
                  ACARA
                </Text >
                <Countdown date={hDay} renderer={renderer} overtime={true} />,
                <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} fontWeight={"bold"} textColor={"orange.900"}>
                  {ProfileUndangan.tanggalAkad}
                </Text >
                <Image src={VerticalLine} alt="Vertical Line" className="VerticalLine" />
                <HStack justifyContent={"center"} flex={3} spacing={"20px"} color={'#222222'} fontSize="14" fontFamily={"Lora"} fontWeight={"bold"} textColor={"orange.900"}>
                  <VStack spacing={3} justifyContent={"center"}>
                    <Text>
                      Akad
                    </Text >
                    <Text>
                      <TimeIcon marginBottom={1} /> {ProfileUndangan.jamAkad}
                    </Text >
                  </VStack>
                  <Image src={HorizontalLine} alt="Horizontal Line" className="HorizontalLine" />
                  <VStack spacing={3}>
                    <Text>
                      Resepsi
                    </Text >
                    <Text>
                      <TimeIcon marginBottom={1} /> {ProfileUndangan.jamResepsi}
                    </Text >
                  </VStack>
                </HStack>
                <Image src={VerticalLine} alt="Vertical Line" className="VerticalLine" />
                <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} textColor={"orange.900"}>
                  <b>{ProfileUndangan.tempatAcara}</b>
                  <br />
                  {
                    ProfileUndangan.alamatAcara
                  }
                </Text >
                <AspectRatio w={"328px"} h={"200px"} ratio={16 / 9}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.328203960424!2d106.7335004!3d-6.4476704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1621adb085e6d2ff!2sVilla%20dangau%20arco!5e0!3m2!1sen!2sid!4v1664959883737!5m2!1sen!2sid" loading="lazy" />
                </AspectRatio>
              </VStack>
              <VStack spacing={"12"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"orange.900"}>
                  GALERI
                </Text>
                <HStack>
                  <VStack spacing={3}>
                    <Image src={Image1} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image src={Image2} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                  </VStack>
                  <VStack spacing={3}>
                    <Image src={Image3} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image src={Image4} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image src={Image5} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                  </VStack>

                </HStack>

              </VStack>

              <VStack spacing={"8"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"orange.900"}>
                  PROKES
                </Text>
                <VStack spacing={2}>
                  <Image src={ProkesMasker} alt="Prokes Masker" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"orange.900"}>
                    Gunakan masker selama acara berlangsung
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Image src={ProkesJarak} alt="Prokes Jarak" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"orange.900"}>
                    Tetap menjaga jarak aman
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Image src={ProkesCuci} alt="Prokes Cuci" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"orange.900"}>
                    Cuci tangan dan gunakan hand sanitizer
                  </Text>
                </VStack>

              </VStack>
              <VStack spacing={"4"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"orange.900"}>
                  UCAPAN & DOA
                </Text>
                <Text w={"80%"} color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"orange.900"}>
                  Terima kasih berterima kasih atas tanda kasih serta ucapan dan doa yang diberikan
                </Text>
                <FormControl width={"90%"}>
                  <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"orange.900"}>Nama Anda</FormLabel>
                  <Input _placeholder={{ color: 'orange.800' }} focusBorderColor={"orange.800"} color="orange.800" isRequired={true} marginBottom={"10px"} bgColor={"whiteAlpha.900"} placeholder='Masukan Nama' height={"50px"} fontSize="12" fontFamily={"Lora"} />

                  <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"orange.900"}>Saya akan menghadiri</FormLabel>
                  <Select focusBorderColor={"orange.800"} marginBottom={"10px"} bgColor={"whiteAlpha.900"} placeholder='Pilih' color={'#222222'} height={"50px"} fontSize="12" fontFamily={"Lora"} textColor={"orange.900"} >
                    <option>Ya</option>
                    <option>Tidak</option>
                    <option>Mungkin</option>
                  </Select>

                  <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"orange.900"}>Ucapan Anda</FormLabel>
                  <Textarea _placeholder={{ color: 'orange.800' }} focusBorderColor={"orange.800"} color="orange.800" isRequired={true} marginBottom={"10px"} bgColor={"whiteAlpha.900"} placeholder='Masukkan Ucapan' height={"120px"} fontSize="12" fontFamily={"Lora"} />
   
                  <Button
                    marginTop={"25px"}
                    bgColor={"orange.900"}
                    borderRadius={"40px"}
                    color={"whiteAlpha.900"}
                    variant="solid"
                    width={"100%"}
                    height={"50px"}
                    fontSize="12"
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
                  >
                    Kirim Ucapan</Button>
                </FormControl>
              </VStack>
              <VStack spacing={"1"}>
                <Image src={FooterLogo} alt="Logo" marginBottom={"60px"} />
                <HStack>
                  <Image src={InstagramLogo} alt="InstagramLogo" height={"12px"} />
                  <Text color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"orange.900"}>
                    Designed by Oklin Studio
                  </Text>
                </HStack>


              </VStack>

            </VStack>
          </VStack>
        }

      </Container>
  );


}
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: any }) => {
  if (completed) {
    if (days <= 1) {
      return <Text width={"80%"} color={'#222222'} fontSize="16" fontFamily={"Lora"} textColor={"orange.900"}>
        Acara Sedang Berlangsung
      </Text >;
    } else {
      return <Text width={"80%"} color={'#222222'} fontSize="66" fontFamily={"Lora"} textColor={"orange.900"}>
        Acara Sudah Selesai
      </Text >;
    }
  } else {
    // Render a countdown
    return (
      <>
        <HStack spacing={3} flex={4} color={"whiteAlpha.900"} fontSize="20" fontFamily={"Lora"} fontWeight={"bold"} >
          <VStack spacing={"0.01"} bgColor={"orange.900"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {days}
            </Text>
            <Text fontSize="18">
              Hari
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"orange.900"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {hours}
            </Text>
            <Text fontSize="18">
              Jam
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"orange.900"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {minutes}
            </Text>
            <Text fontSize="18">
              Menit
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"orange.900"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {seconds}
            </Text>
            <Text fontSize="18">
              Detik
            </Text>
          </VStack>
        </HStack>
      </>

    );
  }
};

