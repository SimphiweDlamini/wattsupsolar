"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

// Prop names now match the data used below
const SupportFeature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <VStack
    align="start"
    p={8}
    bg="white"
    rounded="2xl"
    shadow="sm"
    border="1px solid"
    borderColor="gray.100"
    transition="all 0.3s"
    _hover={{
      shadow: "xl",
      borderColor: "cyan.400",
      transform: "translateY(-5px)",
    }}
  >
    <Box fontSize="3xl" mb={2}>
      {icon}
    </Box>
    <Heading size="md" fontFamily="'Outfit', sans-serif" color="gray.800">
      {title}
    </Heading>
    <Text
      color="gray.600"
      fontSize="sm"
      fontFamily="'Lexend', sans-serif"
      lineHeight="tall"
    >
      {description}
    </Text>
  </VStack>
);

export default function SupportMaintenancePage() {
  return (
    <Box bg="gray.50" minH="100vh" pb={20}>
      <Box py={24} bg="gray.900" color="white" textAlign="center">
        <Container maxW="container.lg">
          <VStack gap={4}>
            <Badge bg="cyan.500" color="white" px={3} rounded="full">
              System Longevity
            </Badge>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontFamily="'Outfit', sans-serif"
            >
              Support &{" "}
              <Box as="span" color="cyan.400">
                Maintenance
              </Box>
            </Heading>
            <Text
              fontSize="lg"
              color="gray.400"
              maxW="700px"
              fontFamily="'Lexend', sans-serif"
            >
              A solar system is a 25-year investment. We provide the technical
              expertise, monitoring, and maintenance to ensure it performs at
              peak efficiency.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={16} mt={-10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          <SupportFeature
            icon="🔍"
            title="Site Surveys & Audits"
            description="Professional assessments of your premises to calculate optimal panel placement, tilt angles, and expected energy yield."
          />
          <SupportFeature
            icon="🧼"
            title="Cleaning & Inspection"
            description="Dust and debris in Eswatini can drop production by 20%. We provide professional cleaning and electrical safety checks."
          />
          <SupportFeature
            icon="📊"
            title="Performance Monitoring"
            description="Setup and management of remote monitoring portals (ATESS/Victron) so we can see issues before you do."
          />
          <SupportFeature
            icon="🔧"
            title="Rapid Repairs"
            description="Fast-response troubleshooting for inverters, charge controllers, and battery management systems."
          />
          <SupportFeature
            icon="🔋"
            title="System Upgrades"
            description="Ready for more power? We handle the technical integration of additional batteries or PV panels into your existing setup."
          />
          <SupportFeature
            icon="📜"
            title="Feasibility Reports"
            description="Detailed technical and financial reports for businesses looking to understand their ROI and carbon footprint reduction."
          />
        </SimpleGrid>
      </Container>

      <Box py={16} bg="white" borderY="1px solid" borderColor="gray.100">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center">
            <VStack align="start" gap={6}>
              <Heading size="lg" fontFamily="'Outfit', sans-serif">
                Protect Your{" "}
                <Text as="span" color="cyan.500">
                  Investment
                </Text>
              </Heading>
              <Text color="gray.600" fontFamily="'Lexend', sans-serif">
                Without regular maintenance, solar panels can lose efficiency
                due to "soiling" (dust buildup), and electrical connections can
                loosen over time.
              </Text>
            </VStack>
            <Box bg="gray.900" p={8} rounded="2xl" color="white">
              <VStack align="start" gap={4}>
                <Heading size="sm" color="cyan.400">
                  What we check:
                </Heading>
                {/* Replaced Divider with a Box for stability */}
                <Box w="full" h="1px" bg="gray.700" my={1} />
                <Text fontSize="sm">• Inverter Firmware Updates</Text>
                <Text fontSize="sm">• Battery Cell Balancing</Text>
                <Text fontSize="sm">• Tightening of MC4 Connectors</Text>
                <Text fontSize="sm">• Shading Analysis & Mitigation</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.md" textAlign="center" mt={20}>
        <VStack
          gap={6}
          p={10}
          bg="cyan.600"
          rounded="2xl"
          shadow="xl"
          color="white"
        >
          <Heading size="md">Need a Technical Consultation?</Heading>
          <Text opacity={0.9}>
            Our team is available to answer technical questions or help you plan
            your next energy milestone.
          </Text>
          <Link href="/contact" passHref>
            <Button
              bg="white"
              color="cyan.600"
              size="lg"
              px={10}
              _hover={{ bg: "gray.100" }}
            >
              Contact Us Now
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}
