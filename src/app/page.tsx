"use client";

import Services from "@/components/Services";
import Products from "@/components/Services";
import HomeCarousel from "@/components/ui/HomeCarousel";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <HomeCarousel />
      <Services />
    </main>
  );
}
