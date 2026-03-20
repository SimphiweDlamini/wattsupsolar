"use client";

import { Box } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Section Component Imports
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";
import ImpactSection from "./ImpactSection";
import ClientTicker from "./ClientTicker";

// Fonts (Keep these in the main page or your layout)
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";
import "@fontsource/lexend/400.css";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <Box bg="white" ref={containerRef} overflowX="hidden">
      <HeroSection y1={y1} />
      <StorySection />
      <TeamSection />
      <ImpactSection />
      <ClientTicker />
    </Box>
  );
};

export default AboutPage;
