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
import Link from "next/link"; // Use Next.js Link for better performance

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const services = [
  {
    title: "Solar Pumps",
    path: "solar-pumps",
    image: "/SolarPump.png",
    description:
      "Reliable water pumping solutions for irrigation and livestock. Our solar pumps harness the sun's energy to provide a consistent water supply.",
  },
  {
    title: "Off Grid Systems",
    path: "off-grid",
    image: "/OffGrid.jpg",
    description:
      "Designed to generate electricity independently from the grid, providing power to your home, cabin, or other remote locations.",
  },
  {
    title: "Hybrid Systems",
    path: "hybrid",
    image: "/Hybrid.jpg",
    description:
      "Designed to provide flexibility and energy independence. Hybrid systems integrate solar power with your normal energy supply.",
  },
  {
    title: "Solar PV Geyser Systems",
    path: "solarpv",
    image: "/SolarPV.jpg",
    description:
      "Retrofit your existing geyser to run on solar power. A cost-effective way to heat water using PV panels, reducing electricity bills.",
  },
];

export default function Services() {
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
              Our Services
            </Box>
          </Heading>
          <Box w="150px" h="4px" bg="cyan.400" borderRadius="full" />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.path}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Box
                rounded="2xl"
                shadow="sm"
                bg="white"
                border="1px solid"
                borderColor="gray.100"
                overflow="hidden"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  shadow: "xl",
                  borderColor: "cyan.200",
                }}
              >
                <Box h={{ base: "300px", md: "400px" }} overflow="hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Box>

                <Box p={8}>
                  <Heading
                    size="md"
                    mb={4}
                    fontFamily="'Outfit', sans-serif"
                    fontWeight="700"
                  >
                    {service.title}
                  </Heading>
                  <Text
                    fontFamily="'Lexend', sans-serif"
                    color="gray.600"
                    lineHeight="tall"
                  >
                    {service.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
