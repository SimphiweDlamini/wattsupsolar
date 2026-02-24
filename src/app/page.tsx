import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Box py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading size="3xl" mb={6}>
            Watts Up Solar
          </Heading>
          <Text fontSize="xl" mb={8}>
            Professional services with modern design.
          </Text>
          <Button size="lg">Get Started</Button>
        </Container>
      </Box>

      {/* Services */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={16}>
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box p={6} rounded="lg" shadow="md" bg="white">
              <Heading size="md" mb={4}>
                Service 1
              </Heading>
              <Text>Brief description here.</Text>
            </Box>
            {/* Repeat x3 */}
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
