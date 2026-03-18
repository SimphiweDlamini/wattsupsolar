"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";
import "@fontsource/lexend/400.css";

const MotionBox = motion(Box);

// --- CENTRALIZED IMAGE MAPPING ---
const teamImages: Record<string, string> = {
  "John Thomson": "/team/JohnThomson.jpg",
  "Clinton McNamara": "/team/ClintonMcNamara.jpg",
  "Jude Henwood": "/team/JudeHenwood.jpg",
  "Rodney Carval": "/team/RodneyCarval.jpeg",
  "Rosanne Frúhwirth": "/team/RosanneFruhwirth.jpeg",
  "Zodwa McNamara": "/team/ZodwaMcNamara.jpg",
  "Lindokuhle Khulu": "/team/LindokuhleKhulu.jpeg",
  "Phumlani Shongwe": "/team/PhumlaniShongwe.jpg",
  "Nhlanhleni Shabangu": "/team/NhlanhleniShabangu.jpeg",
  "Celucolo Mduli": "/team/CelucoloMduli.jpeg",
};

const impactImages = [
  { src: "/ecar.jpg" },
  { src: "/pic18.jpeg" },
  { src: "/pic11.jpeg" },
  { src: "/pic2.jpeg" },
];

// --- DATA ARRAYS ---
const leadership = [
  { name: "John Thomson", role: "CEO", nickname: "Mashesha" },
  { name: "Clinton McNamara", role: "Managing Director" },
  { name: "Jude Henwood", role: "Finance Manager" },
];

const management = [
  { name: "Rodney Carval", role: "Product Development" },
  { name: "Rosanne Frúhwirth", role: "Administrator" },
  { name: "Zodwa McNamara", role: "Marketing" },
];

const technical = [
  { name: "Lindokuhle Khulu", role: "Technician" },
  { name: "Phumlani Shongwe", role: "Technician" },
  { name: "Nhlanhleni Shabangu", role: "Technician" },
  { name: "Celucolo Mduli", role: "Technician" },
];

