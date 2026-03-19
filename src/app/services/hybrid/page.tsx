"use client";

import ServiceTemplatePage from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";
import { Box } from "@chakra-ui/react";
import { HybridLogic } from "./HybridLogic";
import { SolutionCTA } from "@/components/SolutionCTA";

const hybridProjects: Project[] = [
  {
    title: "40kW Peace Corps Solar Installation",
    location: "Mbabane, Eswatini",
    description:
      "A high-capacity solution featuring an ATESS HPS30 hybrid system. Engineered for uninterrupted facility power by blending solar, battery, and utility grid inputs seamlessly.",
    image: "/pic14.jpg",
    type: "Hybrid",
    sector: "NGO",
    stats: "40kW Hybrid, ATESS HPS30 Inverter",
  },
];

export default function HybridPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. Blueprint Service Template */}
      <ServiceTemplatePage
        serviceTitle="Hybrid"
        highlightWord="Systems"
        description="The ultimate balance of reliability and efficiency. Optimize your energy consumption by blending solar power with the utility grid for 24/7 uptime."
        projects={hybridProjects}
      />

      {/* 2. Intelligent Priority Logic Section */}
      <HybridLogic />

      {/* 3. High-Impact Call to Action */}
      <SolutionCTA
        title="Ready to secure your power?"
        description="Whether you're looking for a residential backup or a large-scale commercial setup, our team is ready to engineer a system that guarantees your energy security."
      />
    </Box>
  );
}
