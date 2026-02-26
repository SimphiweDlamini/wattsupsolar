import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="gray.900" color="white" py="12">
      <Flex
        maxW="6xl"
        mx="auto"
        px="4"
        direction={{ base: "column", md: "row" }}
        gap="8"
        align="start"
      >
        <Flex direction="column" gap="2">
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Connect With Us
          </Text>
          <Link
            href="/about"
            style={{ color: "whiteAlpha.800", textDecoration: "none" }}
          >
            Plot 256/7 Villiers St
          </Link>
        </Flex>

        <Flex gap="8" direction={{ base: "column", md: "row" }}>
          <Flex direction="column" gap="2">
            <Link
              href="/services"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              +268 2505 6492
            </Link>
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              +268 7943 2185
            </Link>
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              +268 7903 2869
            </Link>
          </Flex>

          <Flex direction="column" gap="2">
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              office@wattsupsolar.co.sz
            </Link>
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              business@wattsupsolar.co.sz
            </Link>
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              marketing@wattsupsolar.co.sz
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        maxW="6xl"
        mx="auto"
        px="4"
        pt="12"
        borderTop="1px"
        borderColor="whiteAlpha.300"
        mt="12"
        justify="center"
      >
        <Text fontSize="sm" color="whiteAlpha.600">
          &copy; {new Date().getFullYear()} Watts Up Solar. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
