"use client";

import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const logoUrl = "/WattsLogo-removebg.png";

export default function Footer() {
  return (
    <Box bg="gray.900" color="white" py="12">
      <Flex
        maxW="6xl"
        mx="auto"
        px="4"
        direction={{ base: "column", md: "row" }}
        gap="2"
        align="start"
        justify="space-evenly"
      >
        <VStack align="start" gap="2">
          <Link href="/contact">
            <Text
              fontSize="xl"
              fontWeight="bold"
              mb="2"
              fontFamily="'Outfit', sans-serif"
              _hover={{ color: "cyan.400" }}
            >
              Connect With Us
            </Text>
          </Link>
          <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
            Plot 256/7 Villiers St
          </Text>
        </VStack>
        <Flex
          gap={{ base: "8", lg: "16" }}
          direction={{ base: "column", md: "row" }}
          align="start"
          justify="flex-end"
        >
          <VStack align="start" gap="1">
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              +268 2505 6492
            </Text>
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              +268 7943 2185
            </Text>
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              +268 7903 2869
            </Text>
          </VStack>

          <VStack align="start" gap="1">
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              office@wattsupsolar.co.sz
            </Text>
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              business@wattsupsolar.co.sz
            </Text>
            <Text color="whiteAlpha.800" fontFamily="'Lexend', sans-serif">
              marketing@wattsupsolar.co.sz
            </Text>
          </VStack>

          <Box>
            <Image
              src={logoUrl}
              alt="Watts Up Solar Logo"
              maxH="100px"
              maxW="200px"
              objectFit="contain"
              filter="brightness(1.1)"
            />
          </Box>
        </Flex>
      </Flex>

      <Flex direction="row" justifySelf="center" gap={10}>
        <a href="https://www.facebook.com/wattsupsolarsz/">
          <FaFacebook size={30} />
        </a>

        <a href="https://www.instagram.com/wattsupsolar8/">
          <FaInstagram size={30} />
        </a>
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
        <Text
          fontSize="sm"
          color="whiteAlpha.600"
          fontFamily="'Lexend', sans-serif"
        >
          &copy; {new Date().getFullYear()} Watts Up Solar. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
