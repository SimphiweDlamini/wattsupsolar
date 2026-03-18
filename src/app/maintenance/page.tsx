"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Button,
  Icon,
  Circle,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiSearch,
  FiDroplet,
  FiActivity,
  FiTool,
  FiZap,
  FiFileText,
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
} from "react-icons/fi";

const MotionBox = motion(Box);

// --- THE STRUCTURAL CROP CARD ---
const SupportFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  index: number;
}) => {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      p={10}
      bg="white"
      rounded="2xl"
      position="relative"
      role="group"
      overflow="hidden" // This ensures the numbers cut off
      border="2px solid"
      borderColor="gray.200"
      boxShadow="0 10px 30px -10px rgba(0,0,0,0.08)"
      _hover={{
        borderColor: "#06d00c",
        transform: "translateY(-8px)",
        shadow: "2xl",
      }}
      transitionProperty="all"
      transitionDuration="300ms"
    >
      {/* 1. THE CROPPED BACKGROUND NUMBER */}
      <Text
        position="absolute"
        bottom="-40px"
        right="-20px"
        fontSize="180px"
        fontWeight="900"
        color="gray.100"
        zIndex="0"
        lineHeight="1"
        userSelect="none"
        pointerEvents="none"
        _groupHover={{
          color: "rgba(6, 208, 12, 0.15)",
          transform: "scale(1.1)",
        }}
        transition="all 0.6s ease"
      >
        {displayIndex}
      </Text>

      {/* 2. TOP ACCENT BAR */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="80px"
        h="6px"
        bg="#06d00c"
        borderBottomRightRadius="md"
      />

      <VStack align="start" gap={8} position="relative" zIndex="1">
        <HStack justify="space-between" width="full">
          <Circle
            size="64px"
            bg="black"
            color="#06d00c"
            shadow="lg"
            _groupHover={{
              transform: "rotateY(180deg)",
              bg: "#06d00c",
              color: "black",
            }}
            transition="all 0.6s"
          >
            <Icon as={icon} boxSize={7} />
          </Circle>

          <VStack align="end" gap={0}>
            <Text
              fontSize="10px"
              fontFamily="monospace"
              fontWeight="bold"
              color="gray.400"
            >
              UNIT_ID
            </Text>
            <Text
              fontSize="14px"
              fontFamily="monospace"
              fontWeight="900"
              color="black"
            >
              #{displayIndex}-ENG
            </Text>
          </VStack>
        </HStack>

        <Box>
          <Heading
            size="md"
            fontWeight="900"
            fontFamily="'Outfit', sans-serif"
            mb={4}
            color="black"
            letterSpacing="tight"
          >
            {title}
          </Heading>
          <Text
            color="gray.600"
            fontSize="md"
            fontFamily="'Lexend', sans-serif"
            lineHeight="tall"
            fontWeight="500"
            maxW="85%"
          >
            {description}
          </Text>
        </Box>

        {/* 3. TECHNICAL STRIP */}
        <Box width="full" pt={4}>
          <HStack width="full" gap={4} mb={2}>
            <Icon as={FiCpu} color="#06d00c" boxSize={4} />
            <Text
              fontSize="10px"
              fontFamily="monospace"
              color="gray.900"
              fontWeight="bold"
            >
              SYSTEM_INTEGRITY_LOG
            </Text>
          </HStack>
          <Box
            h="2px"
            w="full"
            bg="gray.100"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              h="full"
              w="45%"
              bg="#06d00c"
              _groupHover={{ w: "100%" }}
              transition="width 0.8s ease"
            />
          </Box>
        </Box>
      </VStack>
    </MotionBox>
  );
};

