import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";

const geyserProjects: Project[] = [
  {
    title: "Residential Hot Water Retrofit",
    location: "Manzini, Eswatini",
    description:
      "Conversion of a standard electric geyser to a PV-powered system, allowing the family to have hot water throughout load-shedding.",
    image: "/SolarPV.jpg",
    type: "PV Geyser",
    sector: "Residential",
    stats: "3 x 550W Tier 1 Panels",
  },
  {
    title: "Eco-Lodge Geyser Upgrade",
    location: "Ezulwini, Eswatini",
    description:
      "Scaling hot water production for guest rooms using a centralized Solar PV heating array to minimize monthly utility overheads.",
    image: "/pic15.jpeg", // Reusing a project image as a placeholder
    type: "PV Geyser",
    sector: "Commercial",
    stats: "Multi-unit Retrofit, DC Heating Elements",
  },
];

export default function GeysersPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Solar PV"
      highlightWord="Geysers"
      description="The most cost-effective way to heat water. Convert your existing geyser to run on solar panels and save up to 40% on your electricity bill."
      projects={geyserProjects}
    />
  );
}
