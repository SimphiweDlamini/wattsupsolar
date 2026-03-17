"use client";

import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import {
  Link as ChakraLink,
  Container,
  VStack,
  Heading,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";

const hybridProjects: Project[] = [
  {
    title: "40kW Peace Corps Solar Installation",
    location: "Mbabane, Eswatini",
    description:
      "A high-capacity solution featuring an ATESS HPS30 hybrid system for uninterrupted facility power.",
    image: "/pic14.jpg",
    type: "Hybrid",
    sector: "NGO", // Custom sector
    stats: "33kW Hybrid, ATESS Inverter",
  },
];

export default function HybridPage() {
  return (
    <>
      <ServicePageTemplate
        serviceTitle="Hybrid"
        highlightWord="Systems"
        description="Optimizing energy by blending solar power with the utility grid."
        projects={hybridProjects}
      />
      <Box bg="gray.50" py={20}>
        <Container maxW="container.md" textAlign="center" mt={0} pb={24}>
          <VStack
            p={10}
            bg="white"
            rounded="2xl"
            shadow="md"
            border="1px solid"
            borderColor="gray.100"
            gap={6}
          >
            <Heading
              size="md"
              fontFamily="'Outfit', sans-serif"
              color="gray.800"
            >
              Interested to work with us?
            </Heading>

            <Text color="gray.600" fontFamily="'Lexend', sans-serif">
              Whether you're looking for a residential backup or a large-scale
              commercial setup, our team is ready to help you switch to clean
              energy.
            </Text>

            <NextLink href="/contact" passHref>
              <Button
                bg="#4caf50"
                color="white"
                size="lg"
                px={10}
                _hover={{ bg: "#3d8b40" }} // Slightly darker green for a better hover effect
              >
                Contact Us
              </Button>
            </NextLink>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
