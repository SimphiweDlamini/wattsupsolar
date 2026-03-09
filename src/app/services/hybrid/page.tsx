"use client";

import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import {
  Link as ChakraLink,
  Container,
  VStack,
  Heading,
  Button,
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
      <Container maxW="container.md" textAlign="center" pb={24}>
        <VStack
          gap={6}
          p={10}
          bg="white"
          rounded="2xl"
          shadow="md"
          border="1px solid"
          borderColor="cyan.100"
        >
          <Heading size="md">Interested to work with us?</Heading>
          <ChakraLink
            as={NextLink}
            href="/contact"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              bg="#4caf50"
              color="white"
              size="lg"
              px={10}
              _hover={{ bg: "#83c5be" }}
            >
              Contact Us
            </Button>
          </ChakraLink>
        </VStack>
      </Container>
    </>
  );
}
