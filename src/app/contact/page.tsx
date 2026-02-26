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
  Link,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  // Replace useToast with a simple browser alert for now to stop the errors
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
    <Box bg="gray.50" minH="100vh" pb={20}>
      {/* Modernized Header with Gradient and Depth */}
      <Box
        py={{ base: 24, md: 32 }}
        bgGradient="linear(to-br, gray.900, brand.900, black)"
        bg="gray.900" // Fallback
        color="white"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        {/* Subtle Decorative Element */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w="300px"
          h="300px"
          bg="cyan.500"
          rounded="full"
          filter="blur(120px)"
          opacity="0.15"
        />

        <Container maxW="container.md" position="relative">
          <VStack gap={6}>
            {/* The "Badge" */}
            <Box
              bg="whiteAlpha.200"
              px={4}
              py={1}
              rounded="full"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="2px"
                textTransform="uppercase"
                color="cyan.400"
              >
                Eswatini Operations
              </Text>
            </Box>

            <Heading
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="800"
              fontFamily="'Outfit', sans-serif"
              lineHeight="1"
            >
              Get in{" "}
              <Box as="span" color="cyan.400">
                Touch
              </Box>
            </Heading>

            <Text
              color="gray.400"
              fontSize="lg"
              maxW="500px"
              fontFamily="'Lexend', sans-serif"
            >
              Ready to switch to solar? Our team is standing by to design your
              custom system.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <VStack align="flex-start" gap={6}>
            <Heading size="md">Inquiries</Heading>
            <HStack gap={4}>
              <Icon as={FiPhone} color="cyan.500" />
              <Text>+268 2505 6492</Text>
            </HStack>
            <HStack gap={4}>
              <Icon as={FiMail} color="cyan.500" />
              <Text>office@wattsupsolar.co.sz</Text>
            </HStack>
          </VStack>

          <Box bg="white" p={8} rounded="xl" shadow="md">
            <form onSubmit={handleSubmit}>
              <VStack gap={4} align="stretch">
                <Box>
                  <Text mb={1} fontWeight="bold" fontSize="xs">
                    NAME
                  </Text>
                  <Input name="name" placeholder="Name" required />
                </Box>
                <Box>
                  <Text mb={1} fontWeight="bold" fontSize="xs">
                    EMAIL
                  </Text>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </Box>
                <Box>
                  <Text mb={1} fontWeight="bold" fontSize="xs">
                    MESSAGE
                  </Text>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows={4}
                  />
                </Box>

                <Button
                  type="submit"
                  bg="cyan.500"
                  color="white"
                  _hover={{ bg: "cyan.600" }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
