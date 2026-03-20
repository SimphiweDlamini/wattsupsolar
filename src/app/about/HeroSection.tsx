"use client";

import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";
import { motion, MotionValue } from "framer-motion";

const MotionBox = motion(Box);

interface HeroProps {
  y1: MotionValue<number>;
}

const HeroSection = ({ y1 }: HeroProps) => {
  return (
    <Box
      minH={{ base: "80vh", md: "95vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg="#050505"
      overflow="hidden"
    >
      <MotionBox
        style={{ y: y1 }}
        position="absolute"
        top="-10%"
        right="-10%"
        w={{ base: "300px", md: "800px" }}
        h={{ base: "300px", md: "800px" }}
        bgGradient="radial(rgba(6, 208, 12, 0.15) 0%, transparent 70%)"
        filter="blur(100px)"
      />
      <Container
        maxW="6xl"
        position="relative"
        zIndex="1"
        textAlign="center"
        px={6}
      >
        <VStack gap={{ base: 6, md: 12 }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Text
              color="#06d00c"
              fontWeight="900"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="0.4em"
              textTransform="uppercase"
              mb={{ base: 4, md: 8 }}
            >
              Engineering Excellence
            </Text>
            <Heading
              fontSize={{ base: "4xl", md: "8xl", lg: "9xl" }}
              fontWeight="900"
              color="white"
              lineHeight="0.9"
              letterSpacing="tighter"
              fontFamily="'Outfit', sans-serif"
            >
              Powering <br />
              <Box as="span" color="#06d00c">
                Eswatini's
              </Box>{" "}
              <br />
              Future
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Text
              fontSize={{ base: "md", md: "2xl" }}
              color="gray.400"
              maxW="2xl"
              mx="auto"
              fontFamily="'Lexend', sans-serif"
              lineHeight="tall"
            >
              Watts Up Solar: Precision engineering, locally refined. We are
              building the backbone of the Kingdom’s energy independence.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
      <Box
        position="absolute"
        bottom="-1px"
        left="0"
        right="0"
        height={{ base: "40px", md: "80px" }}
        bg="white"
        clipPath="polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)"
      />
    </Box>
  );
};

export default HeroSection;
