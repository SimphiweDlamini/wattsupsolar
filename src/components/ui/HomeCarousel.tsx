"use client";

import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";
import { useEffect, useState } from "react";

const images = [
  "/pic1.jpeg",
  "/pic2.jpeg",
  "/pic3.jpeg",
  "/pic4.jpeg",
  "/pic5.jpeg",
  "/pic6.jpeg",
  "/pic7.jpeg",
  "/about.jpg",
  "/pic8.jpeg",
  "/pic9.jpeg",
  "/pic10.jpeg",
  "/pic11.jpeg",
  "/pic12.jpeg",
];

const HomeCarousel = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="black">
      {images.map((src, index) => (
        <Box
          key={src}
          position="absolute"
          inset={0}
          bgImage={`url(${src})`}
          bgPos="center"
          bgSize="cover"
          opacity={index === bgIndex ? 1 : 0}
          transform={index === bgIndex ? "translateX(0)" : "translateX(20px)"}
          transition="opacity 2s ease-in-out, transform 2s ease-in-out"
          zIndex={0}
        />
      ))}

      {/* Static Overlay */}
      <Box position="absolute" inset={0} bg="blackAlpha.600" zIndex={1} />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={2}
        minH="100vh"
        align="center"
        justify="center"
        color="white"
      >
        <VStack maxW="1200px" textAlign="center" px={6}>
          <Heading
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontFamily="'Outfit', sans-serif"
            fontWeight="700"
            lineHeight={1.1}
            letterSpacing="-0.02em"
          >
            Welcome to Watts Up Solar
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontFamily="'Lexend', sans-serif"
            fontWeight="400"
            maxW="900px"
            lineHeight="tall"
          >
            Welcome to <strong>Watts Up Solar</strong>! We provide sustainable{" "}
            <strong>energy solutions in Eswatini</strong>. From Solar Home
            Systems to commercial and agricultural systems.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HomeCarousel;
