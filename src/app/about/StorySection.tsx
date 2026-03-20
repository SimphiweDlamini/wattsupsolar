"use client";

import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StorySection = () => {
  return (
    <Box py={{ base: "20", md: "56" }}>
      <Container maxW="8xl" px={6}>
        <Stack
          direction={{ base: "column", lg: "row-reverse" }}
          gap={{ base: 12, lg: 40 }}
          align="center"
        >
          <MotionBox
            flex="1"
            position="relative"
            w={{ base: "80%", md: "full" }}
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              border={{ base: "12px solid", md: "24px solid" }}
              borderColor="gray.50"
              shadow="2xl"
              aspectRatio="1/1"
            >
              <Image
                src="/about.jpeg"
                alt="Solar Tech"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
            <Text
              position="absolute"
              top="-5%"
              right={{ base: "0", md: "-15%" }}
              fontSize={{ base: "5xl", md: "11xl" }}
              fontWeight="900"
              color="gray.50"
              zIndex="-1"
              letterSpacing="tighter"
              userSelect="none"
            >
              WATTS
            </Text>
          </MotionBox>
          <VStack
            flex="1.2"
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            gap={{ base: 8, md: 16 }}
          >
            <Box>
              <Text
                color="#06d00c"
                fontWeight="900"
                mb={4}
                letterSpacing="widest"
              >
                OUR STORY
              </Text>
              <Heading
                fontSize={{ base: "3xl", md: "8xl" }}
                fontWeight="900"
                color="black"
                fontFamily="'Outfit', sans-serif"
                lineHeight="1"
              >
                Engineering <br /> Independence.
              </Heading>
            </Box>
            <Text
              color="gray.600"
              fontSize={{ base: "lg", md: "3xl" }}
              lineHeight="relaxed"
              fontWeight="light"
            >
              We don’t just install—we innovate. From custom off-grid geyser
              solutions to high-capacity industrial systems, we bring technical
              precision to every watt.
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: 8, md: 16 }}
              width="100%"
            >
              <Box
                borderTop={{ base: "4px solid", md: "none" }}
                borderLeft={{ md: "10px solid" }}
                color="#06d00c"
                borderColor="#06d00c"
                pt={{ base: 4, md: 0 }}
                ps={{ md: 12 }}
              >
                <Text fontWeight="900" fontSize="xl" mb={2} color="black">
                  THE VISION
                </Text>
                <Text color="gray.500" fontSize={{ base: "md", md: "xl" }}>
                  Eswatini's benchmark for renewable excellence.
                </Text>
              </Box>
              <Box
                borderTop={{ base: "4px solid", md: "none" }}
                borderLeft={{ md: "10px solid" }}
                borderColor="#06d00c"
                color="#06d00c"
                pt={{ base: 4, md: 0 }}
                ps={{ md: 12 }}
              >
                <Text fontWeight="900" fontSize="xl" mb={2} color="black">
                  THE GOAL
                </Text>
                <Text color="gray.500" fontSize={{ base: "md", md: "xl" }}>
                  100% local talent, 100% green energy infrastructure.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default StorySection;
