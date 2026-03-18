"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Container,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FiArrowDown } from "react-icons/fi";
import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const images = [
  "/pic1.jpeg",
  "/pic2.jpeg",
  "/pic4.jpeg",
  "/pic5.jpeg",
  "/pic6.jpeg",
  "/pic8.jpeg",
  "/pic9.jpeg",
  "/pic10.jpeg",
  "/pic11.jpeg",
  "/pic12.jpeg",
  "/pic13.jpg",
  "/pic14.jpg",
];

const MotionBox = motion(Box);

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // Changed bg to a very light, neutral sky color
    <Box minH="100vh" position="relative" overflow="hidden" bg="#f0f9ff">
      {/* CRITICAL CHANGE: Removed 'wait'. 
          Now images will cross-fade, hiding the blue background. 
      */}
      <AnimatePresence>
        <MotionBox
          key={images[index]}
          position="absolute"
          inset={0}
          bgImage={`url(${images[index]})`}
          bgPos="center"
          bgSize="cover"
          // Smooth cross-fade transition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          zIndex={0}
          // Added a filter so the image itself isn't too 'heavy'
          filter="brightness(0.6) contrast(1.1)"
        />
      </AnimatePresence>

      {/* Subtle bottom gradient to blend into the white section below */}
      <Box
        position="absolute"
        bottom={0}
        w="100%"
        h="30vh"
        bgGradient="linear(to-t, white, transparent)"
        zIndex={1}
      />

      <Flex
        position="relative"
        zIndex={2}
        minH="100vh"
        align="center"
        justify="center"
        color="white"
      >
        <Container maxW="container.lg">
          <VStack gap={10} textAlign="center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Heading
                fontSize={{ base: "5xl", md: "7xl", lg: "9xl" }}
                fontFamily="'Outfit', sans-serif"
                fontWeight="900"
                lineHeight={1}
                textShadow="0 10px 30px rgba(0,0,0,0.5)"
              >
                WATTS UP SOLAR
              </Heading>
            </motion.div>

            <Box
              fontSize={{ base: "2xl", md: "4xl" }}
              fontFamily="'Lexend', sans-serif"
              fontWeight="700"
              color="#06d00c"
              minH="50px"
            >
              <Typewriter
                options={{
                  strings: [
                    "Sustainable Energy Solutions.",
                    "Expert Solar Installations.",
                    "Powering Eswatini's Future.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 20,
                }}
              />
            </Box>

            <Text
              fontSize={{ base: "md", md: "xl" }}
              maxW="2xl"
              color="gray.100"
            >
              We provide world-class solar engineering with local expertise.
              From residential backups to large-scale commercial setups.
            </Text>

            <Button
              size="lg"
              bg="#06d00c"
              color="white"
              px={12}
              py={8}
              fontSize="xl"
              rounded="full"
              onClick={scrollToServices}
              _hover={{
                bg: "#05b00a",
                transform: "translateY(-5px)",
                shadow: "0 20px 40px rgba(6, 208, 12, 0.4)",
              }}
            >
              <Flex align="center" gap={2}>
                Get Started
                <Icon as={FiArrowDown} />
              </Flex>
            </Button>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
};

export default HomeCarousel;
