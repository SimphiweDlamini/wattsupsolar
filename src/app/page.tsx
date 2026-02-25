"use client";

import Products from "@/components/Products";
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
      <Products />
    </main>
  );
}
