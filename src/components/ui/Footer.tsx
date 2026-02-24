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
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Watts Up Solar
        </Text>

        <Flex gap="8" direction={{ base: "column", md: "row" }}>
          <Flex direction="column" gap="2">
            <Text fontWeight="semibold">Company</Text>
            <Link
              href="/about"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              href="/services"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              Services
            </Link>
          </Flex>

          <Flex direction="column" gap="2">
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              style={{ color: "whiteAlpha.800", textDecoration: "none" }}
            >
              Terms
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
