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
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Project } from "@/components/types/project";

interface ServicePageProps {
  serviceTitle: string;
  highlightWord: string;
  description: string;
  projects: Project[];
}

export default function ServiceTemplatePage({
  serviceTitle,
  highlightWord,
  description,
  projects,
}: ServicePageProps) {
  return (
    <Box bg="gray.50" minH="100vh" pb={20}>
      {/* Header Section */}
      <Box py={24} bg="gray.900" color="white" textAlign="center">
        <Container maxW="container.lg">
          <VStack gap={4}>
            <Badge bg="#4caf50" color="white" px={3} rounded="full">
              Our Services
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontFamily="'Outfit', sans-serif"
            >
              {serviceTitle}{" "}
              <Box as="span" color="#06d00c">
                {highlightWord}
              </Box>
            </Heading>
            <Text
              fontSize="lg"
              color="gray.400"
              maxW="600px"
              fontFamily="'Lexend', sans-serif"
            >
              {description}
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxW="container.xl" py={16} mt={-10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              rounded="2xl"
              overflow="hidden"
              shadow="xl"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
            >
              <Box h="300px" position="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />

                {/* Two Badges Logic */}
                <HStack position="absolute" top={4} right={4} gap={2}>
                  <Badge bg="gray.800" color="white" px={3} py={1} rounded="md">
                    {project.sector}
                  </Badge>
                  <Badge bg="#4caf50" color="white" px={3} py={1} rounded="md">
                    {project.type}
                  </Badge>
                </HStack>
              </Box>

              <VStack align="start" p={8} gap={4}>
                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="#06d00c" mb={1}>
                    {project.location}
                  </Text>
                  <Heading size="lg" fontFamily="'Outfit', sans-serif">
                    {project.title}
                  </Heading>
                </Box>
                <Text
                  color="gray.600"
                  fontFamily="'Lexend', sans-serif"
                  lineHeight="tall"
                >
                  {project.description}
                </Text>
                <Box
                  w="full"
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.100"
                >
                  <Text fontWeight="bold" fontSize="sm" color="gray.700">
                    Technical Scope: {project.stats}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
