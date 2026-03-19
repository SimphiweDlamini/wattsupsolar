"use client";

import ServiceTemplatePage from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import { Box } from "@chakra-ui/react";
import { SavingsComparison } from "./SavingsComparison";
import { SolutionCTA } from "@/components/SolutionCTA";

const geyserProjects: Project[] = [
  {
    title: "Residential Hot Water Retrofit",
    location: "Manzini, Eswatini",
    description:
      "Conversion of a standard electric geyser to a PV-powered system, allowing the family to maintain hot water throughout load-shedding events and grid failures.",
    image: "/SolarPV.jpg",
    type: "PV Geyser",
    sector: "Residential",
    stats: "3 x 550W Tier 1 Panels",
  },
  {
    title: "Eco-Lodge Geyser Upgrade",
    location: "Ezulwini, Eswatini",
    description:
      "Scaling hot water production for guest rooms using a centralized Solar PV heating array to minimize monthly utility overheads and carbon footprint.",
    image: "/pic15.jpeg",
    type: "PV Geyser",
    sector: "Commercial",
    stats: "Multi-unit Retrofit, DC Heating Elements",
  },
];

export default function GeysersPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. Blueprint Service Template */}
      <ServiceTemplatePage
        serviceTitle="Solar PV"
        highlightWord="Geysers"
        description="The most cost-effective way to heat water. Convert your existing geyser to run on solar panels and save up to 40% on your total electricity bill."
        projects={geyserProjects}
      />

      {/* 2. Technical Savings Comparison Table */}
      <SavingsComparison />

      {/* 3. High-Definition Contact CTA */}
      <SolutionCTA
        title="Tired of high geyser bills?"
        description="Water heating is typically the largest energy expense in any home. Retrofit your existing geyser with our Solar PV solution and eliminate that cost from day one."
      />
    </Box>
  );
}
