"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Circle,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface CTAProps {
  title: string;
  description: string;
}

export const SolutionCTA = ({ title, description }: CTAProps) => {
  return (
    <Box bg="gray.50" py="32">
      <Container maxW="6xl">
        <MotionBox
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4 }}
          bg="black"
          rounded="3xl"
          p={{ base: "10", md: "20" }}
          position="relative"
          overflow="hidden"
          shadow="2xl"
        >
          {/* Engineering Grid Overlay */}
          <Box
            position="absolute"
            inset="0"
            opacity="0.1"
            pointerEvents="none"
            style={{
              backgroundImage: `radial-gradient(#06d00c 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <VStack gap="10" position="relative" zIndex="1" textAlign="center">
            {/* System Status Indicator */}
            <HStack
              bg="whiteAlpha.100"
              px="4"
              py="2"
              rounded="full"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Circle size="8px" bg="#06d00c" />
              <Text
                color="#06d00c"
                fontSize="xs"
                fontWeight="900"
                letterSpacing="widest"
                fontFamily="monospace"
              >
                SYSTEM_READY_FOR_DEPLOYMENT
              </Text>
            </HStack>

            <VStack gap="6">
              <Heading
                color="white"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontFamily="'Outfit', sans-serif"
                fontWeight="900"
                lineHeight="1.1"
              >
                {title}
              </Heading>
              <Text
                color="gray.400"
                fontSize="lg"
                maxW="600px"
                fontFamily="'Lexend', sans-serif"
              >
                {description}
              </Text>
            </VStack>

            {/* Hardware Checklist */}
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: "4", md: "10" }}
              justify="center"
              color="whiteAlpha.700"
              fontSize="xs"
              fontWeight="bold"
              fontFamily="monospace"
            >
              <HStack>
                <Icon as={FiCheckCircle} color="#06d00c" />
                <Text>CONSULTATION</Text>
              </HStack>
              <HStack>
                <Icon as={FiCheckCircle} color="#06d00c" />
                <Text>SITE INSPECTION</Text>
              </HStack>
              <HStack>
                <Icon as={FiCheckCircle} color="#06d00c" />
                <Text>ROI ANALYSIS</Text>
              </HStack>
            </Stack>

            <NextLink
              href="/contact"
              passHref
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                bg="#06d00c"
                color="black"
                size="lg"
                h="80px"
                px="16"
                fontSize="xl"
                fontWeight="900"
                rounded="2xl"
                _hover={{
                  bg: "white",
                  transform: "scale(1.05)",
                  shadow: "0 0 40px rgba(6, 208, 12, 0.4)",
                }}
                transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              >
                <HStack gap="4">
                  <Text>START YOUR PROJECT</Text>
                  <Icon as={FiArrowRight} boxSize="6" />
                </HStack>
              </Button>
            </NextLink>

            <Text
              color="whiteAlpha.400"
              fontSize="10px"
              fontFamily="monospace"
              letterSpacing="widest"
            >
              WATTS_UP_SOLAR_ESWATINI // [PROTOCOL: CONTACT_INIT]
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};
