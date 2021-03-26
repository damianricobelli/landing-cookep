import { Box, Text, Flex, useColorModeValue, Heading } from "@chakra-ui/react"

export default function LargeWithLogoCentered() {
  const date = new Date().getFullYear()
  return (
    <Box
      pt={10}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8
          }}
        >
          <Heading style={{ cursor: "pointer" }} color={"purple.600"}>
            Cookep
          </Heading>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {date} Cookep Company. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
