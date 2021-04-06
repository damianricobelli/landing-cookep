import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IconButton, Link, Box, Fade } from "@chakra-ui/react"

interface WhatsappButtonProps {
  show: boolean
}

export const WhatsappButton: React.FC<WhatsappButtonProps> = ({ show }) => {
  return (
    <Fade in={show}>
      <Box display={show ? "block" : "none"}>
        <Link
          isExternal
          href={
            "https://api.whatsapp.com/send?phone=543413610556&text=%C2%A1Hola!%20Acabo%20de%20revisar%20su%20web%20y%20me%20gustar%C3%ADa%20probar%20Cookep"
          }
          _hover={{
            textDecoration: "none"
          }}
        >
          <IconButton
            aria-label="Send message"
            position={"fixed"}
            bottom={10}
            right={10}
            rounded={"full"}
            icon={<FaWhatsapp />}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            color={"white"}
            colorScheme={"whatsapp"}
            _hover={{ bg: "green.600" }}
          ></IconButton>
        </Link>
      </Box>
    </Fade>
  )
}
