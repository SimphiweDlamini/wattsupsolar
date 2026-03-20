"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

// Mapping 4 images per tab
const impactImageMap: Record<string, string[]> = {
  projects: ["/ecar.jpg", "/ecarout.jpeg", "/ecarout2.jpeg", "/ecar2.jpeg"],
  events: ["/event1.jpeg", "/event2.jpeg", "/event3.jpeg", "/event4.jpeg"],
  geysers: ["/rural1.jpeg", "/rural2.jpeg", "/rural3.jpeg", "/potential1.jpg"],
};

const ImpactSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Box py={{ base: "20", md: "40" }} bg="white">
      <Container maxW="7xl" px={6}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, md: 24 }}
          align="flex-start"
        >
          {/* Text Section - Sticky so it stays visible as you scroll the 4 images */}
          <VStack
            flex="1.3"
            align="flex-start"
            gap={10}
            width="100%"
            position="sticky"
            top="100px"
          >
            <Heading
              fontSize={{ base: "3xl", md: "6xl" }}
              fontWeight="900"
              fontFamily="'Outfit', sans-serif"
              color="black"
              lineHeight="1"
            >
              Our Growing <br /> Impact
            </Heading>

            <Tabs.Root
              value={activeTab}
              onValueChange={(details) => setActiveTab(details.value)}
              variant="plain"
              width="100%"
            >
              <Tabs.List
                gap={{ base: 2, md: 6 }}
                mb={8}
                borderBottomWidth="2px"
                borderBottomColor="gray.100"
                overflowX="auto"
                whiteSpace="nowrap"
              >
                {[
                  { id: "projects", label: "The First E-Car" },
                  { id: "events", label: "Powering Events" },
                  { id: "geysers", label: "Rural Innovation" },
                ].map((tab) => (
                  <Tabs.Trigger
                    key={tab.id}
                    value={tab.id}
                    fontWeight="900"
                    fontSize={{ base: "md", md: "xl" }}
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    pb={4}
                  >
                    {tab.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              <Box minH={{ base: "auto", md: "220px" }}>
                <Tabs.Content value="projects">
                  <VStack align="flex-start" gap={8}>
                    <Text
                      color="gray.600"
                      fontSize={{ base: "lg", md: "2xl" }}
                      lineHeight="tall"
                      fontFamily="'Lexend', sans-serif"
                    >
                      A defining milestone in our journey: The Watts Up Solar
                      technicians successfully engineered the full solar
                      charging infrastructure for the country’s very first
                      high-performance electrical car.
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      This project demonstrated that we can provide scalable,
                      high-voltage solutions with 100% local expertise, pushing
                      Eswatini towards a truly clean transport future.
                    </Text>
                  </VStack>
                </Tabs.Content>
                <Tabs.Content value="events">
                  <VStack align="flex-start" gap={8}>
                    <Text
                      color="gray.600"
                      fontSize={{ base: "lg", md: "2xl" }}
                      lineHeight="tall"
                    >
                      We are proud to provide reliable, off-grid power to major
                      local charity events, markets, and gatherings. We ensure
                      that sound systems, lighting, and hospitality function
                      flawlessly using only the sun.
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      For example some of the events we have provided power
                      sound system and stalls for :{" "}
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      1. Market Lounge Expo{" "}
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      2. Resolution Run{" "}
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      3. Eswatini Cycling National Championships
                    </Text>
                  </VStack>
                </Tabs.Content>
                <Tabs.Content value="geysers">
                  <VStack align="flex-start" gap={8}>
                    <Text
                      color="gray.600"
                      fontSize={{ base: "lg", md: "2xl" }}
                      lineHeight="tall"
                    >
                      Empowering communities with solar grid-tied/off grid
                      systems that provide cost-effective water supply for
                      community needs and irrigation.
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      We bring water closer to over 100 households
                    </Text>
                  </VStack>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </VStack>

          {/* Staggered Grid Section */}
          <SimpleGrid
            flex="1"
            columns={2}
            gap={{ base: 4, md: 8 }}
            width="full"
            pb="10px"
          >
            <AnimatePresence mode="popLayout">
              {impactImageMap[activeTab].map((src, i) => (
                <MotionBox
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  borderRadius={{ base: "xl", md: "3xl" }}
                  overflow="hidden"
                  shadow="xl"
                  mt={{ base: 0, md: i % 2 !== 0 ? "60px" : "0" }}
                  mb={{ base: 0, md: i % 2 !== 0 ? "0" : "60px" }}
                  whileHover={{ y: -10 }}
                >
                  <Image
                    src={src}
                    aspectRatio="1/1"
                    objectFit="cover"
                    w="full"
                  />
                </MotionBox>
              ))}
            </AnimatePresence>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ImpactSection;
