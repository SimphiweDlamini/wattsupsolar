"use client";

import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Container,
  Icon,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const logoUrl = "/WattsUpSolarBanner_Orange.png";
const MotionBox = motion(Box);

export default function Footer() {
  return (
    <Box
      bg="gray.900"
      color="white"
      pt="20"
      pb="10"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background glow to match the rest of the site */}
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        bg="green.900"
        borderRadius="full"
        filter="blur(120px)"
        opacity="0.3"
        zIndex={0}
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={12} mb={16}>
          {/* COLUMN 1: Brand & Socials */}
          <VStack align="start" gap={6}>
            <Image
              src={logoUrl}
              alt="Watts Up Solar Logo"
              maxH="80px"
              filter="brightness(1.2)"
            />
            <Text
              color="gray.400"
              fontFamily="'Lexend', sans-serif"
              fontSize="sm"
              lineHeight="tall"
            >
              Powering Eswatini's future with sustainable, high-performance
              solar solutions. From Manzini to the rest of the nation, we bring
              the sun to your doorstep.
            </Text>
            <HStack gap={5}>
              {[
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/wattsupsolarsz/",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/solarwatts2026",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/26879432185",
                },
              ].map((social, i) => (
                <MotionBox
                  key={i}
                  whileHover={{ y: -5, color: "#06d00c" }}
                  cursor="pointer"
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={social.icon} boxSize={6} />
                  </a>
                </MotionBox>
              ))}
            </HStack>
          </VStack>

          {/* COLUMN 2: Contact Details */}
          <VStack align="start" gap={6}>
            <Heading
              size="md"
              fontFamily="'Outfit', sans-serif"
              color="#06d00c"
            >
              Contact Us
            </Heading>
            <VStack
              align="start"
              gap={4}
              color="gray.300"
              fontFamily="'Lexend', sans-serif"
              fontSize="sm"
            >
              <HStack align="start" gap={3}>
                <Icon as={FaMapMarkerAlt} color="#06d00c" mt={1} />
                <Text>Plot 256/7 Villiers St, Manzini, Eswatini</Text>
              </HStack>
              <HStack align="start" gap={3}>
                <Icon as={FaPhone} color="#06d00c" mt={1} rotate="90deg" />
                <VStack align="start" gap={0}>
                  <Text>+268 2505 6492</Text>
                  <Text>+268 7903 2869</Text>
                  <Text>+268 7943 2185</Text>
                </VStack>
              </HStack>
              <HStack align="start" gap={3}>
                <Icon as={FaEnvelope} color="#06d00c" mt={1} />
                <VStack align="start" gap={0}>
                  <Text>office@wattsupsolar.co.sz</Text>
                  <Text>business@wattsupsolar.co.sz</Text>
                  <Text>marketing@wattsupsolar.co.sz</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          {/* COLUMN 3: Live Map Section */}
          <VStack align="start" gap={6}>
            <Heading
              size="md"
              fontFamily="'Outfit', sans-serif"
              color="#06d00c"
            >
              Our Location
            </Heading>
            <Box
              w="100%"
              h="200px"
              rounded="2xl"
              overflow="hidden"
              border="2px solid"
              borderColor="whiteAlpha.200"
              transition="all 0.3s"
              _hover={{ borderColor: "#06d00c" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d451.00352077123034!2d31.37743390333654!3d-26.501558171628783!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1773821949340!5m2!1sen!2szmhttps://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d451.00352077123034!2d31.37743390333654!3d-26.501558171628783!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1773821949340!5m2!1sen!2szm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </Box>
          </VStack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Flex
          pt={10}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          justify="center"
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={4}
        >
          <Text
            fontSize="xs"
            color="gray.500"
            fontFamily="'Lexend', sans-serif"
          >
            &copy; {new Date().getFullYear()} Watts Up Solar. All rights
            reserved.
          </Text>
          {/* <HStack
            gap={6}
            fontSize="xs"
            color="gray.500"
            fontFamily="'Lexend', sans-serif"
          >
            <Link href="/privacy">
              <Text _hover={{ color: "white" }}>Privacy Policy</Text>
            </Link>
            <Link href="/terms">
              <Text _hover={{ color: "white" }}>Terms of Service</Text>
            </Link>
          </HStack> */}
        </Flex>
      </Container>
    </Box>
  );
}
