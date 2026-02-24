"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 6, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Link href="/">
          <Text fontSize="xl" fontWeight="bold" color="blue.500">
            Watts Up Solar
          </Text>
        </Link>

        {/* Desktop Menu */}
        <Flex gap={8} display={{ base: "none", md: "flex" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </Flex>

        {/* Mobile menu button - add later */}
        <Text display={{ base: "block", md: "none" }}>☰</Text>
      </Flex>
    </Box>
  );
}
