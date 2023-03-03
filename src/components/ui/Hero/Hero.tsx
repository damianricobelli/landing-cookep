import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Image,
  SimpleGrid,
  HStack,
  VStack,
  useColorModeValue,
  Link
} from "@chakra-ui/react"
import { useState } from "react"
import uuid from "react-uuid"
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

const features = [
  {
    text: "No más planillas Excel para gestionar tu negocio."
  },
  {
    text: "Control total de los pedidos y de la información."
  },
  {
    text: "Servicios personalizados para tus clientes."
  }
]

export default function CallToActionWithVideo() {
  const [check, setCheck] = useState<boolean>(true)

  const AnimationButton = ({ children }) => (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  )

  return (
    <Container maxW={"7xl"} px={5}>
      <Stack
        align={"center"}
        justify={"space-between"}
        spacing={{ base: 8, md: 20 }}
        py={{ base: 16, md: 28 }}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack flex={1} spacing={{ base: 6, md: 12 }}>
          <Stack direction={"column"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              Software para catering
            </Heading>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"purple.400"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              Atienda a sus clientes corporativos de una manera fácil y cómoda
            </Heading>
          </Stack>
          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize={{ base: "lg", lg: "xl" }}
          >
            La mejor herramienta para centralizar información de sus clientes,
            emitir y recibir órdenes de pedidos, gestionar la producción de la
            cocina y facilitar los procesos logísticos.
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            pt={{ base: 8, md: 0 }}
            spacing={4}
          >
            {features.map((feature) => (
              <HStack key={uuid()} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontWeight={600}
                  >
                    {feature.text}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            py={{ base: 10, md: 0 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              isExternal
              href={
                "https://api.whatsapp.com/send?phone=543413610556&text=%C2%A1Hola!%20Acabo%20de%20revisar%20su%20web%20y%20me%20gustar%C3%ADa%20probar%20Cookep"
              }
              _hover={{
                textDecoration: "none"
              }}
            >
              <Button
                rounded={"full"}
                leftIcon={<FaWhatsapp />}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                colorScheme={"whatsapp"}
                _hover={{ bg: "green.600" }}
              >
                Probar gratis
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          direction={"column"}
          justify={"center"}
          align={"center"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={{ base: "220px", sm: "350px", md: "450px", lg: "400px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            {check ? (
              <Image
                fallbackSrc={"/assets/img/with.svg"}
                alt={"With Cookep"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/assets/img/with.svg"}
              />
            ) : (
              <Image
                fallbackSrc={"/assets/img/without.svg"}
                alt={"Without Cookep"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/assets/img/without.svg"}
              />
            )}
          </Box>
          <Flex
            pt={8}
            direction={"row"}
            wrap={"wrap"}
            justify={"center"}
            align={"center"}
          >
            {check ? (
              <>
                <Box px={4} py={4}>
                  <AnimationButton>
                    <Button
                      rounded={"full"}
                      onClick={() => setCheck(true)}
                      size={"md"}
                      leftIcon={<CheckIcon />}
                      fontWeight={"normal"}
                      px={6}
                      color={"white"}
                      colorScheme={"purple"}
                      bg={"purple.500"}
                      _hover={{ bg: "purple.600" }}
                    >
                      Con Cookep
                    </Button>
                  </AnimationButton>
                </Box>
                <Box px={4} py={4}>
                  <AnimationButton>
                    <Button
                      rounded={"full"}
                      onClick={() => setCheck(false)}
                      size={"md"}
                      leftIcon={<CloseIcon />}
                      fontWeight={"normal"}
                      px={6}
                      color={"white"}
                      colorScheme={"gray"}
                      bg={"gray.500"}
                      _hover={{ bg: "gray.600" }}
                    >
                      Sin Cookep
                    </Button>
                  </AnimationButton>
                </Box>
              </>
            ) : (
              <>
                <Box px={4} py={4}>
                  <AnimationButton>
                    <Button
                      rounded={"full"}
                      onClick={() => setCheck(true)}
                      size={"md"}
                      leftIcon={<CheckIcon />}
                      fontWeight={"normal"}
                      px={6}
                      color={"white"}
                      colorScheme={"gray"}
                      bg={"gray.500"}
                      _hover={{ bg: "gray.600" }}
                    >
                      Con Cookep
                    </Button>
                  </AnimationButton>
                </Box>
                <Box px={4} py={4}>
                  <AnimationButton>
                    <Button
                      rounded={"full"}
                      onClick={() => setCheck(false)}
                      size={"md"}
                      leftIcon={<CloseIcon />}
                      fontWeight={"normal"}
                      px={6}
                      color={"white"}
                      colorScheme={"purple"}
                      bg={"purple.500"}
                      _hover={{ bg: "purple.600" }}
                    >
                      Sin Cookep
                    </Button>
                  </AnimationButton>
                </Box>
              </>
            )}
          </Flex>
        </Flex>
      </Stack>
    </Container>
  )
}
