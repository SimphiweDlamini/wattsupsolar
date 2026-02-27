"use client";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

import React from "react";
import {
  Box,
  Heading,
  Image,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";

const aboutImage = "/about.jpg";

const AboutPage = () => {
  return (
    <>
      {/* 1. Hero Header */}
      <Box
        py={{ base: 20, md: 32 }}
        bg="gray.900" // Dark background for a premium feel
        color="white"
        textAlign="center"
      >
        <Container maxW="container.lg">
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontFamily="'Outfit', sans-serif"
            fontWeight="700"
            mb={4}
          >
            Powering{" "}
            <Box as="span" color="cyan.400">
              Eswatini's
            </Box>{" "}
            Future
          </Heading>
          <Text
            fontFamily="'Lexend', sans-serif"
            fontSize="lg"
            color="whiteAlpha.800"
            maxW="2xl"
            mx="auto"
          >
            Watts Up Solar is dedicated to providing sustainable, reliable, and
            affordable energy solutions across the Kingdom.
          </Text>
        </Container>
      </Box>

      {/* 2. Main Content Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={12}
            align="center"
          >
            {/* Image Side */}
            <Box flex="1" position="relative">
              {/* Decorative background element */}
              <Box
                position="absolute"
                top="-20px"
                left="-20px"
                w="100px"
                h="100px"
                bg="cyan.50"
                rounded="full"
                zIndex={0}
              />
              <Image
                src={aboutImage}
                alt="About Watts Up Solar"
                rounded="2xl"
                shadow="2xl"
                objectFit="cover"
                h={{ base: "300px", md: "500px" }}
                w="100%"
                position="relative"
                zIndex={1}
              />
            </Box>

            {/* Text Side */}
            <VStack flex="1" align="start" gap={6}>
              <Heading
                fontFamily="'Outfit', sans-serif"
                size="xl"
                color="gray.800"
              >
                Our Mission
              </Heading>
              <Text
                fontFamily="'Lexend', sans-serif"
                fontSize="md"
                color="gray.600"
                lineHeight="tall"
              >
                At Watts Up Solar, we believe that energy independence shouldn't
                be a luxury. Whether it's a small residential geyser system or a
                large scale agricultural pump, we bring world-class solar
                technology to the local Eswatini market.
              </Text>
              <Text
                fontFamily="'Lexend', sans-serif"
                fontSize="md"
                color="gray.600"
                lineHeight="tall"
              >
                Our team has designed and installed over{" "}
                <strong color="gray.600">One Hundred</strong> residential and
                commercial photovoltaic installations and is a trusted source
                for helping residents and business owners to become energy
                independent with beautiful custom solar designs.
              </Text>
              <Text
                fontFamily="'Lexend', sans-serif"
                fontSize="md"
                color="gray.600"
                lineHeight="tall"
              >
                Our team focuses on long-term reliability. We don't just install
                panels; we design energy ecosystems that save you money and
                protect the environment for generations to come.
              </Text>

              {/* Small "Stats" or Highlights */}
              <SimpleGrid columns={2} gap={8} pt={4} w="100%">
                <Box borderLeft="4px solid" borderColor="cyan.400" pl={4}>
                  <Text fontWeight="bold" fontSize="2xl" color="gray.800">
                    100%
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Clean Energy
                  </Text>
                </Box>
                <Box borderLeft="4px solid" borderColor="cyan.400" pl={4}>
                  <Text fontWeight="bold" fontSize="2xl" color="gray.800">
                    Local
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Expert Support
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
