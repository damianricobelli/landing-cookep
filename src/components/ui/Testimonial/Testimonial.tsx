import { ReactNode } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue
} from "@chakra-ui/react"

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("purple.100", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("purple.100", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} textAlign={"center"} fontSize={"xl"}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar
        bg="white"
        border={"2px solid gray"}
        src={src}
        size={"xl"}
        alt={name}
        mb={2}
      />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading align={"center"}>Nuestros clientes hablan</Heading>
          <Text align={"center"}>
            Trabajamos con clientes de todo latinoamérica
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Plataforma amigable e intuitiva
              </TestimonialHeading>
              <TestimonialText>
                Cumple un rol importante ya que unifica los pedidos de nuestros
                clientes, reduce tiempos administrativos y cierra el ciclo
                operacional. Muchos de nuestros clientes nos pedían una
                herramienta que sea fácil de usar y llegó en el momento justo.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"assets/img/cookmeals.svg"}
              name={"Javier Sandoval"}
              title={"CEO de Cook Meals Catering"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Información clara</TestimonialHeading>
              <TestimonialText>
                Lo que más me interesó de Cookep es tener la posiblidad de
                chequear toda la información relevante sobre el servicio
                contratado. Nunca más esos malentendidos con los empleados y la
                empresa de catering.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"assets/img/rrhh.png"}
              name={"RRHH"}
              title={"Empresa Lackaut"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Servicio de soporte veloz</TestimonialHeading>
              <TestimonialText>
                Es un sistema súmamente práctico y fácil de usar. Cada vez que
                tuvimos que ser asistidos por el soporte, actuaron de manera
                rápida. Tener la posibilidad de organizar todos los pedidos a
                través de las planillas nos facilitó muchísimo los procesos.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"assets/img/comercial.png"}
              name={"Comercial"}
              title={"Merck Group"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
