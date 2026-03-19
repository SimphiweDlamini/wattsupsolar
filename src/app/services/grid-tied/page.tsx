"use client";

import ServiceTemplatePage from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import { Box } from "@chakra-ui/react";
import { GridTiedStats } from "./GridTiedStats";
import { SolutionCTA } from "@/components/SolutionCTA";

const gridTiedProjects: Project[] = [
  {
    title: "Commercial Office Retrofit",
    location: "Ezulwini, Eswatini",
    description:
      "A large-scale grid-tied installation for a corporate office, designed to offset 70% of daytime energy consumption and drastically reduce peak-demand charges.",
    image: "/pic1.jpeg",
    type: "Grid-Tied",
    sector: "Commercial",
    stats: "50kW Inverter, 80 Tier-1 Panels",
  },
  {
    title: "Residential Savings Setup",
    location: "Manzini, Eswatini",
    description:
      "A battery-less system focused entirely on aggressive utility cost reduction by utilizing solar power directly for household appliances during daylight hours.",
    image: "/pic5.jpeg",
    type: "Grid-Tied",
    sector: "Residential",
    stats: "5kVA Grid-Tied Inverter",
  },
];

export default function GridTiedPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. Industrial Blueprint Template */}
      <ServiceTemplatePage
        serviceTitle="Grid-Tied"
        highlightWord="Systems"
        description="The most cost-effective entry point into solar. Eliminate your daytime electricity bill and switch back to the grid automatically at sunset."
        projects={gridTiedProjects}
      />

      {/* 2. Efficiency Analytics Dashboard */}
      <GridTiedStats />

      {/* 3. High-Definition Contact CTA */}
      <SolutionCTA
        title="Ready to lower your bills?"
        description="Grid-tied systems are the gold standard for businesses and homes with high daytime energy consumption. Contact our engineering team for an ROI analysis."
      />
    </Box>
  );
}
