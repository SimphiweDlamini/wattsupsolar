"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Icon,
  HStack,
  SimpleGrid,
  Circle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiShield, FiSun, FiMapPin, FiCheck } from "react-icons/fi";

const MotionBox = motion(Box);

export const IndependenceGrid = () => {
  const specs = [
    {
      title: "Zero Load-Shedding",
      desc: "Total immunity to national grid instability. Your system operates on a localized loop, ensuring your power stays on when the national grid fails.",
      icon: FiShield,
      label: "RELIABILITY_ZERO_DOWNTIME",
    },
    {
      title: "Remote Autonomy",
      desc: "Professional-grade power delivery for lodges, farms, and remote sites where traditional utility infrastructure is unavailable or too costly to install.",
      icon: FiMapPin,
      label: "INFRASTRUCTURE_INDEPENDENT",
    },
    {
      title: "Fixed Energy Cost",
      desc: "Your fuel is the sun. Protect your long-term budget from rising electricity prices with 0% inflation on your own energy generation.",
      icon: FiSun,
      label: "FINANCIAL_STABILITY",
    },
  ];

  return (
    <Box bg="gray.50" py={28} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="8xl">
        <VStack align="start" mb={16} gap={4}>
          <HStack
            color="#06d00c"
            fontWeight="900"
            fontSize="sm"
            letterSpacing="0.2em"
          >
            <Box w="20px" h="2px" bg="#06d00c" />
            <Text fontFamily="monospace">OFF-GRID_SPECIFICATIONS</Text>
          </HStack>
          <Heading
            color="black"
            size="2xl"
            fontWeight="900"
            letterSpacing="tight"
          >
            Engineering Self-Reliance
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8}>
          {specs.map((spec, i) => (
            <MotionBox
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                h="full"
                bg="white"
                p={10}
                border="1px solid"
                borderColor="gray.200"
                shadow="sm"
                position="relative"
                _hover={{ borderColor: "#06d00c", shadow: "xl" }}
              >
                {/* Technical Index Header */}
                <HStack justify="space-between" mb={10}>
                  <Circle size="50px" bg="black">
                    <Icon as={spec.icon} boxSize={5} color="#06d00c" />
                  </Circle>
                  <Text
                    color="gray.300"
                    fontWeight="900"
                    fontSize="2xl"
                    fontFamily="serif"
                  >
                    0{i + 1}
                  </Text>
                </HStack>

                <VStack align="start" gap={5}>
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize="xs"
                      fontWeight="900"
                      color="#06d00c"
                      fontFamily="monospace"
                      letterSpacing="widest"
                    >
                      {spec.label}
                    </Text>
                    <Heading color="black" size="lg" fontWeight="900">
                      {spec.title}
                    </Heading>
                  </VStack>

                  {/* High Contrast Description */}
                  <Text
                    color="gray.700"
                    fontSize="lg"
                    lineHeight="tall"
                    fontWeight="500"
                  >
                    {spec.desc}
                  </Text>

                  <HStack
                    pt={6}
                    color="gray.400"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    <Icon as={FiCheck} color="#06d00c" />
                    <Text>SYSTEM_VERIFIED</Text>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
