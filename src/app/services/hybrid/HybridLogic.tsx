"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  HStack,
  Circle,
  Icon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiZap,
  FiBattery,
  FiGlobe,
  FiChevronRight,
} from "react-icons/fi";

const MotionBox = motion(Box);

export const HybridLogic = () => {
  const priorities = [
    {
      title: "Direct Load Support",
      desc: "Solar energy powers your appliances first in real-time.",
      icon: FiZap,
      tag: "PRIORITY_01",
    },
    {
      title: "Energy Storage",
      desc: "Excess production is routed to charge your battery bank.",
      icon: FiBattery,
      tag: "PRIORITY_02",
    },
    {
      title: "Grid Feedback",
      desc: "Surplus energy is managed via utility grid synchronization.",
      icon: FiGlobe,
      tag: "PRIORITY_03",
    },
  ];

  return (
    <Box
      py={32}
      bg="black"
      color="white"
      borderTopRadius={{ base: "40px", md: "80px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Circuit Effect */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.05"
        pointerEvents="none"
        style={{
          backgroundImage: `linear-gradient(#06d00c 1px, transparent 1px), linear-gradient(90deg, #06d00c 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container maxW="7xl" position="relative" zIndex="1">
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={20}
          align="center"
        >
          {/* Left Side: The "Processor" Core */}
          <VStack align={{ base: "center", lg: "start" }} flex="1" gap={8}>
            <Box
              p={4}
              bg="whiteAlpha.100"
              rounded="2xl"
              border="1px solid"
              borderColor="#06d00c"
            >
              <Icon as={FiCpu} boxSize={10} color="#06d00c" />
            </Box>
            <VStack align={{ base: "center", lg: "start" }} gap={4}>
              <Heading
                size="3xl"
                fontWeight="900"
                lineHeight="1"
                letterSpacing="tighter"
              >
                Intelligent <br />
                <Box as="span" color="#06d00c">
                  Power Routing
                </Box>
              </Heading>
              <Text
                color="gray.400"
                fontSize="lg"
                maxW="400px"
                textAlign={{ base: "center", lg: "start" }}
              >
                The ATESS Hybrid system functions as a high-speed energy CPU,
                actively managing priority protocols.
              </Text>
            </VStack>
          </VStack>

          {/* Right Side: The Flow Logic */}
          <VStack flex="1.2" w="full" gap={6} position="relative">
            {priorities.map((item, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                w="full"
              >
                <HStack
                  p={8}
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  rounded="3xl"
                  justify="space-between"
                  position="relative"
                  _hover={{ borderColor: "#06d00c", bg: "whiteAlpha.100" }}
                  transition="0.3s"
                >
                  <HStack gap={8}>
                    <VStack align="center" gap={0}>
                      <Circle
                        size="50px"
                        border="2px solid"
                        borderColor="#06d00c"
                        bg="black"
                      >
                        <Icon as={item.icon} color="#06d00c" boxSize={5} />
                      </Circle>
                      {i < 2 && (
                        <Box
                          w="2px"
                          h="40px"
                          bgGradient="linear(to-b, #06d00c, transparent)"
                          mt={2}
                        />
                      )}
                    </VStack>

                    <VStack align="start" gap={1}>
                      <Text
                        fontSize="10px"
                        fontWeight="900"
                        color="#06d00c"
                        fontFamily="monospace"
                      >
                        {item.tag}
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="900"
                        letterSpacing="tight"
                      >
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color="gray.500" maxW="300px">
                        {item.desc}
                      </Text>
                    </VStack>
                  </HStack>

                  <Icon
                    as={FiChevronRight}
                    color="whiteAlpha.300"
                    boxSize={6}
                  />
                </HStack>
              </MotionBox>
            ))}
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};
