"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Our Solutions",
    path: "#", // Changed to # since it's no longer a page
    subServices: [
      { name: "Hybrid Systems", path: "/services/hybrid" },
      { name: "Solar Pumps", path: "/services/solar-pumps" },
      { name: "Off-Grid Systems", path: "/services/off-grid" },
      { name: "Solar PV Geyser Systems", path: "/services/solarpv" },
    ],
  },
  { name: "Support & Maintenance", path: "/maintenance" },
];

const logoUrl = "/WattsUpSolarBanner_Orange.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex py={3} align="center" justify="space-between">
          {/* Logo Section */}
          <Link href="/" passHref>
            <Image
              src={logoUrl}
              alt="Watts Up Solar Logo"
              height={{ base: "40px", md: "50px" }}
              cursor="pointer"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.02)" }}
            />
          </Link>

          {/* Desktop Menu */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Box
                key={link.name}
                position="relative"
                height="100%"
                display="flex"
                alignItems="center"
                onMouseEnter={() => link.subServices && setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* Check if it has subServices: If yes, render plain Text. If no, render Link */}
                {link.subServices ? (
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    fontFamily="'Outfit', sans-serif"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    color="gray.700"
                    cursor="default" // Shows it's a menu, not a clickable page
                    transition="all 0.2s"
                    _hover={{ color: "cyan.500" }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    py={4} // Increases hover area
                  >
                    {link.name}
                    <Text as="span" fontSize="xs">
                      ▾
                    </Text>
                  </Text>
                ) : (
                  <Link href={link.path} passHref>
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      fontFamily="'Outfit', sans-serif"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      color="gray.700"
                      cursor="pointer"
                      transition="all 0.2s"
                      _hover={{ color: "cyan.500" }}
                      py={4}
                    >
                      {link.name}
                    </Text>
                  </Link>
                )}

                {/* THE DROPDOWN MENU */}
                {link.subServices && isOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="-20px" // Slight offset to align better
                    bg="white"
                    boxShadow="2xl"
                    borderRadius="lg"
                    py={3}
                    minW="240px"
                    border="1px solid"
                    borderColor="gray.50"
                    zIndex={200}
                    mt="-5px" // Pulls it slightly closer to the trigger
                  >
                    {link.subServices.map((sub) => (
                      <Link key={sub.name} href={sub.path} passHref>
                        <Box
                          px={6}
                          py={3}
                          role="group"
                          _hover={{ bg: "cyan.50" }}
                          transition="all 0.2s"
                        >
                          <Text
                            fontSize="xs"
                            fontWeight="700"
                            fontFamily="'Outfit', sans-serif"
                            textTransform="uppercase"
                            color="gray.600"
                            _groupHover={{ color: "cyan.600" }}
                          >
                            {sub.name}
                          </Text>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ))}

            <Link href="/contact" passHref>
              <Button
                bg="cyan.500"
                color="white"
                px={8}
                rounded="full"
                fontSize="xs"
                fontWeight="700"
                fontFamily="'Outfit', sans-serif"
                _hover={{
                  bg: "cyan.600",
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
