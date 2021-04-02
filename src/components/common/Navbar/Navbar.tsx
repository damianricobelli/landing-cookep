import Link from "next/link"
import {
  Box,
  Flex,
  IconButton,
  Heading,
  Stack,
  Text,
  Collapse,
  Link as ChakraLink,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Heading
              style={{ cursor: "pointer" }}
              mt={{ base: 0, md: 2 }}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={"purple.600"}
            >
              Cookep
            </Heading>
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10} mt={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const handleScroll = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.label === "Opiniones" ? (
            <Text
              py={4}
              px={8}
              mb={2}
              fontSize={"sm"}
              fontWeight={500}
              _hover={{
                cursor: "pointer"
              }}
              color={useColorModeValue("gray.600", "gray.200")}
              onClick={() => handleScroll()}
            >
              {navItem.label}
            </Text>
          ) : (
            <Link href={navItem.href}>
              <ChakraLink>
                <Text
                  p={4}
                  px={8}
                  mb={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  _hover={{
                    textDecoration: "none"
                  }}
                  color={useColorModeValue("gray.600", "gray.200")}
                >
                  {navItem.label}
                </Text>
              </ChakraLink>
            </Link>
          )}
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} py={2} onClick={onToggle}>
      <Flex
        py={2}
        href={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none"
        }}
      >
        {label === "Repository" ? (
          <ChakraLink
            isExternal
            href="https://github.com/damianricobelli/covid-19"
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </ChakraLink>
        ) : (
          <Link href={href}>
            <ChakraLink
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {label}
            </ChakraLink>
          </Link>
        )}
      </Flex>
    </Stack>
  )
}

interface NavItem {
  label: string
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Opiniones",
    href: ""
  }
]
