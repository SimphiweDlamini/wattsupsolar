"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Container,
  Text,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Our Solutions",
    path: "#",
    subServices: [
      { name: "Hybrid Systems", path: "/services/hybrid" },
      { name: "Grid-Tied Systems", path: "/services/grid-tied" },
      { name: "Solar Pumps", path: "/services/solar-pumps" },
      { name: "Off-Grid Systems", path: "/services/off-grid" },
      { name: "Solar PV Geysers", path: "/services/solarpv" },
    ],
  },
  { name: "Support & Maintenance", path: "/maintenance" },
];

const logoUrl = "/WattsUpSolarBanner_Orange.png";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <Box
      as="nav"
      bg="white"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="8xl" px={{ base: 4, md: 6, lg: 4, xl: 8 }}>
        <Flex
          py={{ base: 3, md: 2, xl: 4 }}
          align="center"
          justify="space-between"
        >
          <NextLink href="/" passHref>
            <Box w={{ base: "140px", md: "160px", lg: "200px", xl: "320px" }}>
              <Image
                src={logoUrl}
                alt="Watts Up Solar"
                // Original 100px for xl, but scaled for the 1024px (lg) and tablet (md)
                h={{ base: "40px", md: "50px", lg: "60px", xl: "100px" }}
                objectFit="contain"
                cursor="pointer"
              />
            </Box>
          </NextLink>

          {/* Desktop/Laptop Menu */}
          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            // Tight gap for md/lg, original wide gap for xl
            gap={{ md: 3, lg: 5, xl: 10 }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.name}
                position="relative"
                onMouseEnter={() =>
                  link.subServices && setIsDesktopDropdownOpen(true)
                }
                onMouseLeave={() => setIsDesktopDropdownOpen(false)}
              >
                <NextLink href={link.path} passHref>
                  <Text
                    // Original fontSize for xl, reduced for smaller screens
                    fontSize={{ md: "xs", lg: "sm", xl: "lg" }}
                    fontWeight="700"
                    fontFamily="'Outfit', sans-serif"
                    textTransform="uppercase"
                    color="gray.700"
                    cursor="pointer"
                    whiteSpace="nowrap"
                    py={4}
                  >
                    {link.name} {link.subServices && "▾"}
                  </Text>
                </NextLink>

                {link.subServices && isDesktopDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    bg="white"
                    shadow="2xl"
                    py={3}
                    minW="240px"
                    border="1px solid"
                    borderColor="gray.100"
                    rounded="md"
                  >
                    {link.subServices.map((sub) => (
                      <NextLink key={sub.name} href={sub.path} passHref>
                        <Box
                          px={6}
                          py={3}
                          _hover={{ bg: "gray.50" }}
                          cursor="pointer"
                        >
                          <Text fontSize="lg" fontWeight="700" color="gray.600">
                            {sub.name}
                          </Text>
                        </Box>
                      </NextLink>
                    ))}
                  </Box>
                )}
              </Box>
            ))}

            <NextLink href="/contact" passHref>
              <Button
                bg="#4caf50"
                color="white"
                // Responsive padding and sizing
                px={{ md: 4, lg: 6, xl: 10 }}
                height={{ md: "40px", xl: "48px" }}
                rounded="full"
                fontSize={{ md: "xs", lg: "sm", xl: "lg" }}
                fontWeight="700"
                _hover={{ bg: "#388e3c" }}
              >
                Contact Us
              </Button>
            </NextLink>
          </Flex>

          {/* TS-Safe IconButton (Element as child) */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            variant="ghost"
            aria-label="Menu"
          >
            <Box as="span" fontSize="24px">
              {isMobileOpen ? "✕" : "☰"}
            </Box>
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Menu logic remains same but restricted to base */}
    </Box>
  );
}
