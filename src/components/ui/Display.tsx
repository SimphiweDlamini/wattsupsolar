"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { FiZap, FiMapPin, FiSun } from "react-icons/fi";

import "@fontsource/outfit/700.css";
import "@fontsource/lexend/400.css";

// --- Types & Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

// --- Sub-Component: Smooth Counter ---
const Counter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef(null);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5, ease: "circOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionSpan = motion.span;

export default function Display() {
  const { scrollYProgress } = useScroll();

  // Smooth Parallax movement for the background glow
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), {
    stiffness: 100,
    damping: 30,
  });

  const words = "Sustainable Energy".split(" ");

  return (
    <Box
      py={{ base: 20, md: 32 }}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* 1. PARALLAX BACKGROUND GLOW */}
      <MotionBox
        style={{ y: smoothY }}
        position="absolute"
        top="5%"
        right="-5%"
        w="600px"
        h="600px"
        bg="green.50"
        borderRadius="full"
        filter="blur(120px)"
        opacity="0.6"
        zIndex={0}
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex direction="column" gap={24}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={16}
            alignItems="flex-start"
          >
            {/* 2. STAGGERED HEADING SECTION */}
            <VStack align="flex-start" gap={8} width="100%">
              <Box>
                <MotionHeading
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  fontFamily="'Outfit', sans-serif"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  lineHeight="1.1"
                  color="gray.800"
                >
                  {words.map((word, i) => (
                    <MotionSpan
                      key={i}
                      variants={wordVariants}
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      {word}
                    </MotionSpan>
                  ))}
                  <br />
                  <MotionSpan
                    variants={wordVariants}
                    style={{
                      display: "inline-block",
                      background:
                        "linear-gradient(90deg, #06d00c, #4caf50, #06d00c)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "200% center"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    for eSwatini.
                  </MotionSpan>
                </MotionHeading>

                <MotionBox
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                  h="8px"
                  bg="#4caf50"
                  mt={4}
                  borderRadius="full"
                />
              </Box>

              <Text
                fontFamily="'Lexend', sans-serif"
                fontSize="xl"
                fontWeight="500"
                color="gray.600"
                maxW="100%"
              >
                From Solar Home Systems to commercial and agricultural systems.
              </Text>
            </VStack>

            {/* 3. RIGHT SIDE: DETAILED TEXT WITH COUNTER */}
            <VStack align="flex-start" gap={6} width="100%">
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Text
                  fontFamily="'Lexend', sans-serif"
                  color="gray.600"
                  fontSize="lg"
                  lineHeight="1.8"
                >
                  By combining world-class solar technology with local expertise
                  and a rich history of electrical engineering contracting for
                  all types of Swati installations and distribution systems, we
                  bring clean, efficient solar energy to homes and businesses
                  across eSwatini.
                </Text>
                <Text
                  fontFamily="'Lexend', sans-serif"
                  color="gray.600"
                  fontSize="lg"
                  lineHeight="1.8"
                  mt={6}
                >
                  Our team has designed and installed over{" "}
                  <Box
                    as="span"
                    color="black"
                    fontWeight="900"
                    textDecoration="underline"
                    textDecorationColor="#06d00c"
                    textUnderlineOffset="4px"
                  >
                    <Counter from={0} to={100} />
                  </Box>{" "}
                  residential and commercial photovoltaic installations and is a
                  trusted source for helping residents and business owners to
                  become energy independent.
                </Text>
              </MotionBox>
            </VStack>
          </SimpleGrid>

          {/* 4. INTERACTIVE STAT CARDS */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {[
              {
                icon: FiZap,
                label: "Installations",
                val: "100+",
                desc: "Proven track record in eSwatini",
              },
              {
                icon: FiMapPin,
                label: "Expertise",
                val: "Local",
                desc: "Expert Swati-Led engineering",
              },
              {
                icon: FiSun,
                label: "Solar Designs",
                val: "Custom",
                desc: "Beautifully tailored systems",
              },
            ].map((stat, i) => (
              <MotionBox
                key={i}
                p={8}
                bg="white"
                rounded="3xl"
                border="1px solid"
                borderColor="gray.100"
                shadow="xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.15 }}
                whileHover={{
                  y: -15,
                  borderColor: "#06d00c",
                  boxShadow: "0px 20px 40px rgba(6, 208, 12, 0.1)",
                }}
              >
                <VStack align="flex-start" gap={4}>
                  <Flex
                    w={12}
                    h={12}
                    bg="green.50"
                    rounded="xl"
                    align="center"
                    justify="center"
                    color="#06d00c"
                  >
                    <Icon as={stat.icon} boxSize={6} />
                  </Flex>
                  <Box>
                    <Heading color="gray.800" size="lg" mb={1}>
                      {stat.val}
                    </Heading>
                    <Text
                      fontWeight="800"
                      fontSize="xs"
                      color="#06d00c"
                      textTransform="uppercase"
                      letterSpacing="widest"
                    >
                      {stat.label}
                    </Text>
                  </Box>
                  <Text fontSize="sm" color="gray.500">
                    {stat.desc}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
