"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  HStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const PumpMonitor = () => {
  return (
    <Box bg="white" py={32}>
      <Container maxW="8xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={20}
          align="center"
        >
          {/* Left: Tactical Data Readout */}
          <VStack align="start" flex="1" gap={10}>
            <VStack align="start" gap={2}>
              <Text
                color="#06d00c"
                fontWeight="900"
                fontSize="12px"
                letterSpacing="0.4em"
                fontFamily="monospace"
              >
                SYSTEM_FLOW_DYNAMICS
              </Text>
              <Heading
                color="black"
                fontSize="6xl"
                fontWeight="900"
                letterSpacing="-0.04em"
              >
                Performance Curve.
              </Heading>
              <Text color="gray.600" fontSize="xl" fontWeight="500">
                Unlike standard pumps, our DC-Drive maintains consistent torque
                at extreme depths.
              </Text>
            </VStack>

            <SimpleGrid columns={2} w="full" gap={10}>
              <VStack
                align="start"
                borderLeft="4px solid"
                borderColor="#06d00c"
                pl={6}
              >
                <Text fontSize="xs" fontWeight="900" color="gray.400">
                  MAX_VERTICAL_LIFT
                </Text>
                <Text fontSize="4xl" fontWeight="900" color="black">
                  250m
                </Text>
              </VStack>
              <VStack
                align="start"
                borderLeft="4px solid"
                borderColor="#06d00c"
                pl={6}
              >
                <Text fontSize="xs" fontWeight="900" color="gray.400">
                  DAILY_VOLUME
                </Text>
                <Text fontSize="4xl" fontWeight="900" color="black">
                  45k L
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>

          {/* Right: The "Oscilloscope" Visualizer */}
          <Box
            flex="1.2"
            w="full"
            h="400px"
            bg="black"
            rounded="3xl"
            position="relative"
            overflow="hidden"
            border="8px solid"
            borderColor="gray.100"
          >
            {/* Grid Lines */}
            <Box
              position="absolute"
              inset="0"
              opacity="0.1"
              style={{
                backgroundImage: `linear-gradient(#06d00c 1px, transparent 1px), linear-gradient(90deg, #06d00c 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* The SVG Curve */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,180 Q100,160 200,100 T400,20"
                fill="none"
                stroke="#06d00c"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Pulse Effect */}
              <motion.circle
                r="4"
                fill="#06d00c"
                animate={{ cx: [0, 400], cy: [180, 20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Floating Telemetry Tags */}
            <VStack position="absolute" top={6} right={6} align="end" gap={0}>
              <Text
                color="#06d00c"
                fontSize="10px"
                fontWeight="900"
                fontFamily="monospace"
              >
                MOTOR_FREQ: 50.2Hz
              </Text>
              <Text
                color="white"
                fontSize="10px"
                fontWeight="900"
                fontFamily="monospace"
              >
                VOLTAGE_IN: 110V DC
              </Text>
            </VStack>

            <Box position="absolute" bottom={6} left={6}>
              <Text
                color="whiteAlpha.400"
                fontSize="9px"
                fontWeight="900"
                letterSpacing="widest"
              >
                OPTIMIZED_FLOW_STATE // ACTIVE
              </Text>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

// Helper for Layout
import { Stack } from "@chakra-ui/react";
