"use client";

import ServiceTemplatePage from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import { Box } from "@chakra-ui/react";
import { PumpMonitor } from "./PumpMonitor";
import { SolutionCTA } from "@/components/SolutionCTA";

const pumpProjects: Project[] = [
  {
    title: "Agricultural Irrigation Setup",
    location: "Malkerns, Eswatini",
    description:
      "A high-flow solar pumping solution designed for crop irrigation, eliminating the farm's reliance on expensive diesel generators and manual refueling.",
    image: "/SolarPump.png",
    type: "Solar Pump",
    sector: "Commercial",
    stats: "Submersible Pump, 120m Depth",
  },
  {
    title: "Livestock Watering System",
    location: "Shiselweni, Eswatini",
    description:
      "Automated water supply for livestock using solar energy, ensuring consistent water access even in remote grazing areas without grid infrastructure.",
    image: "/pic11.jpeg",
    type: "Solar Pump",
    sector: "Industrial",
    stats: "DC Solar Pump, 5000L/day",
  },
];

export default function SolarPumpsPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. Industrial Blueprint Template */}
      <ServiceTemplatePage
        serviceTitle="Solar"
        highlightWord="Pumps"
        description="Sustainable water solutions for agriculture and livestock. Harness the sun to move water without fuel costs, grid reliance, or mechanical downtime."
        projects={pumpProjects}
      />

      {/* 2. Agri-Tech Specification Grid */}
      <PumpMonitor />

      {/* 3. High-Impact CTA Dashboard */}
      <SolutionCTA
        title="Ready for reliable irrigation?"
        description="Stop worrying about fuel prices or power cuts affecting your crops. Switch to a maintenance-free solar pumping solution engineered specifically for the Swati climate."
      />
    </Box>
  );
}
