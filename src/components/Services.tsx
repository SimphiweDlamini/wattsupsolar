"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

const MotionBox = motion(Box);

const services = [
  {
    title: "Solar Pumps",
    path: "solar-pumps",
    image: "/SolarPump.png",
    tag: "Agricultural",
    description:
      "Reliable water pumping solutions for irrigation and livestock. Our solar pumps harness the sun's energy to provide a consistent water supply.",
  },
  {
    title: "Grid-Tied Systems",
    path: "grid-tied",
    image: "/Grid-tied.png",
    tag: "Popular",
    description:
      "The most cost-effective way to lower your electricity bill. Use solar power while the sun shines and seamlessly switch to the grid at night.",
  },
  {
    title: "Off Grid Systems",
    path: "off-grid",
    image: "/OffGrid.jpg",
    tag: "Independent",
    description:
      "Designed to generate electricity independently from the grid, providing power to your home, cabin, or other remote locations.",
  },
  {
    title: "Hybrid Systems",
    path: "hybrid",
    image: "/Hybrid.jpg",
    tag: "Flexible",
    description:
      "Designed to provide flexibility and energy independence. Hybrid systems integrate solar power with your normal energy supply.",
  },
  {
    title: "Solar PV Geyser Systems",
    path: "solarpv",
    image: "/SolarPV.jpg",
    tag: "Retrofit",
    description:
      "Retrofit your existing geyser to run on solar power. A cost-effective way to heat water using PV panels, reducing electricity bills.",
  },
];

export default function Services() {
  return (
    <Box id="services" py={{ base: 20, md: 32 }} bg="white">
      <Container maxW="container.lg">
        {/* Header Section with Reveal */}
        <VStack mb={16} gap={6}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading
              textAlign="center"
              fontFamily="'Outfit', sans-serif"
              fontWeight="900"
              fontSize={{ base: "4xl", md: "5xl" }}
              letterSpacing="-0.02em"
              color="gray.500"
            >
              Our{" "}
              <Box as="span" color="#06d00c">
                Solar Services
              </Box>
            </Heading>
          </motion.div>

          <Box w="80px" h="6px" bg="#06d00c" borderRadius="full" />

          <Text
            maxW="2xl"
            textAlign="center"
            color="gray.500"
            fontFamily="'Lexend', sans-serif"
            fontSize="lg"
          >
            Empowering Eswatini with custom-engineered solutions for every
            energy need.
          </Text>
        </VStack>

        {/* Services Grid */}
        <Flex wrap="wrap" justifyContent="center" gap={10}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              w={{ base: "100%", md: "calc(50% - 20px)" }}
              position="relative"
              rounded="3xl"
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              overflow="hidden"
              shadow="xl"
            >
              <Link
                href={`/services/${service.path}`}
                style={{ textDecoration: "none" }}
              >
                <Box position="relative">
                  {/* Floating Tag */}
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    zIndex={2}
                    bg="#06d00c"
                    color="white"
                    px={3}
                    py={1}
                    rounded="full"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                  >
                    {service.tag}
                  </Badge>

                  <Box h={{ base: "250px", md: "350px" }} overflow="hidden">
                    <MotionBox
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      h="100%"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </MotionBox>
                  </Box>

                  <Box p={8} bg="white">
                    <Heading
                      size="lg"
                      mb={4}
                      fontFamily="'Outfit', sans-serif"
                      fontWeight="800"
                      color="gray.800"
                    >
                      {service.title}
                    </Heading>
                    <Text
                      fontFamily="'Lexend', sans-serif"
                      color="gray.600"
                      lineHeight="1.8"
                      fontSize="md"
                    >
                      {service.description}
                    </Text>

                    {/* Interactive "Learn More" Hint */}
                    <Flex
                      align="center"
                      mt={6}
                      color="#06d00c"
                      fontWeight="700"
                    >
                      Explore Details
                      <Box
                        ml={2}
                        transition="transform 0.3s"
                        _hover={{ transform: "translateX(5px)" }}
                      >
                        →
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
