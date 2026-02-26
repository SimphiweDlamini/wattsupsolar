"use client";

import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
];

const logoUrl = "/WattsUpSolarBanner2-removebg.png";

export default function Navbar() {
  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex py={3} align="center" justify="space-between">
          {/* Logo Section */}
          <Link href="/" passHref>
            <Image
              src={logoUrl}
              alt="Watts Up Solar Logo"
              height={{ base: "40px", md: "50px" }}
              cursor="pointer"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.02)" }}
            />
          </Link>

          {/* Desktop Menu */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} passHref>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  fontFamily="'Outfit', sans-serif"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color="gray.700"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ color: "cyan.500" }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}

            {/* Call to Action Button */}
            <Link href="/contact" passHref>
              <Button
                bg="cyan.500"
                color="white"
                px={8}
                rounded="full"
                fontSize="xs"
                fontWeight="700"
                fontFamily="'Outfit', sans-serif"
                _hover={{
                  bg: "cyan.600",
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>

          {/* Mobile Menu Icon */}
          <Box
            display={{ base: "block", md: "none" }}
            fontSize="2xl"
            cursor="pointer"
          >
            ☰
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
