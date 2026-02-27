"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Badge,
  Link,
  Button,
} from "@chakra-ui/react";

// This is where you can easily add more projects in the future
const projects = [
  {
    title: "15kW Solar PV System",
    location: "Broadcasting Station",
    description:
      "Our Team successfully installed a high-capacity 15kW Solar Photovoltaic (PV) system designed to provide uninterrupted power for critical broadcasting equipment.",
    image: "/pic11.jpeg",
    type: "Commercial",
    stats: "15kW Peak",
  },
  {
    title: "6kW Off-Grid Barge System",
    location: "Vakasha Lodge, Eswatini",
    description:
      "A unique engineering feat: installing a fully independent 6kW off-grid system on a floating barge to power luxury guest amenities.",
    image: "/pic13.jpg",
    type: "Off-Grid",
    stats: "6kW Off-Grid",
  },
];

export default function PortfolioPage() {
  return (
    <Box bg="gray.50" minH="100vh" pb={20}>
      {/* 1. Header Area */}
      <Box py={24} bg="gray.900" color="white" textAlign="center">
        <Container maxW="container.lg">
          <VStack gap={4}>
            <Badge bg="cyan.500" color="white" px={3} rounded="full">
              Our Work
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontFamily="'Outfit', sans-serif"
            >
              Project{" "}
              <Box as="span" color="cyan.400">
                Showcase
              </Box>
            </Heading>
            <Text
              fontSize="lg"
              color="gray.400"
              maxW="600px"
              fontFamily="'Lexend', sans-serif"
            >
              Explore how Watts Up Solar is powering Eswatini, Through various
              types of projects meeting all different types of requirements for
              each client.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* 2. Projects Grid */}
      <Container maxW="container.xl" py={16} mt={-10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              rounded="2xl"
              overflow="hidden"
              shadow="xl"
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
            >
              {/* Image Placeholder */}
              <Box h="300px" bg="gray.200" position="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg="cyan.500"
                  color="white"
                  px={3}
                  py={1}
                  rounded="lg"
                >
                  {project.type}
                </Badge>
              </Box>

              {/* Text Content */}
              <VStack align="start" p={8} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="cyan.600" mb={1}>
                    {project.location}
                  </Text>
                  <Heading size="lg" fontFamily="'Outfit', sans-serif">
                    {project.title}
                  </Heading>
                </Box>

                <Text color="gray.600" fontFamily="'Lexend', sans-serif">
                  {project.description}
                </Text>

                <Box
                  w="full"
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.100"
                >
                  <Text fontWeight="bold" fontSize="sm">
                    Technical Scope: {project.stats}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* 3. Call to Action */}
      <Container maxW="container.md" textAlign="center" mt={10}>
        <VStack
          gap={6}
          p={10}
          bg="white"
          rounded="2xl"
          shadow="md"
          border="1px solid"
          borderColor="cyan.100"
        >
          <Heading size="md">Have a similar project in mind?</Heading>
          <Link href="/contact" _hover={{ textDecoration: "none" }}>
            <Button
              bg="cyan.500"
              color="white"
              size="lg"
              px={10}
              _hover={{ bg: "cyan.600" }}
            >
              Message Us
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}
