"use client";

import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import {
  Link as ChakraLink,
  Container,
  VStack,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const gridTiedProjects: Project[] = [
  {
    title: "Commercial Office Retrofit",
    location: "Ezulwini, Eswatini",
    description:
      "A large-scale grid-tied installation for a corporate office, designed to offset 70% of daytime energy consumption.",
    image: "/pic1.jpeg",
    type: "Grid-Tied",
    sector: "Commercial",
    stats: "50kW Inverter, 80 Panels",
  },
  {
    title: "Residential Savings Setup",
    location: "Manzini, Eswatini",
    description:
      "A battery-less system focused entirely on reducing monthly utility costs by utilizing solar power directly during the day.",
    image: "/pic5.jpeg",
    type: "Grid-Tied",
    sector: "Residential",
    stats: "5kVA Grid-Tied Inverter",
  },
];

export default function GridTiedPage() {
  return (
    <Box bg="gray.50">
      <ServicePageTemplate
        serviceTitle="Grid-Tied"
        highlightWord="Systems"
        description="The most cost-effective way to lower your electricity bill. Use solar power while the sun shines and seamlessly switch to the grid at night."
        projects={gridTiedProjects}
      />

      {/* Space-fixed Container for the Contact section */}
      <Container maxW="container.md" textAlign="center" mt={0} pb={24}>
        <VStack
          p={10}
          bg="white"
          rounded="2xl"
          shadow="md"
          border="1px solid"
          borderColor="gray.100"
        >
          <Heading size="md" fontFamily="'Outfit', sans-serif" color="gray.800">
            Ready to lower your bills?
          </Heading>
          <Text color="gray.600" py={4} fontFamily="'Lexend', sans-serif">
            Grid-tied systems are perfect for businesses and homes with high
            daytime energy use. Contact us for a consultation.
          </Text>
          <NextLink href="/contact" passHref>
            <Button
              bg="#4caf50"
              color="white"
              size="lg"
              px={10}
              _hover={{ bg: "#83c5be" }}
            >
              Get in Touch
            </Button>
          </NextLink>
        </VStack>
      </Container>
    </Box>
  );
}
