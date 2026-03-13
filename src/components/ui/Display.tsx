"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

export default function Display() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background element for a "cool" professional touch */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        bg="green.50"
        borderRadius="full"
        filter="blur(80px)"
        opacity="0.5"
        zIndex={0}
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex direction="column" gap={12}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 8, md: 16 }}
            alignItems="center"
          >
            {/* Left Side: Large Impact Text */}
            <VStack align="flex-start" gap={6}>
              <Heading
                fontFamily="'Outfit', sans-serif"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.2"
                color="gray.800"
              >
                Sustainable Energy <br />
                <Box as="span" color="#06d00c">
                  for eSwatini.
                </Box>
              </Heading>

              <Box w="80px" h="6px" bg="#4caf50" borderRadius="full" />

              <Text
                fontFamily="'Lexend', sans-serif"
                fontSize="lg"
                fontWeight="600"
                color="gray.700"
              >
                From Solar Home Systems to commercial and agricultural systems.
              </Text>
            </VStack>

            {/* Right Side: Detailed Body Text */}
            <Box>
              <Text
                fontFamily="'Lexend', sans-serif"
                color="gray.600"
                fontSize="md"
                lineHeight="tall"
              >
                By combining world-class solar technology with local expertise
                and a rich history of electrical engineering contracting for all
                types of Swati installations and distribution systems, we bring
                clean, efficient solar energy to homes and businesses across
                eSwatini.
              </Text>
              <Text
                fontFamily="'Lexend', sans-serif"
                color="gray.600"
                fontSize="md"
                lineHeight="tall"
                mt={4}
              >
                Our team has designed and installed over{" "}
                <Box as="span" color="black" fontWeight="extrabold">
                  One Hundred
                </Box>{" "}
                residential and commercial photovoltaic installations and is a
                trusted source for helping residents and business owners to
                become energy independent with beautiful custom solar designs.
              </Text>
            </Box>
          </SimpleGrid>

          {/* Bottom Stat Bar: Makes the 100+ installations pop */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            py={10}
            borderTop="1px solid"
            borderColor="gray.100"
            textAlign="center"
            bg="#deeef4"
          >
            <VStack py={4}>
              <Heading color="#06d00c" size="xl">
                100+
              </Heading>
              <Text
                fontFamily="'Outfit', sans-serif"
                fontWeight="700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Installations
              </Text>
            </VStack>

            <VStack
              py={4}
              borderLeft={{ md: "1px solid" }}
              borderRight={{ md: "1px solid" }}
              borderColor="gray.100"
            >
              <Heading color="#06d00c" size="xl">
                Local
              </Heading>
              <Text
                fontFamily="'Outfit', sans-serif"
                fontWeight="700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Expertise
              </Text>
            </VStack>

            <VStack py={4}>
              <Heading color="#06d00c" size="xl">
                Custom
              </Heading>
              <Text
                fontFamily="'Outfit', sans-serif"
                fontWeight="700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Solar Designs
              </Text>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
