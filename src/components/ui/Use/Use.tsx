import { ReactNode } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Tag,
  TagLabel,
  useColorModeValue
} from "@chakra-ui/react"

const Use = ({ children }: { children: ReactNode }) => {
  return (
    <Box px={12} py={8}>
      {children}
    </Box>
  )
}

const UseAvatar = ({
  src,
  name,
  title
}: {
  src: string
  name?: string
  title: string
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Image boxSize="168px" src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Tag mt={2} size={"lg"} variant="solid" colorScheme="green">
          <TagLabel>{title}</TagLabel>
        </Tag>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} px={5}>
      <Container maxW={"8xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            align={"center"}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text as={"span"}>Pensado para múltiples clientes y servicios</Text>
          </Heading>
        </Stack>
        <Flex wrap={"wrap"} direction={"row"} justify="center" align="center">
          <Use>
            <UseAvatar src={"assets/img/factory.svg"} title={"Empresas"} />
          </Use>
          <Use>
            <UseAvatar src={"assets/img/school.svg"} title={"Colegios"} />
          </Use>
          <Use>
            <UseAvatar src={"assets/img/hospital.svg"} title={"Hospitales"} />
          </Use>
          <Use>
            <UseAvatar src={"assets/img/insitu.svg"} title={"Comedores"} />
          </Use>
        </Flex>
      </Container>
    </Box>
  )
}
