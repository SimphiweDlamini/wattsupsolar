"use client";

import ServiceTemplatePage from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import { Box } from "@chakra-ui/react";
import { IndependenceGrid } from "./IndependenceGrid";
import { SolutionCTA } from "@/components/SolutionCTA";

const offGridProjects: Project[] = [
  {
    title: "6kW Off-Grid Barge System",
    location: "Vakasha Lodge, Eswatini",
    description:
      "Independent power generation for luxury guest amenities on a floating barge. Designed to handle peak loads in a sensitive eco-environment.",
    image: "/pic13.jpg",
    type: "Off-Grid",
    sector: "Commercial",
    stats: "6kW Off-Grid, 15kWh Battery Storage",
  },
];

export default function OffGridPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. Updated Blueprint Template */}
      <ServiceTemplatePage
        serviceTitle="Off-Grid"
        highlightWord="Solutions"
        description="Reliable power anywhere, completely independent of the national grid. We build systems designed for 100% autonomy in the most remote locations."
        projects={offGridProjects}
      />

      {/* 2. Technical Feature Grid */}
      <IndependenceGrid />

      {/* 3. New High-Impact Contact Section */}
      <SolutionCTA
        title="Want total energy independence?"
        description="Whether you are in a remote area or simply want to walk away from the grid entirely, we design robust systems that keep your lights on 24/7."
      />
    </Box>
  );
}
