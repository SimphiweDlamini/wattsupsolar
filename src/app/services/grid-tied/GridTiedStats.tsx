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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiZap, FiClock, FiActivity } from "react-icons/fi";

export const GridTiedStats = () => (
  <Container maxW="8xl" py={28}>
    {/* Header with Live Status */}
    <Stack
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ md: "flex-end" }}
      mb={16}
      gap="6"
    >
      <VStack align="start" gap="2">
        <HStack gap={3}>
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Circle size="8px" bg="#06d00c" />
          </motion.div>
          <Text
            color="#06d00c"
            fontWeight="900"
            fontSize="xs"
            letterSpacing="0.3em"
            fontFamily="monospace"
          >
            LIVE_DATA_FEED // V2.04
          </Text>
        </HStack>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          color="black"
          fontWeight="900"
          letterSpacing="tighter"
          lineHeight="1"
        >
          Performance Architecture
        </Heading>
      </VStack>

      <Box
        p="4"
        bg="black"
        rounded="xl"
        border="1px solid"
        borderColor="whiteAlpha.300"
      >
        <HStack gap={6}>
          <VStack align="start" gap="0">
            <Text color="whiteAlpha.400" fontSize="9px" fontWeight="900">
              NODE_STATUS
            </Text>
            <Text
              color="#06d00c"
              fontSize="sm"
              fontWeight="bold"
              fontFamily="monospace"
            >
              ACTIVE
            </Text>
          </VStack>
          <Box w="1px" h="30px" bg="whiteAlpha.200" />
          <Icon as={FiActivity} color="#06d00c" boxSize={5} />
        </HStack>
      </Box>
    </Stack>

    <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6}>
      {[
        {
          label: "Daytime Autarky",
          value: "95%",
          help: "Direct Solar Usage",
          icon: FiZap,
          coord: "X: 104.2",
        },
        {
          label: "Grid Reliance",
          value: "Minimal",
          help: "Peak-Hours Only",
          icon: FiTrendingUp,
          coord: "Y: 88.0",
        },
        {
          label: "Est. ROI Period",
          value: "4 Years",
          help: "Eswatini Tariff Base",
          icon: FiClock,
          coord: "Z: 12.5",
        },
      ].map((stat, i) => (
        <Box
          key={i}
          p="8"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          position="relative"
          transition="all 0.3s ease"
          _hover={{
            borderColor: "#06d00c",
            shadow: "2xl",
            transform: "translateY(-4px)",
          }}
        >
          {/* Subtle Blueprint Grid Background */}
          <Box
            position="absolute"
            inset="0"
            opacity="0.03"
            pointerEvents="none"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <Text
            position="absolute"
            top="4"
            right="4"
            fontSize="9px"
            fontWeight="bold"
            color="gray.300"
            fontFamily="monospace"
          >
            {stat.coord}
          </Text>

          <VStack align="start" gap={8} position="relative" zIndex="1">
            <VStack align="start" gap={1} w="full">
              <HStack color="#06d00c">
                <Icon as={stat.icon} boxSize={4} />
                <Text
                  fontSize="10px"
                  fontWeight="900"
                  letterSpacing="widest"
                  textTransform="uppercase"
                >
                  {stat.label}
                </Text>
              </HStack>
              <Box w="20px" h="2px" bg="#06d00c" />
            </VStack>

            <Box>
              <Text
                fontSize="6xl"
                fontWeight="900"
                color="black"
                lineHeight="0.8"
              >
                {stat.value}
              </Text>
              <Text
                color="gray.400"
                fontSize="xs"
                mt="4"
                fontWeight="bold"
                fontFamily="monospace"
              >
                LOG_REF: {stat.help.toUpperCase()}
              </Text>
            </Box>

            <Box w="full">
              <HStack justify="space-between" mb="1">
                <Text fontSize="9px" fontWeight="900" color="gray.300">
                  0%
                </Text>
                <Text fontSize="9px" fontWeight="900" color="gray.300">
                  100%
                </Text>
              </HStack>
              <Box h="2px" w="full" bg="gray.100">
                <Box
                  h="full"
                  w={stat.value.includes("%") ? stat.value : "100%"}
                  bg="#06d00c"
                  boxShadow="0 0 10px rgba(6, 208, 12, 0.5)"
                />
              </Box>
            </Box>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);
