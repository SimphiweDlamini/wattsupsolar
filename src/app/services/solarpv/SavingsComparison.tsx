"use client";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Container,
  HStack,
  Icon,
  Circle,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiZap, FiCheck, FiArrowRight } from "react-icons/fi";

export const SavingsComparison = () => {
  const comparisons = [
    { feat: "Monthly Cost", old: "E800 - E1200", new: "E0.00", icon: FiZap },
    {
      feat: "Load-Shedding",
      old: "COLD WATER",
      new: "HOT WATER",
      icon: FiAlertTriangle,
    },
    { feat: "Maintenance", old: "HIGH_FREQ", new: "MINIMAL", icon: FiCheck },
  ];

  return (
    <Container maxW="6xl" py={32}>
      <VStack gap={16}>
        {/* Section Header */}
        <VStack textAlign="center" gap={4}>
          <Text
            color="#06d00c"
            fontWeight="900"
            fontSize="xs"
            letterSpacing="0.4em"
            fontFamily="monospace"
          >
            SYSTEM_EFFICIENCY_COMPARISON
          </Text>
          <Heading
            size="2xl"
            color="black"
            fontWeight="900"
            letterSpacing="tighter"
          >
            Standard vs. Solar PV Geyser
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
          {comparisons.map((item, i) => (
            <Box
              key={i}
              bg="white"
              border="2px solid"
              borderColor="gray.100"
              position="relative"
              overflow="hidden"
              _hover={{ borderColor: "black" }}
              transition="0.3s"
            >
              {/* Top Header: Feature Name */}
              <Box bg="black" p={4} textAlign="center">
                <Text
                  color="white"
                  fontWeight="900"
                  fontSize="xs"
                  letterSpacing="widest"
                >
                  {item.feat.toUpperCase()}
                </Text>
              </Box>

              <VStack gap={0} align="stretch">
                {/* Standard State (The "Old" Way) */}
                <Box p={8} bg="gray.50" position="relative">
                  <VStack align="start" gap={1}>
                    <Text fontSize="10px" fontWeight="900" color="red.500">
                      LEGACY_GRID_DEP
                    </Text>
                    <Text
                      fontSize="2xl"
                      fontWeight="900"
                      color="gray.400"
                      textDecoration="line-through"
                    >
                      {item.old}
                    </Text>
                  </VStack>
                  <Icon
                    as={item.icon}
                    position="absolute"
                    right={6}
                    top={8}
                    color="gray.200"
                    boxSize={6}
                  />
                </Box>

                {/* The "Transfer" Animation Divider */}
                <Flex
                  align="center"
                  justify="center"
                  h="40px"
                  bg="white"
                  position="relative"
                >
                  <Box w="full" h="1px" bg="gray.100" position="absolute" />
                  <Circle
                    size="30px"
                    bg="#06d00c"
                    zIndex={2}
                    shadow="0 0 15px #06d00c"
                  >
                    <Icon as={FiArrowRight} color="black" boxSize={4} />
                  </Circle>
                </Flex>

                {/* Solar State (The "Watts Up" Way) */}
                <Box p={8} bg="white">
                  <VStack align="start" gap={1}>
                    <Text fontSize="10px" fontWeight="900" color="#06d00c">
                      SOLAR_OPTIMIZED
                    </Text>
                    <Text fontSize="3xl" fontWeight="900" color="black">
                      {item.new}
                    </Text>
                  </VStack>

                  {/* Subtle Pulse Animation in the corner */}
                  <Box position="absolute" right={6} bottom={8}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Circle size="8px" bg="#06d00c" />
                    </motion.div>
                  </Box>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Technical Footnote */}
        <HStack
          w="full"
          justify="space-between"
          pt={8}
          borderTop="1px solid"
          borderColor="gray.100"
        >
          <Text
            fontSize="10px"
            fontWeight="900"
            color="gray.300"
            fontFamily="monospace"
          >
            REF_CODE: GEYSER_PV_CONVERSION
          </Text>
          <Text
            fontSize="10px"
            fontWeight="900"
            color="gray.300"
            fontFamily="monospace"
          >
            CALC_BASE: ESWATINI_TARIFF_2026
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};
