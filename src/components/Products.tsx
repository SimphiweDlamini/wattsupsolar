"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from "@chakra-ui/react";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const products = [
  {
    title: "Solar Pumps",
    image: "/SolarPump.png",
    description:
      "Reliable water pumping solutions for irrigation and livestock. Our solar pumps harness the sun's energy to provide a consistent water supply without the ongoing costs of diesel or grid electricity.",
  },
  {
    title: "Off Grid Systems",
    image: "/OffGrid.jpg",
    description:
      "Designed to generate electricity independently from the grid, providing power to your home, cabin, or other remote locations.",
  },
  {
    title: "Hybrid Systems",
    image: "/Hybrid.jpg",
    description:
      "Designed to provide flexibility and energy independence. Hybrid systems integrate solar power with your normal energy supply to optimize energy production, improve reliability, and enhance system efficiency.",
  },
  {
    title: "Solar PV Geyser Systems",
    image: "/SolarPV.jpg",
    description:
      "Retrofit your existing geyser to run on solar power. A cost-effective way to heat water using PV panels, significantly reducing your monthly electricity bill while ensuring hot water during load shedding.",
  },
];

export default function Products() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <VStack mb={16} gap={4}>
          <Heading
            textAlign="center"
            fontFamily="'Outfit', sans-serif"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            <Box as="span" color="cyan.500">
              Our Products
            </Box>
          </Heading>
          <Box w="150px" h="4px" bg="cyan.400" borderRadius="full" />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {products.map((product, index) => (
            <Box
              key={index}
              rounded="2xl"
              shadow="sm"
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-10px)",
                shadow: "xl",
                borderColor: "cyan.200",
              }}
            >
              {/* 1. Image at the top, no padding around it */}
              <Box h={{ base: "300px", md: "400px" }} overflow="hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Box>

              {/* 2. Text Content inside a padded box */}
              <Box p={8}>
                <Heading
                  size="md"
                  mb={4}
                  fontFamily="'Outfit', sans-serif"
                  fontWeight="700"
                >
                  {product.title}
                </Heading>
                <Text
                  fontFamily="'Lexend', sans-serif"
                  color="gray.600"
                  lineHeight="tall"
                >
                  {product.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
