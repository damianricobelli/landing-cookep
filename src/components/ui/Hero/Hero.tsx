import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  SimpleGrid,
  HStack,
  VStack,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react"
import uuid from "react-uuid"
import { CheckIcon } from "@chakra-ui/icons"

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
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "15%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "purple.400",
                zIndex: -1
              }}
            >
              Todo lo que necesitas,
            </Text>
            <br />
            <Text as={"span"} color={"purple.400"}>
              para atender a tus clientes en un solo lugar
            </Text>
          </Heading>
          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize={{ base: "lg", lg: "xl" }}
          >
            Cookep es un software de gestión para viandas empresariales que
            sirve para mejorar la experiencia que le brindas a tus clientes
            mientras tienes el control total y absoluto de tu negocio.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              color={"white"}
              colorScheme={"purple"}
              bg={"purple.500"}
              _hover={{ bg: "purple.600" }}
            >
              Solicitar una demo
            </Button>
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
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
          <Flex
            pt={8}
            direction={"row"}
            wrap={"wrap"}
            justify={"center"}
            align={"center"}
          >
            <Box px={4} py={4}>
              <Button
                rounded={"full"}
                size={"md"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                colorScheme={"purple"}
                bg={"purple.500"}
                border={"2px solid white"}
                _hover={{ bg: "purple.600" }}
              >
                Catering
              </Button>
            </Box>
            <Box px={4} py={4}>
              <Button
                rounded={"full"}
                size={"md"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                colorScheme={"purple"}
                bg={"purple.500"}
                border={"2px solid white"}
                _hover={{ bg: "purple.600" }}
              >
                Empresas cliente
              </Button>
            </Box>
            <Box px={4} py={4}>
              <Button
                rounded={"full"}
                size={"md"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                colorScheme={"purple"}
                bg={"purple.500"}
                border={"2px solid white"}
                _hover={{ bg: "purple.600" }}
              >
                Empleados
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  )
}
