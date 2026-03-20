"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// --- TEAM DATA ---
const teamImages: Record<string, string> = {
  "John Thomson": "/team/JohnThomson.jpg",
  "Clinton McNamara": "/team/ClintonMcNamara.jpg",
  "Jude Henwood": "/team/JudeHenwood.jpg",
  "Rodney Carval": "/team/RodneyCarval.jpeg",
  "Rosanne Frúhwirth": "/team/RosanneFruhwirth.jpeg",
  "Zodwa McNamara": "/team/ZodwaMcNamara.jpeg",
  "Lindokuhle Khulu": "/team/LindokuhleKhulu.jpeg",
  "Phumlani Shongwe": "/team/PhumlaniShongwe.jpg",
  "Nhlanhleni Shabangu": "/team/NhlanhleniShabangu.jpeg",
  "Celucolo Mduli": "/team/CelucoloMduli.jpeg",
};

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

// --- SUB-COMPONENT ---
const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
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
        mx={{ base: "2", md: "4" }}
        bg="white"
        p={{ base: "4", md: "6" }}
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
        <Text
          fontWeight="800"
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.800"
        >
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

// --- MAIN COMPONENT ---
const TeamSection = () => {
  return (
    <Box
      py={{ base: "20", md: "32" }}
      bg="gray.50"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="7xl" px={6}>
        <VStack mb={{ base: 12, md: 24 }} textAlign="center" gap={4}>
          <Text color="#06d00c" fontWeight="900" letterSpacing="widest">
            EXPERTISE
          </Text>
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="900"
            color="black"
            fontFamily="'Outfit', sans-serif"
          >
            The Power Team
          </Heading>
          <Box w="60px" h="4px" bg="#06d00c" />
        </VStack>
        <VStack gap={{ base: 12, md: 32 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={16} width="full">
            {leadership.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i} />
            ))}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={16} width="full">
            {management.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i + 3} />
            ))}
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap={{ base: 6, md: 10 }}
            width="full"
          >
            {technical.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i + 6} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TeamSection;
