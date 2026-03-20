"use client";

import { Box, Container, VStack, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const clients = [
  { name: "MSF Doctors Without Borders", logo: "/logos/client.svg" },
  { name: "Eswade", logo: "/logos/client1.png" },
  { name: "MicroProjects", logo: "/logos/client2.png" },
  { name: "World Vision", logo: "/logos/client3.png" },
  { name: "Siteki Town Council", logo: "/logos/client5.png" },
  { name: "UNDP", logo: "logos/client6.svg" },
  { name: "National Disaster Management Agency", logo: "logos/client7.png" },
];

const ClientTicker = () => {
  return (
    <Box
      py={{ base: "16", md: "32" }}
      bg="white"
      borderTop="1px solid"
      borderColor="gray.100"
      position="relative"
    >
      <Container maxW="7xl" mb={{ base: 10, md: 20 }} px={6}>
        <VStack gap={4} textAlign="center">
          <Text
            color="#06d00c"
            fontWeight="900"
            letterSpacing="0.4em"
            fontSize="xs"
            textTransform="uppercase"
          >
            Proven Results
          </Text>
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="900"
            fontFamily="'Outfit', sans-serif"
            color="black"
          >
            Our Client Community
          </Heading>
        </VStack>
      </Container>
      <Box position="relative" overflow="hidden">
        <MotionBox
          display="flex"
          width="max-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* Double the array to create the seamless loop effect */}
          {[...clients, ...clients].map((client, i) => (
            <Box
              key={i}
              px={{ base: 6, md: 12 }}
              py={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity="0.6"
            >
              <Image
                src={client.logo}
                alt={client.name}
                maxH={{ base: "35px", md: "65px" }}
                minW={{ base: "80px", md: "120px" }}
                objectFit="contain"
              />
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ClientTicker;
