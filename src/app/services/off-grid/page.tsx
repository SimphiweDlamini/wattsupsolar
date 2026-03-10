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
      <Container bgColor="white" maxW="container.md" textAlign="center" pb={24}>
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
            Interested to work with us?
          </Heading>
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
