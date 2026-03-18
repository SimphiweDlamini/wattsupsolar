"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Input,
  Textarea,
  Button,
  Circle,
  Separator,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";
import "@fontsource/lexend/400.css";

const MotionBox = motion(Box);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (res.ok) {
        alert("Message Sent Successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="white" minH="100vh" overflow="hidden">
      {/* --- HERO SECTION --- */}
      <Box
        py={{ base: 20, md: 40 }}
        bg="#050505"
        color="white"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          position="absolute"
          inset="0"
          style={{
            backgroundImage: `radial-gradient(#06d00c 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <Container maxW="container.md" position="relative" zIndex="1">
          <VStack gap={8}>
            <MotionBox
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                bg="whiteAlpha.100"
                px={6}
                py={2}
                rounded="full"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(12px)"
              >
                <Text
                  fontSize="xs"
                  fontWeight="900"
                  letterSpacing="4px"
                  textTransform="uppercase"
                  color="#06d00c"
                >
                  Eswatini Operations
                </Text>
              </Box>
            </MotionBox>

            <Heading
              fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
              fontWeight="900"
              fontFamily="'Outfit', sans-serif"
              lineHeight="0.8"
              letterSpacing="tighter"
            >
              Get in{" "}
              <Box as="span" color="#06d00c">
                Touch
              </Box>
            </Heading>

            <Text
              color="gray.400"
              fontSize={{ base: "lg", md: "2xl" }}
              maxW="600px"
              fontFamily="'Lexend', sans-serif"
              lineHeight="tall"
              fontWeight="light"
            >
              Ready to switch to solar? Our team is standing by to design your
              custom system.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* --- MAIN GRID SECTION --- */}
      <Container maxW="7xl" py={{ base: 16, md: 32 }} px={6}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 20, lg: 32 }}>
          {/* LEFT: INFO & BRANDING */}
          <VStack align="flex-start" gap={12}>
            <VStack align="flex-start" gap={4}>
              <Heading
                color="black"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="900"
                fontFamily="'Outfit', sans-serif"
              >
                Inquiries
              </Heading>
              <Box w="80px" h="6px" bg="#06d00c" borderRadius="full" />
            </VStack>

            <SimpleGrid columns={1} gap={6} width="full">
              {[
                { icon: FiPhone, label: "Call Us", val: "+268 2505 6492" },
                {
                  icon: FiMail,
                  label: "Email Us",
                  val: "office@wattsupsolar.co.sz",
                },
                { icon: FiMapPin, label: "Visit Us", val: "Manzini, Eswatini" },
              ].map((item, i) => (
                <HStack
                  key={i}
                  p={8}
                  bg="gray.200"
                  rounded="3xl"
                  width="full"
                  transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  _hover={{
                    transform: "translateX(15px)",
                    bg: "gray.100",
                    shadow: "xl",
                  }}
                  cursor="default"
                >
                  <Circle size="60px" bg="white" shadow="md">
                    <Icon as={item.icon} color="#06d00c" boxSize={6} />
                  </Circle>
                  <VStack align="flex-start" gap={0} ps={4}>
                    <Text
                      fontSize="xs"
                      fontWeight="900"
                      color="#06d00c"
                      textTransform="uppercase"
                      letterSpacing="widest"
                    >
                      {item.label}
                    </Text>
                    <Text
                      color="black"
                      fontWeight="800"
                      fontSize={{ base: "md", md: "xl" }}
                    >
                      {item.val}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>

            {/* Added "Spice" Quote */}
            <Box p={8} borderLeft="4px solid" borderColor="gray.100">
              <Text
                color="gray.400"
                fontSize="lg"
                fontStyle="italic"
                fontFamily="'Lexend', sans-serif"
              >
                "We are building the backbone of the Kingdom’s energy
                independence, one panel at a time."
              </Text>
            </Box>
          </VStack>

          {/* RIGHT: THE FORM CARD */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            bg="lightgray"
            p={{ base: 8, md: 16 }}
            rounded="4xl"
            shadow="0 50px 100px -20px rgba(0,0,0,0.15)"
            border="1px solid"
            borderColor="gray.50"
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={10} align="stretch">
                <Box>
                  <Text
                    color="black"
                    mb={3}
                    fontWeight="900"
                    fontSize="xs"
                    letterSpacing="0.2em"
                  >
                    NAME
                  </Text>
                  <Input
                    name="name"
                    placeholder="Full Name"
                    required
                    variant="flushed"
                    h="50px"
                    fontSize="lg"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "#06d00c",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Box>
                <Box>
                  <Text
                    color="black"
                    mb={3}
                    fontWeight="900"
                    fontSize="xs"
                    letterSpacing="0.2em"
                  >
                    EMAIL
                  </Text>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    variant="flushed"
                    h="50px"
                    fontSize="lg"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "#06d00c",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Box>
                <Box>
                  <Text
                    color="black"
                    mb={3}
                    fontWeight="900"
                    fontSize="xs"
                    letterSpacing="0.2em"
                  >
                    MESSAGE
                  </Text>
                  <Textarea
                    name="message"
                    placeholder="Your project details or questions..."
                    required
                    rows={4}
                    variant="flushed"
                    fontSize="lg"
                    borderColor="gray.200"
                    _focus={{
                      borderColor: "#06d00c",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  bg="#06d00c"
                  color="black"
                  size="lg"
                  h="80px"
                  rounded="2xl"
                  fontSize="md"
                  fontWeight="900"
                  textTransform="uppercase"
                  letterSpacing="3px"
                  _hover={{
                    bg: "black",
                    color: "white",
                    transform: "translateY(-5px)",
                    shadow: "0 20px 40px rgba(6, 208, 12, 0.4)",
                  }}
                  transition="all 0.4s"
                  disabled={loading}
                >
                  <HStack gap={2}>
                    <Text>{loading ? "Sending..." : "Send Message"}</Text>
                    {!loading && <Icon as={FiArrowRight} />}
                  </HStack>
                </Button>
              </VStack>
            </form>
          </MotionBox>
        </SimpleGrid>
      </Container>
      {/* The Footer Map usually follows right here */}
    </Box>
  );
}
