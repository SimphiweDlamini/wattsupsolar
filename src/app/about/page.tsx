"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  Image,
  Avatar,
  Tabs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const MotionBox = motion(Box);
const aboutImage = "/about.jpeg";

// Separated the team for the requested 3-3-4 grid layout
const leadership = [
  { name: "John Thomson", role: "CEO", nickname: "Mashesha" },
  { name: "Clinton McNamara", role: "Managing Director" },
  { name: "Jude Henwood", role: "Finance Manager" },
];

const management = [
  { name: "Rodney Carval", role: "Product Development" },
  { name: "Rosanne Frúhwirth", role: "Administrator" },
  { name: "Zodwa McNamara", role: "Marketing" },
];

const technical = [
  { name: "Lindokuhle Khulu", role: "Technician" },
  { name: "Phumlani Shongwe", role: "Technician" },
  { name: "Nhlanhleni Shabangu", role: "Technician" },
  { name: "Celucolo Mduli", role: "Technician" },
];

const AboutPage = () => {
  // Reusable component for team cards to keep the code clean
  const TeamCard = ({ member, index }: { member: any; index: number }) => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      bg="white"
      p="6"
      borderRadius="2xl"
      shadow="md"
      textAlign="center"
    >
      <Avatar.Root size="2xl" mb="4" mx="auto">
        <Avatar.Fallback name={member.name} bg="gray.200" color="gray.500" />
        <Avatar.Image src={`/team/${member.name.replace(/\s+/g, "")}.jpg`} />
      </Avatar.Root>
      <Text fontWeight="800" color="gray.800">
        {member.name}
      </Text>
      <Text fontSize="xs" color="#06d00c" fontWeight="bold" mb="2">
        {member.role}
      </Text>
      {member.nickname && (
        <Text fontSize="xs" fontStyle="italic" color="gray.400">
          "{member.nickname}"
        </Text>
      )}
    </MotionBox>
  );

  return (
    <Box bg="white">
      {/* 1. HERO SECTION */}
      <Box
        py={{ base: "20", md: "32" }}
        bg="gray.900"
        color="white"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w="400px"
          h="400px"
          bg="green.900"
          borderRadius="full"
          filter="blur(120px)"
          opacity="0.3"
        />
        <Container maxW="6xl" position="relative" zIndex="1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              size="4xl"
              fontWeight="black"
              mb="6"
              fontFamily="'Outfit', sans-serif"
            >
              Powering{" "}
              <Box as="span" color="#06d00c">
                Eswatini's
              </Box>{" "}
              Future
            </Heading>
            <Text
              fontSize="xl"
              color="gray.400"
              maxW="2xl"
              mx="auto"
              fontFamily="'Lexend', sans-serif"
            >
              Watts Up Solar: Built on local expertise, engineering excellence,
              and a passion for green energy.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* 2. MAIN STORY SECTION */}
      <Box py="24">
        <Container maxW="7xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap="20"
            align="center"
          >
            <Box flex="1" position="relative">
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={aboutImage}
                  alt="Watts Up Solar Team"
                  borderRadius="3xl"
                  shadow="2xl"
                />
              </MotionBox>
              <Box
                position="absolute"
                bottom="-20px"
                right="-20px"
                bg="#06d00c"
                p="6"
                borderRadius="2xl"
                color="white"
                shadow="xl"
                zIndex="2"
                display={{ base: "none", md: "block" }}
              >
                <Text fontWeight="800" fontSize="3xl">
                  100%
                </Text>
                <Text fontSize="xs" fontWeight="bold">
                  LOCAL EXPERTISE
                </Text>
              </Box>
            </Box>
            <VStack flex="1" align="flex-start" gap="8">
              <Heading
                size="2xl"
                fontWeight="bold"
                fontFamily="'Outfit', sans-serif"
                color="black"
              >
                Our Mission & Vision
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                We specialize in designing, installing, and maintaining solar
                energy solutions for residential, commercial, and agricultural
                use. Our mission is to empower Eswatini with sustainable power
                systems.
              </Text>
              <SimpleGrid columns={2} gap="10" width="100%">
                <Box borderStartWidth="4px" borderStartColor="#06d00c" ps="6">
                  <Text fontWeight="800" color="gray.800" mb="2">
                    VISION
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    To be the premier choice for solar energy in homes and
                    businesses.
                  </Text>
                </Box>
                <Box borderStartWidth="4px" borderStartColor="#06d00c" ps="6">
                  <Text fontWeight="800" color="gray.800" mb="2">
                    GOAL
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Promoting environmental stewardship through innovative PV
                    technology.
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* 3. MEET THE TEAM (Restructured Grid) */}
      <Box py="24" bg="gray.50">
        <Container maxW="7xl">
          <VStack mb="16" textAlign="center" gap="4">
            <Heading
              size="2xl"
              fontWeight="bold"
              fontFamily="'Outfit', sans-serif"
              color="black"
            >
              The Power Team
            </Heading>
            <Text maxW="xl" color="gray.600">
              The faces behind the energy revolution in Eswatini.
            </Text>
          </VStack>

          <VStack gap={12}>
            {/* Row 1: Leadership (3) */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} width="full">
              {leadership.map((member, i) => (
                <TeamCard key={member.name} member={member} index={i} />
              ))}
            </SimpleGrid>

            {/* Row 2: Management (3) */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} width="full">
              {management.map((member, i) => (
                <TeamCard key={member.name} member={member} index={i + 3} />
              ))}
            </SimpleGrid>

            {/* Row 3: Technical (4) */}
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} width="full">
              {technical.map((member, i) => (
                <TeamCard key={member.name} member={member} index={i + 6} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* 4. IMPACT & TABS */}
      <Box py="28" bg="gray.50">
        <Container maxW="7xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={20}
            align="center"
          >
            <VStack flex="1.3" align="flex-start" gap={8} width="100%">
              <Heading
                size="3xl"
                fontWeight="black"
                fontFamily="'Outfit', sans-serif"
                color="black"
              >
                Our Growing Impact
              </Heading>

              {/* --- PREMIUM TABS SYSTEM --- */}
              <Tabs.Root defaultValue="projects" variant="plain" width="100%">
                <Tabs.List
                  gap={2}
                  mb={10}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.100"
                >
                  <Tabs.Trigger
                    value="projects"
                    fontWeight="900"
                    fontSize="lg"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    borderBottomWidth="2px"
                    borderBottomColor="transparent"
                    mb="-2px" // Overlaps the parent border perfectly
                    pb={3}
                  >
                    The First E-Car
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="events"
                    fontWeight="900"
                    fontSize="lg"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    borderBottomWidth="2px"
                    borderBottomColor="transparent"
                    mb="-2px"
                    pb={3}
                  >
                    Powering Events
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="geysers"
                    fontWeight="900"
                    fontSize="lg"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    borderBottomWidth="2px"
                    borderBottomColor="transparent"
                    mb="-2px"
                    pb={3}
                  >
                    Rural Innovation
                  </Tabs.Trigger>
                </Tabs.List>

                <Box minH="180px">
                  {/* Story 1: The E-Car */}
                  <Tabs.Content value="projects">
                    <VStack align="flex-start" gap={6}>
                      <Text
                        color="gray.600"
                        fontSize="xl"
                        lineHeight="tall"
                        fontFamily="'Lexend', sans-serif"
                      >
                        A defining milestone in our journey: The Watts Up Solar
                        technicians successfully engineered the full solar
                        charging infrastructure for the country’s very first
                        high-performance electrical car.{" "}
                      </Text>
                      <Text color="gray.500" fontSize="md">
                        This project demonstrated that we can provide scalable,
                        high-voltage solutions with 100% local expertise,
                        pushing Eswatini towards a truly clean transport future.
                      </Text>
                    </VStack>
                  </Tabs.Content>

                  {/* Story 2: Events */}
                  <Tabs.Content value="events">
                    <VStack align="flex-start" gap={6}>
                      <Text
                        color="gray.600"
                        fontSize="xl"
                        lineHeight="tall"
                        fontFamily="'Lexend', sans-serif"
                      >
                        We are proud to provide reliable, off-grid power to
                        major local charity events, markets, and gatherings. We
                        ensure that sound systems, lighting, and hospitality
                        function flawlessly using only the sun.
                      </Text>
                      <Text color="gray.500" fontSize="md">
                        When you see the Watts Up Solar logo powering an event
                        (like in the pictures), you’re seeing sustainable energy
                        in action, supporting our community with innovative,
                        portable engineering.
                      </Text>
                    </VStack>
                  </Tabs.Content>

                  {/* Story 3: Geysers */}
                  <Tabs.Content value="geysers">
                    <VStack align="flex-start" gap={6}>
                      <Text
                        color="gray.600"
                        fontSize="xl"
                        lineHeight="tall"
                        fontFamily="'Lexend', sans-serif"
                      >
                        Innovating where it matters most: Our specialized
                        retrofits for rural geyser systems are lowering
                        electricity costs and providing consistent hot water
                        across Eswatini.
                      </Text>
                      <Text color="gray.500" fontSize="md">
                        We are converting existing geysers to run efficiently on
                        PV panels. It's a localized, high-impact solution that
                        proves solar innovation isn't just for commercial
                        clients—it’s for everyone.
                      </Text>
                    </VStack>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </VStack>

            {/* --- REFINED STAGGERED GALLERY (FIXED HOVER) --- */}
            <SimpleGrid flex="1" columns={2} gap={6} alignItems="flex-start">
              {[
                {
                  src: "/ecar.jpg",
                  alt: "Eswatini's First Electrical Car Charging",
                },
                {
                  src: "/pic18.jpeg",
                  alt: "Community Event Sound System Power",
                },
                {
                  src: "/pic11.jpeg",
                  alt: "Rural Solar Geyser Retrofit Installation",
                },
                {
                  src: "/pic2.jpeg",
                  alt: "Market Lighting powered by Watts Up",
                },
              ].map((img, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  borderRadius="3xl"
                  overflow="hidden"
                  shadow="2xl"
                  width="full"
                  // THE CRITICAL FIX: The stagger is defined in the initial state of the MotionBox
                  animate={{
                    y: i % 2 !== 0 ? 50 : 0,
                  }}
                  // The hover only modifies the scale/lift, not the masonry y-offset
                  whileHover={{ scale: 1.03, y: i % 2 !== 0 ? 40 : -10 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    css={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
