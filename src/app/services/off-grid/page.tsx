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

const offGridProjects: Project[] = [
  {
    title: "6kW Off-Grid Barge System",
    location: "Vakasha Lodge, Eswatini",
    description:
      "Independent power generation for luxury guest amenities on a floating barge.",
    image: "/pic13.jpg",
    type: "Off-Grid",
    sector: "Commercial",
    stats: "6kW Off-Grid, Battery Storage",
  },
];

export default function OffGridPage() {
  return (
    <>
      <ServicePageTemplate
        serviceTitle="Off-Grid"
        highlightWord="Solutions"
        description="Reliable power anywhere, completely independent of the national grid."
        projects={offGridProjects}
      />
      <Box bg="gray.50" py={20}>
        <Container mt={0} maxW="container.md" textAlign="center" pb={24}>
          <VStack
            gap={6}
            p={10}
            bg="white"
            rounded="2xl"
            shadow="md"
            border="1px solid"
            borderColor="cyan.100"
          >
            <Heading color="black" size="md">
              Want total energy independence?
            </Heading>

            <Text color="gray.600" fontFamily="'Lexend', sans-serif">
              Whether you are in a remote area or simply want to walk away from
              the grid entirely, we design robust systems that keep your lights
              on 24/7.
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
