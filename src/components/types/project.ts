export type ProjectSector = 'Commercial' | 'Residential' | 'Industrial' | 'NGO';

export type ProjectType = 'Off-Grid' | 'Hybrid' | 'Solar Pump' | 'PV Geyser' | 'Grid-Tied';

export interface Project {
  title: string;
  location: string;
  description: string;
  image: string;
  type: ProjectType;   // This helps us organize the data
  sector: ProjectSector; // This tells us the market (Commercial/Residential)
  stats: string;
}