export default function SupportMaintenancePage() {
  const checkItems = [
    "Inverter Firmware Updates",
    "Battery Cell Balancing",
    "Tightening of MC4 Connectors",
    "Shading Analysis & Mitigation",
  ];

  return (
    <Box bg="white" minH="100vh" pb={20}>
      {/* SECTION 1: HERO */}
      <Box
        pt={{ base: 32, md: 48 }}
        pb={{ base: 20, md: 32 }}
        bg="#050505"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          opacity="0.15"
          style={{
            backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <Container maxW="8xl" px={6} position="relative" zIndex="2">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={20}
            align="center"
          >
            <VStack
              align={{ base: "center", lg: "flex-start" }}
              flex="1.2"
              gap={8}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Badge
                bg="#06d00c"
                color="black"
                px={4}
                py={1}
                rounded="md"
                fontWeight="900"
                letterSpacing="widest"
              >
                25-YEAR INVESTMENT
              </Badge>
              <Heading
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                fontWeight="900"
                color="white"
                fontFamily="'Outfit', sans-serif"
                lineHeight="0.85"
                letterSpacing="tighter"
              >
                Engineering <br />
                <Box as="span" color="#06d00c">
                  Precision
                </Box>
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.400"
                maxW="600px"
                fontFamily="'Lexend', sans-serif"
                fontWeight="light"
              >
                We provide the technical monitoring and professional maintenance
                required to keep your energy infrastructure running at peak
                performance.
              </Text>
            </VStack>

            <Box
              flex="1"
              position="relative"
              width="full"
              display={{ base: "none", md: "block" }}
            >
              <MotionBox
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                p={8}
                bg="whiteAlpha.50"
                backdropFilter="blur(20px)"
                rounded="3xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <HStack mb={6} justify="space-between">
                  <Text color="#06d00c" fontWeight="900" fontSize="xs">
                    SYSTEM_STATUS: OPTIMAL
                  </Text>
                  <Circle size="12px" bg="#06d00c" />
                </HStack>
                <VStack gap={4} align="stretch">
                  <Box
                    h="2px"
                    w="full"
                    bgGradient="linear(to-r, #06d00c, transparent)"
                  />
                  <Box
                    h="2px"
                    w="80%"
                    bgGradient="linear(to-r, whiteAlpha.400, transparent)"
                  />
                  <Box
                    h="2px"
                    w="95%"
                    bgGradient="linear(to-r, #06d00c, transparent)"
                  />
                </VStack>
              </MotionBox>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* SECTION 2: THE GRID (Reverted Text) */}
      <Box
        bg="gray.50"
        py={32}
        mt={-10}
        borderTopRadius="60px"
        position="relative"
        zIndex="3"
      >
        <Container maxW="8xl" px={6}>
          <VStack mb={20} align="start" gap={4}>
            <Text
              color="#06d00c"
              fontWeight="900"
              letterSpacing="0.15em"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              CORE SERVICES
            </Text>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              color="black"
            >
              Technical Lifecycle Support
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
            <SupportFeature
              index={0}
              icon={FiSearch}
              title="Site Surveys & Audits"
              description="Professional assessments of your premises to calculate optimal panel placement and tilt angles."
            />
            <SupportFeature
              index={1}
              icon={FiDroplet}
              title="Cleaning & Inspection"
              description="Dust in Eswatini can drop production by 20%. We provide professional cleaning and safety checks."
            />
            <SupportFeature
              index={2}
              icon={FiActivity}
              title="Performance Monitoring"
              description="Setup and management of remote monitoring portals (ATESS/Victron) for real-time diagnostics."
            />
            <SupportFeature
              index={3}
              icon={FiTool}
              title="Rapid Repairs"
              description="Fast-response troubleshooting for inverters, charge controllers, and battery management systems."
            />
            <SupportFeature
              index={4}
              icon={FiZap}
              title="System Upgrades"
              description="Scale your power. We handle technical integration of more batteries or panels into existing setups."
            />
            <SupportFeature
              index={5}
              icon={FiFileText}
              title="Feasibility Reports"
              description="Detailed financial reports for businesses to understand ROI and carbon footprint reduction."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* SECTION 3: CHECKLIST (Reverted Text) */}
      <Box py={32} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={20} alignItems="center">
            <VStack align="start" gap={8}>
              <Heading
                color="black"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="900"
                fontFamily="'Outfit', sans-serif"
                lineHeight="1"
              >
                Protect Your <br />
                <Box as="span" color="#06d00c">
                  Investment
                </Box>
              </Heading>
              <Text
                color="gray.600"
                fontSize="xl"
                fontFamily="'Lexend', sans-serif"
                lineHeight="relaxed"
              >
                Regular maintenance prevents "soiling" efficiency loss and
                ensures electrical connections remain secure under thermal
                stress.
              </Text>
            </VStack>

            <Box
              bg="#0a0a0a"
              p={{ base: 8, md: 12 }}
              rounded="3xl"
              shadow="2xl"
            >
              <HStack gap={2} mb={8}>
                <Circle size="10px" bg="red.500" />
                <Circle size="10px" bg="yellow.500" />
                <Circle size="10px" bg="#06d00c" />
              </HStack>
              <VStack align="start" gap={6}>
                <Text
                  color="#06d00c"
                  fontWeight="900"
                  fontSize="xs"
                  letterSpacing="widest"
                >
                  TECHNICAL_PROTOCOL_V2.0
                </Text>
                {checkItems.map((item, i) => (
                  <HStack
                    key={i}
                    gap={4}
                    width="full"
                    borderBottom="1px solid"
                    borderColor="whiteAlpha.100"
                    pb={4}
                  >
                    <Icon as={FiCheckCircle} color="#06d00c" />
                    <Text
                      color="whiteAlpha.900"
                      fontFamily="monospace"
                      fontSize="md"
                    >
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* SECTION 4: CTA (Reverted Text) */}
      <Container maxW="7xl" textAlign="center" mt={20}>
        <MotionBox
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          p={{ base: 12, md: 24 }}
          bg="#06d00c"
          rounded="60px"
          color="black"
          position="relative"
          overflow="hidden"
        >
          <VStack gap={10}>
            <Heading
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="900"
              fontFamily="'Outfit', sans-serif"
            >
              Ready for a Technical Consultation?
            </Heading>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                bg="black"
                color="white"
                size="lg"
                h="80px"
                px={16}
                fontSize="lg"
                fontWeight="900"
                rounded="2xl"
                _hover={{
                  bg: "gray.800",
                  transform: "translateY(-5px)",
                  transition: "all 0.3s ease",
                }}
              >
                <HStack gap={3}>
                  <Text>Contact Us Now</Text>
                  <Icon as={FiArrowRight} />
                </HStack>
              </Button>
            </Link>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