const clients = [
  { name: "MSF Doctors Without Borders", logo: "/logos/client.svg" },
  { name: "Eswade", logo: "/logos/client1.png" },
  { name: "MicroProjects", logo: "/logos/client2.png" },
  { name: "World Vision", logo: "/logos/client3.png" },
  { name: "Siteki Town Council", logo: "/logos/client5.png" },
  { name: "UNDP", logo: "logos/client6.svg" },
  { name: "National Disaster Managenent Agency", logo: "logos/client7.png" },
];

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  const TeamMemberCard = ({
    member,
    index,
  }: {
    member: any;
    index: number;
  }) => {
    // Direct lookup from our mapping array
    const imageSrc = teamImages[member.name] || "/team/placeholder.jpg";

    return (
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        position="relative"
        role="group"
      >
        <Box
          overflow="hidden"
          borderRadius="2xl"
          bg="gray.100"
          aspectRatio="4/5"
          position="relative"
        >
          <Image
            src={imageSrc}
            alt={member.name}
            objectFit="cover"
            w="full"
            h="full"
          />
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-t, blackAlpha.800, transparent)"
            opacity="0.6"
          />
        </Box>
        <Box
          mt="-50px"
          mx="4"
          bg="white"
          p="6"
          borderRadius="xl"
          shadow="2xl"
          position="relative"
          zIndex="2"
          textAlign="center"
          border="1px solid"
          borderColor="gray.100"
          _groupHover={{
            borderColor: "#06d00c",
            transform: "translateY(-8px)",
          }}
          transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        >
          <Text fontWeight="800" fontSize="xl" color="gray.800">
            {member.name}
          </Text>
          <Text
            fontSize="xs"
            color="#06d00c"
            fontWeight="black"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            {member.role}
          </Text>
          {member.nickname && (
            <Text fontSize="xs" fontStyle="italic" color="gray.400" mt="1">
              "{member.nickname}"
            </Text>
          )}
        </Box>
      </MotionBox>
    );
  };

  return (
    <Box bg="white" ref={containerRef}>
      {/* 1. HERO */}
      <Box
        minH="95vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="#050505"
        overflow="hidden"
      >
        <MotionBox
          style={{ y: y1 }}
          position="absolute"
          top="-10%"
          right="-10%"
          w="800px"
          h="800px"
          bgGradient="radial(rgba(6, 208, 12, 0.15) 0%, transparent 70%)"
          filter="blur(100px)"
        />
        <MotionBox
          style={{ y: y2 }}
          position="absolute"
          bottom="-20%"
          left="-10%"
          w="600px"
          h="600px"
          bgGradient="radial(rgba(6, 208, 12, 0.1) 0%, transparent 70%)"
          filter="blur(80px)"
        />
        <Box
          position="absolute"
          inset="0"
          opacity="0.04"
          style={{
            backgroundImage: `radial-gradient(#06d00c 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <Container maxW="6xl" position="relative" zIndex="1" textAlign="center">
          <VStack gap={12}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Text
                color="#06d00c"
                fontWeight="900"
                fontSize="sm"
                letterSpacing="0.6em"
                textTransform="uppercase"
                mb={8}
              >
                Engineering Excellence
              </Text>
              <Heading
                fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
                fontWeight="900"
                color="white"
                lineHeight="0.8"
                letterSpacing="tighter"
                fontFamily="'Outfit', sans-serif"
              >
                Powering <br />
                <Box as="span" color="#06d00c">
                  Eswatini's
                </Box>{" "}
                <br />
                Future
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                color="gray.400"
                maxW="2xl"
                mx="auto"
                fontFamily="'Lexend', sans-serif"
                lineHeight="tall"
              >
                Watts Up Solar: Precision engineering, locally refined. We are
                building the backbone of the Kingdom’s energy independence.
              </Text>
            </MotionBox>
          </VStack>
        </Container>
        <MotionBox
          position="absolute"
          bottom="10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          zIndex="2"
        >
          <Box
            w="1px"
            h="60px"
            bgGradient="linear(to-b, #06d00c, transparent)"
          />
        </MotionBox>
        <Box
          position="absolute"
          bottom="-1px"
          left="0"
          right="0"
          height="80px"
          bg="white"
          clipPath="polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)"
        />
      </Box>

      {/* 2. STORY */}
      <Box py={{ base: "32", md: "56" }}>
        <Container maxW="8xl">
          <Stack
            direction={{ base: "column", lg: "row-reverse" }}
            gap={{ base: 20, lg: 40 }}
            align="center"
          >
            <MotionBox flex="1" position="relative">
              <Box
                borderRadius="full"
                overflow="hidden"
                border="24px solid"
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
                right="-15%"
                fontSize={{ base: "6xl", md: "11xl" }}
                fontWeight="900"
                color="gray.50"
                zIndex="-1"
                letterSpacing="tighter"
                userSelect="none"
              >
                WATTS
              </Text>
            </MotionBox>
            <VStack flex="1.2" align="flex-start" gap={16}>
              <Box>
                <Text
                  color="#06d00c"
                  fontWeight="900"
                  mb={6}
                  letterSpacing="widest"
                >
                  OUR STORY
                </Text>
                <Heading
                  fontSize={{ base: "4xl", md: "8xl" }}
                  fontWeight="900"
                  color="black"
                  fontFamily="'Outfit', sans-serif"
                  lineHeight="0.9"
                >
                  Engineering <br /> Independence.
                </Heading>
              </Box>
              <Text
                color="gray.600"
                fontSize={{ base: "xl", md: "3xl" }}
                lineHeight="relaxed"
                fontWeight="light"
              >
                We don’t just install—we innovate. From custom off-grid geyser
                solutions to high-capacity industrial systems, we bring
                technical precision to every watt.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} width="100%">
                <Box borderLeft="10px solid" borderColor="#06d00c" ps={12}>
                  <Text fontWeight="900" fontSize="xl" mb={4}>
                    THE VISION
                  </Text>
                  <Text color="gray.500" fontSize="xl">
                    Eswatini's benchmark for renewable excellence.
                  </Text>
                </Box>
                <Box borderLeft="10px solid" borderColor="#06d00c" ps={12}>
                  <Text fontWeight="900" fontSize="xl" mb={4}>
                    THE GOAL
                  </Text>
                  <Text color="gray.500" fontSize="xl">
                    100% local talent, 100% green energy infrastructure.
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* 3. TEAM */}
      <Box py="32" bg="gray.50" position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="0"
          right="0"
          w="400px"
          h="400px"
          bgGradient="radial(rgba(6, 208, 12, 0.05) 0%, transparent 70%)"
          filter="blur(60px)"
        />
        <Container maxW="7xl">
          <VStack mb="24" textAlign="center" gap={6}>
            <Text color="#06d00c" fontWeight="900" letterSpacing="widest">
              EXPERTISE
            </Text>
            <Heading
              size="3xl"
              fontWeight="900"
              color="black"
              fontFamily="'Outfit', sans-serif"
            >
              The Power Team
            </Heading>
            <Box w="80px" h="4px" bg="#06d00c" />
          </VStack>
          <VStack gap="32">
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={16} width="full">
              {leadership.map((member, i) => (
                <TeamMemberCard key={member.name} member={member} index={i} />
              ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={16} width="full">
              {management.map((member, i) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  index={i + 3}
                />
              ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={10} width="full">
              {technical.map((member, i) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  index={i + 6}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* 4. IMPACT SECTION */}
      <Box py="40" bg="white">
        <Container maxW="7xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={24}
            align="center"
          >
            <VStack flex="1.3" align="flex-start" gap={10} width="100%">
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="900"
                fontFamily="'Outfit', sans-serif"
                color="black"
                lineHeight="1"
              >
                Our Growing <br /> Impact
              </Heading>
              <Tabs.Root defaultValue="projects" variant="plain" width="100%">
                <Tabs.List
                  gap={6}
                  mb={12}
                  borderBottomWidth="2px"
                  borderBottomColor="gray.100"
                >
                  <Tabs.Trigger
                    value="projects"
                    fontWeight="900"
                    fontSize="xl"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    pb={4}
                  >
                    The First E-Car
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="events"
                    fontWeight="900"
                    fontSize="xl"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    pb={4}
                  >
                    Powering Events
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="geysers"
                    fontWeight="900"
                    fontSize="xl"
                    color="gray.400"
                    _selected={{
                      color: "#06d00c",
                      borderBottomColor: "#06d00c",
                    }}
                    pb={4}
                  >
                    Rural Innovation
                  </Tabs.Trigger>
                </Tabs.List>
                <Box minH="220px">
                  <Tabs.Content value="projects">
                    <VStack align="flex-start" gap={8}>
                      <Text
                        color="gray.600"
                        fontSize="2xl"
                        lineHeight="tall"
                        fontFamily="'Lexend', sans-serif"
                      >
                        A defining milestone in our journey: The Watts Up Solar
                        technicians successfully engineered the full solar
                        charging infrastructure for the country’s very first
                        high-performance electrical car.
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        This project demonstrated that we can provide scalable,
                        high-voltage solutions with 100% local expertise,
                        pushing Eswatini towards a truly clean transport future.
                      </Text>
                    </VStack>
                  </Tabs.Content>
                  <Tabs.Content value="events">
                    <VStack align="flex-start" gap={8}>
                      <Text color="gray.600" fontSize="2xl" lineHeight="tall">
                        We are proud to provide reliable, off-grid power to
                        major local charity events, markets, and gatherings. We
                        ensure that sound systems, lighting, and hospitality
                        function flawlessly using only the sun.
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        When you see the Watts Up Solar logo powering an event
                        (like in the pictures), you’re seeing sustainable energy
                        in action, supporting our community with innovative,
                        portable engineering.
                      </Text>
                    </VStack>
                  </Tabs.Content>
                  <Tabs.Content value="geysers">
                    <VStack align="flex-start" gap={8}>
                      <Text color="gray.600" fontSize="2xl" lineHeight="tall">
                        Innovating where it matters most: Our specialized
                        retrofits for rural geyser systems are lowering
                        electricity costs and providing consistent hot water
                        across Eswatini.
                      </Text>
                      <Text color="gray.500" fontSize="lg">
                        We are converting existing geysers to run efficiently on
                        PV panels. It's a localized, high-impact solution that
                        proves solar innovation isn't just for commercial
                        clients—it’s for everyone.
                      </Text>
                    </VStack>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </VStack>
            <SimpleGrid flex="1" columns={2} gap={8}>
              {impactImages.map((img, i) => (
                <MotionBox
                  key={i}
                  borderRadius="3xl"
                  overflow="hidden"
                  shadow="2xl"
                  mt={i % 2 !== 0 ? "60px" : "0"}
                  mb={i % 2 !== 0 ? "0" : "60px"}
                  whileHover={{ y: -10 }}
                >
                  <Image
                    src={img.src}
                    aspectRatio="1/1"
                    objectFit="cover"
                    w="full"
                  />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* 5. CLIENT TICKER */}
      <Box
        py="32"
        bg="white"
        borderTop="1px solid"
        borderColor="gray.100"
        position="relative"
      >
        <Container maxW="7xl" mb={20}>
          <VStack gap={6} textAlign="center">
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
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              fontFamily="'Outfit', sans-serif"
              color="black"
            >
              Trusted by Eswatini's Industry Leaders
            </Heading>
            <Box w="60px" h="4px" bg="#06d00c" borderRadius="full" />
          </VStack>
        </Container>
        <Box
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            width: "200px",
            height: "100%",
            bgGradient: "linear(to-r, white, transparent)",
          }}
          _after={{
            content: '""',
            position: "absolute",
            zIndex: 2,
            top: 0,
            right: 0,
            width: "200px",
            height: "100%",
            bgGradient: "linear(to-l, white, transparent)",
          }}
        >
          <MotionBox
            display="flex"
            width="max-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...clients, ...clients].map((client, i) => (
              <Box
                key={i}
                px={12}
                py={8}
                display="flex"
                alignItems="center"
                justifyContent="center"
                filter="grayscale(30%) brightness(0.8)"
                opacity="0.6"
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  filter: "grayscale(0%) brightness(1)",
                  opacity: "1",
                  transform: "scale(1.15) translateY(-5px)",
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  maxH={{ base: "45px", md: "65px" }}
                  minW="120px"
                  objectFit="contain"
                  draggable="false"
                />
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
