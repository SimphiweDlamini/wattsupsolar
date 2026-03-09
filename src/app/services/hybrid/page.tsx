import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";

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
    <ServicePageTemplate
      serviceTitle="Hybrid"
      highlightWord="Systems"
      description="Optimizing energy by blending solar power with the utility grid."
      projects={hybridProjects}
    />
  );
}
