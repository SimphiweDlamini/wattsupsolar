"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Badge,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMapPin, FiCpu, FiExternalLink, FiLayers } from "react-icons/fi";
import { Project } from "@/components/types/project";

const MotionBox = motion(Box);

interface ServicePageProps {
  serviceTitle: string;
  highlightWord: string;
  description: string;
  projects: Project[];
}

export default function ServiceTemplatePage({
  serviceTitle,
  highlightWord,
  description,
  projects,
}: ServicePageProps) {
  return (
    <Box bg="white" minH="100vh">
      {/* --- INDUSTRIAL HERO --- */}
      <Box pt="40" pb="32" bg="#050505" position="relative">
        <Box
          position="absolute"
          inset="0"
          opacity="0.05"
          pointerEvents="none"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, #06d00c 25%, #06d00c 26%, transparent 27%, transparent 74%, #06d00c 75%, #06d00c 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #06d00c 25%, #06d00c 26%, transparent 27%, transparent 74%, #06d00c 75%, #06d00c 76%, transparent 77%, transparent)`,
            backgroundSize: "80px 80px",
          }}
        />

        <Container maxW="8xl" px="6">
          <Stack
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align={{ lg: "flex-end" }}
            gap="12"
          >
            <VStack align="start" gap="6" flex="1">
              <HStack gap="3">
                <Box w="12px" h="12px" bg="#06d00c" rounded="full" />
                <Text
                  color="#06d00c"
                  fontWeight="900"
                  fontSize="xs"
                  letterSpacing="0.4em"
                >
                  DEPLOYED_SOLUTIONS
                </Text>
              </HStack>
              <Heading
                fontSize={{ base: "5xl", md: "8xl" }}
                fontWeight="900"
                color="white"
                fontFamily="'Outfit', sans-serif"
                lineHeight="0.9"
                letterSpacing="tighter"
              >
                {serviceTitle} <br />
                <Box as="span" color="gray.600">
                  {highlightWord}
                </Box>
              </Heading>
            </VStack>
            <Box flex="0.8">
              <Text
                fontSize="xl"
                color="gray.400"
                fontFamily="'Lexend', sans-serif"
                lineHeight="tall"
              >
                {description}
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* --- THE BLUEPRINT GRID --- */}
      <Box py="24" bg="gray.50">
        <Container maxW="8xl" px="6">
          <SimpleGrid columns={{ base: 1, xl: 2 }} gap="16">
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                overflow="hidden"
                position="relative"
                role="group"
              >
                <Stack direction={{ base: "column", md: "row" }} gap="0">
                  {/* Left Technical Side-Rail (Fixed TypeScript Issue) */}
                  <Box
                    w="60px"
                    bg="gray.900"
                    display={{ base: "none", md: "flex" }}
                    flexDirection="column"
                    alignItems="center"
                    py="8"
                    justifyContent="space-between"
                  >
                    <Icon as={FiLayers} color="#06d00c" />
                    {/* Using standard style to avoid 'sx' property error */}
                    <Box
                      style={{ writingMode: "vertical-rl" }}
                      color="whiteAlpha.400"
                      fontFamily="monospace"
                      fontSize="10px"
                      fontWeight="bold"
                    >
                      SPEC_DATA_PROJECT_0{index + 1}
                    </Box>
                    <Box w="1px" h="40%" bg="whiteAlpha.200" />
                  </Box>

                  {/* Main Card Content */}
                  <Box flex="1">
                    <Box h="320px" position="relative" overflow="hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        w="full"
                        h="full"
                        objectFit="cover"
                        filter="grayscale(40%)"
                        _groupHover={{
                          filter: "grayscale(0%)",
                          transform: "scale(1.05)",
                        }}
                        transition="all 0.5s ease"
                      />
                      <Badge
                        position="absolute"
                        top="6"
                        left="6"
                        bg="#06d00c"
                        color="black"
                        px="3"
                        py="1"
                        fontWeight="900"
                      >
                        {project.sector}
                      </Badge>
                    </Box>

                    <VStack align="start" p="10" gap="6">
                      <VStack align="start" gap="2" w="full">
                        <HStack justify="space-between" w="full">
                          <HStack
                            color="gray.400"
                            fontSize="xs"
                            fontWeight="900"
                            fontFamily="monospace"
                          >
                            <Icon as={FiMapPin} color="#06d00c" />
                            <Text>{project.location.toUpperCase()}</Text>
                          </HStack>
                          <Icon
                            as={FiExternalLink}
                            color="gray.300"
                            boxSize="5"
                          />
                        </HStack>
                        <Heading
                          size="lg"
                          fontWeight="900"
                          color="black"
                          fontFamily="'Outfit', sans-serif"
                        >
                          {project.title}
                        </Heading>
                      </VStack>

                      <Text color="gray.600" fontSize="md" lineHeight="tall">
                        {project.description}
                      </Text>

                      <HStack
                        w="full"
                        p="4"
                        bg="gray.50"
                        border="1px solid"
                        borderColor="gray.200"
                        justify="space-between"
                      >
                        <HStack gap="3">
                          <Icon as={FiCpu} color="#06d00c" />
                          <Text
                            fontSize="xs"
                            fontWeight="bold"
                            color="gray.700"
                            fontFamily="monospace"
                          >
                            {project.stats}
                          </Text>
                        </HStack>
                        <Text
                          fontSize="10px"
                          fontWeight="900"
                          color="gray.400"
                          textTransform="uppercase"
                        >
                          {project.type}
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
