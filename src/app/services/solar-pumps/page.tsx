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

const pumpProjects: Project[] = [
  {
    title: "Agricultural Irrigation Setup",
    location: "Malkerns, Eswatini",
    description:
      "A high-flow solar pumping solution designed for crop irrigation, reducing the farm's reliance on expensive diesel generators.",
    image: "/SolarPump.png",
    type: "Solar Pump",
    sector: "Commercial",
    stats: "Submersible Pump, 120m Depth",
  },
  {
    title: "Livestock Watering System",
    location: "Shiselweni, Eswatini",
    description:
      "Automated water supply for livestock using solar energy, ensuring consistent water access even in remote grazing areas.",
    image: "/pic11.jpeg", // Reusing a project image as a placeholder
    type: "Solar Pump",
    sector: "Industrial",
    stats: "DC Solar Pump, 5000L/day",
  },
];

export default function SolarPumpsPage() {
  return (
    <>
      <ServicePageTemplate
        serviceTitle="Solar"
        highlightWord="Pumps"
        description="Sustainable water solutions for agriculture and livestock. Harness the sun to move water without fuel costs or grid reliance."
        projects={pumpProjects}
      />
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
