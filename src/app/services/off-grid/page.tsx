import ServicePageTemplate from "@/components/ServiceTemplatePage";
import { Project } from "@/components/types/project";

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
    <ServicePageTemplate
      serviceTitle="Off-Grid"
      highlightWord="Solutions"
      description="Reliable power anywhere, completely independent of the national grid."
      projects={offGridProjects}
    />
  );
}
