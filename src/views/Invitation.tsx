import {
  Container,
  Text,
  Button,
  Box,
  Image,
  VStack,
  HStack,
  AspectRatio,
  Spinner,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import CenterPatternHeaderInvitation from './../assets/CenterPatternHeaderInvitation.svg';
import Background from './../assets/Background.svg';
import Logo from './../assets/Logo.svg';
import Gunungan from './../assets/Gunungan.svg';
import ProkesMasker from './../assets/ProkesMasker.svg';
import ProkesJarak from './../assets/ProkesJarak.svg';
import ProkesCuci from './../assets/ProkesCuci.svg';
import Pengantin from './../assets/Pengantin.png';
import HorizontalLine from './../assets/HorizontalLine.svg';
import VerticalLine from './../assets/VerticalLine.svg';
import FooterLogo from './../assets/FooterLogo.svg';
import InstagramLogo from './../assets/InstagramLogo.svg';
import UcapanTerimakasih from './../assets/UcapanTerimakasih.svg';
import Image1 from './../assets/Image-1.png';
import Image2 from './../assets/Image-2.png';
import Image3 from './../assets/Image-3.png';
import Image4 from './../assets/Image-4.png';
import Image5 from './../assets/Image-5.png';
import Slideshow1 from './../assets/slideshow-1.jpg';
import Slideshow2 from './../assets/slideshow-2.jpg';
import Slideshow3 from './../assets/slideshow-3.jpg';
import Slideshow4 from './../assets/slideshow-4.jpg';
import Slideshow5 from './../assets/slideshow-5.jpg';
import "./../styles.css";
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import useAuth from './Auth';
import { Loading } from './Loading';
import Countdown from 'react-countdown';
import ProfileUndangan from '../config/profile-undangan';
import MessageBoxApi, { WillAttendEnum } from '../api/message-box';
import { Formik } from 'formik';
import {
  SelectControl,
  SubmitButton,
  TextareaControl
} from "formik-chakra-ui";
import * as Yup from "yup";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import useSound from 'use-sound'

export function Invitation() {
  const { loading, found, data, isHaveSubmitMessage, setIsHaveSubmitMessage, BackgroundMusic } = useAuth();
  const [loadingForm, setLoadingForm] = useState(false);
  const hDay = new Date(ProfileUndangan.hDay);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(BackgroundMusic);
  const handleMusic = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }

  const initialValues = {
    message: "",
    select: "",
  };
  const validationSchema = Yup.object({
    message: Yup.string().required('Kolom pesan tidak boleh kosong'),
    select: Yup.string().required('Kolom Kehadiran Harap Dipilih'),
  });
  const { isOpen, onOpen, onClose } = useDisclosure()


  const onSubmit = async (values: any) => {
    setLoadingForm(true);
    try {
      const msgBoxResponse = await MessageBoxApi.submitMessageBox({
        message: values.message,
        willAttend: values.select,
        slug: data.slug
      });
      if (msgBoxResponse.status === 201 && msgBoxResponse.data) {
        onOpen();
        setIsHaveSubmitMessage(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingForm(false);
    }

  };

  const [photoIndex, setPhotoIndex] = useState(1);
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const images = [
    Slideshow1,
    Slideshow2,
    Slideshow3,
    Slideshow4,
    Slideshow5,
  ];

  const handleOpenLightBox = (value: number) => {
    setIsOpenLightbox(true);
    setPhotoIndex(value);
  }
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
            color='#673B16'
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
                    <Text align={"right"} fontSize="7.5">
                      {data.slug}
                    </Text>
                  </Box>
                  <Text width={"90%"} color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"#673B16"}>
                    Mohon untuk scan QR di atas untuk masuk ke dalam gedung
                  </Text >
                </VStack>
                <VStack>
                  <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} fontWeight={"bold"} textColor={"#673B16"}>
                    Bismillahirrahmanirrahim <br />
                    Assalamualaikum Warahmatullahi Wabarakatuh
                  </Text >

                  <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"#673B16"}>
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami
                  </Text >
                </VStack>
                <VStack spacing={7}>
                  <Image src={Pengantin} borderRadius="10px" width={330} height={200} loading={"lazy"} fit={"cover"} />
                  <VStack>
                    <Text color={'#222222'} fontSize="18" fontFamily={"Lora"} fontWeight={"bold"} textColor={"#673B16"}>
                      {ProfileUndangan.pengantinWanita}
                    </Text >
                    <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"#673B16"}>
                      {ProfileUndangan.orangTuaWanita}
                    </Text >
                  </VStack>
                  <Text width={"90%"} color={'#222222'} fontSize="18" fontFamily={"Lora-italic"} textColor={"#673B16"}>
                    dengan
                  </Text>
                  <VStack>
                    <Text color={'#222222'} fontSize="18" fontFamily={"Lora"} fontWeight={"bold"} textColor={"#673B16"}>
                      {ProfileUndangan.pengantinPria}
                    </Text >
                    <Text width={"90%"} color={'#222222'} fontSize="16" fontFamily={"Lora-italic"} textColor={"#673B16"}>
                      {ProfileUndangan.orangTuaPria}
                    </Text >
                  </VStack>
                </VStack>
              </VStack>
              <VStack spacing={"12"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"#673B16"}>
                  ACARA
                </Text >
                <Countdown date={hDay} renderer={renderer} overtime={true} />,
                <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} fontWeight={"bold"} textColor={"#673B16"}>
                  {ProfileUndangan.tanggalAkad}
                </Text >
                <Image src={VerticalLine} alt="Vertical Line" className="VerticalLine" />
                <HStack justifyContent={"center"} flex={3} spacing={"20px"} color={'#222222'} fontSize="14" fontFamily={"Lora"} fontWeight={"bold"} textColor={"#673B16"}>
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
                <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} textColor={"#673B16"}>
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
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"#673B16"}>
                  GALERI
                </Text>
                <HStack>
                  <VStack spacing={3}>
                    <Image onClick={() => handleOpenLightBox(0)} src={Image1} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image onClick={() => handleOpenLightBox(1)} src={Image2} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                  </VStack>
                  <VStack spacing={3}>
                    <Image onClick={() => handleOpenLightBox(2)} src={Image3} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image onClick={() => handleOpenLightBox(3)} src={Image4} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                    <Image onClick={() => handleOpenLightBox(4)} src={Image5} borderRadius="10px" loading={"lazy"} fit={"cover"} />
                  </VStack>

                </HStack>

              </VStack>

              <VStack spacing={"8"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"#673B16"}>
                  PROKES
                </Text>
                <VStack spacing={2}>
                  <Image src={ProkesMasker} alt="Prokes Masker" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"#673B16"}>
                    Gunakan masker selama acara berlangsung
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Image src={ProkesJarak} alt="Prokes Jarak" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"#673B16"}>
                    Tetap menjaga jarak aman
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Image src={ProkesCuci} alt="Prokes Cuci" height={"40px"} />
                  <Text color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"#673B16"}>
                    Cuci tangan dan gunakan hand sanitizer
                  </Text>
                </VStack>

              </VStack>
              <VStack spacing={"4"}>
                <Text fontWeight={700} color={'#222222'} fontSize="24" fontFamily={"Lora"} textColor={"#673B16"}>
                  UCAPAN & DOA
                </Text>
                <Text w={"80%"} color={'#222222'} fontSize="14" fontFamily={"Lora"} textColor={"#673B16"}>
                  Terima kasih atas tanda kasih serta ucapan dan doa yang diberikan
                </Text>
                {
                  !isHaveSubmitMessage && (
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={validationSchema}
                    >
                      {({ handleSubmit, values, errors }) => (
                        <Box
                          width={"90%"}
                          as="form"
                          onSubmit={handleSubmit as any}
                        >
                          <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"#673B16"}>Nama Anda</FormLabel>
                          <Input _placeholder={{ color: 'orange.800' }} focusBorderColor={"orange.800"} color="orange.800" isRequired={true} marginBottom={"10px"} bgColor={"whiteAlpha.900"} value={data.name} height={"50px"} fontSize="12" fontFamily={"Lora"} isReadOnly />
                          <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"#673B16"}>Saya akan menghadiri</FormLabel>
                          <SelectControl
                            name="select"
                            selectProps={{
                              placeholder: "Pilih",
                              isRequired: true,
                              focusBorderColor: "orange.800",
                              color: "orange.800",
                              bgColor: "whiteAlpha.900",
                              height: "50px",
                              fontSize: "12",
                              fontFamily: "Lora",
                              marginBottom: "10px",
                              _placeholder: { color: 'orange.800' },
                            }
                            }
                          >
                            <option value={WillAttendEnum.YES}>Ya</option>
                            <option value={WillAttendEnum.NO} >Tidak</option>
                            <option value={WillAttendEnum.MAYBE}>Mungkin</option>
                          </SelectControl>
                          <FormLabel fontWeight={700} color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"#673B16"}>Ucapan Anda</FormLabel>
                          <TextareaControl
                            name="message"
                            textareaProps={{
                              isRequired: true,
                              _placeholder: { color: 'orange.800' },
                              focusBorderColor: "orange.800",
                              color: "orange.800",
                              marginBottom: "10px",
                              bgColor: "whiteAlpha.900",
                              placeholder: 'Masukkan Ucapan',
                              height: "120px",
                              fontSize: "12",
                              fontFamily: "Lora",
                            }}
                          />
                          <SubmitButton
                            marginTop={"25px"}
                            bgColor={"#673B16"}
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
                            isLoading={loadingForm}
                          >Kirim</SubmitButton>
                        </Box>
                      )}
                    </Formik>
                  )
                }
              </VStack>
              <VStack spacing={"1"}>
                <Image src={FooterLogo} alt="Logo" marginBottom={"60px"} />
                <HStack>
                  <Image src={InstagramLogo} alt="InstagramLogo" height={"12px"} />
                  <Text color={'#222222'} fontSize="12" fontFamily={"Lora"} textColor={"#673B16"}>
                    Designed by Oklin Studio
                  </Text>
                </HStack>


              </VStack>

            </VStack>
          </VStack>
        }
        <>
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={"#EBE5D5"} marginTop={"30vh"} width={"90%"}>
              <ModalBody marginTop={"50px"} marginBottom={"50px"} >
                <VStack spacing={10}>
                  <Image src={UcapanTerimakasih} alt="UcapanTerimakasih" height={"80px"} width={"80px"} />
                  <Text color={'#222222'} fontSize="16" fontFamily={"Lora"} textColor={"#673B16"}>
                    Terima kasih atas ucapan dan doa Anda
                  </Text>
                  <Button
                    marginTop={"25px"}
                    bgColor={"#673B16"}
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
                    }} onClick={onClose}>
                    Tutup
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal></>
        <>
          {
            isOpenLightbox && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpenLightbox(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onImageLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
                onImageLoadError={() => setIsOpenLightbox(false)}

              />
            )
          }
          <Box
            position='fixed'
            bottom='3vh'
            bgColor={"#673B16"}
            borderRadius='full'
            color={"whiteAlpha.900"}
            right={['16px', '84px']}
            _hover={{
              bg: 'orange.800',
              color: 'whiteAlpha.900'
            }}
            _active={{
              bg: 'orange.700',
              transform: 'scale(0.95)',
              color: 'whiteAlpha.900'
            }}
            onClick={() => handleMusic()}
            padding="12px"
            zIndex={3}>
            {
              isPlaying ?
                <MdPause />
                :
                <MdPlayArrow />
            }
            {/* </Button> */}
          </Box>
        </>

      </Container >
  );
}


// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: any }) => {
  if (completed) {
    if (days <= 1) {
      return <Text width={"80%"} color={'#222222'} fontSize="16" fontFamily={"Lora"} textColor={"#673B16"}>
        Acara Sedang Berlangsung
      </Text >;
    } else {
      return <Text width={"80%"} color={'#222222'} fontSize="66" fontFamily={"Lora"} textColor={"#673B16"}>
        Acara Sudah Selesai
      </Text >;
    }
  } else {
    // Render a countdown
    return (
      <>
        <HStack spacing={3} flex={4} color={"whiteAlpha.900"} fontSize="20" fontFamily={"Lora"} fontWeight={"bold"} >
          <VStack spacing={"0.01"} bgColor={"#673B16"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {days}
            </Text>
            <Text fontSize="18">
              Hari
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"#673B16"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {hours}
            </Text>
            <Text fontSize="18">
              Jam
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"#673B16"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
            <Text>
              {minutes}
            </Text>
            <Text fontSize="18">
              Menit
            </Text>
          </VStack>
          <VStack spacing={"0.01"} bgColor={"#673B16"} width={"68px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"5px"}>
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

