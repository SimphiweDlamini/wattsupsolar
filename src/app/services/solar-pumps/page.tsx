import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";

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
    <ServicePageTemplate
      serviceTitle="Solar"
      highlightWord="Pumps"
      description="Sustainable water solutions for agriculture and livestock. Harness the sun to move water without fuel costs or grid reliance."
      projects={pumpProjects}
    />
  );
}
