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
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex py={3} align="center" justify="space-between">
          <NextLink href="/" passHref>
            <Image
              src={logoUrl}
              alt="Watts Up Solar Logo"
              height={{ base: "40px", md: "50px" }}
              cursor="pointer"
            />
          </NextLink>

          {/* FIX: IconButton with icon passed as children, not a prop */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            variant="ghost"
            aria-label="Toggle Navigation"
          >
            <Box as="span" fontSize="24px">
              {isMobileOpen ? "✕" : "☰"}
            </Box>
          </IconButton>

          {/* Desktop Menu - Using gap (modern CSS) */}
          <Flex display={{ base: "none", md: "flex" }} align="center" gap={8}>
            {navLinks.map((link) => (
              <Box
                key={link.name}
                position="relative"
                onMouseEnter={() =>
                  link.subServices && setIsDesktopDropdownOpen(true)
                }
                onMouseLeave={() => setIsDesktopDropdownOpen(false)}
              >
                {link.subServices ? (
                  <Text
                    fontSize="xs"
                    fontWeight="700"
                    fontFamily="'Outfit', sans-serif"
                    textTransform="uppercase"
                    color="gray.700"
                    cursor="default"
                    py={4}
                  >
                    {link.name}{" "}
                    <Box as="span" ml={1}>
                      ▾
                    </Box>
                  </Text>
                ) : (
                  <NextLink href={link.path} passHref>
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      fontFamily="'Outfit', sans-serif"
                      textTransform="uppercase"
                      color="gray.700"
                      cursor="pointer"
                      py={4}
                    >
                      {link.name}
                    </Text>
                  </NextLink>
                )}

                {/* Dropdown */}
                {link.subServices && isDesktopDropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="-20px"
                    bg="white"
                    boxShadow="xl"
                    py={3}
                    minW="240px"
                    border="1px solid"
                    borderColor="gray.100"
                  >
                    {link.subServices.map((sub) => (
                      <NextLink key={sub.name} href={sub.path} passHref>
                        <Box
                          px={6}
                          py={3}
                          cursor="pointer"
                          _hover={{ bg: "gray.50" }}
                        >
                          <Text fontSize="xs" fontWeight="700" color="gray.600">
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
                px={8}
                rounded="full"
                fontSize="xs"
                _hover={{ bg: "#83c5be" }}
              >
                Contact Us
              </Button>
            </NextLink>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            pb={6}
            bg="white" // Ensure background is white
            borderTop="1px solid"
            borderColor="gray.100"
          >
            <Flex direction="column" mt={2} px={4}>
              {" "}
              {/* Added padding for alignment */}
              {navLinks.map((link) => (
                <Box
                  key={link.name}
                  py={2}
                  borderBottom="1px solid"
                  borderColor="gray.50"
                >
                  {link.subServices ? (
                    <Box>
                      <Text
                        fontWeight="800"
                        fontSize="xs"
                        color="gray.500" // Subdued header color
                        mt={2}
                        textTransform="uppercase"
                      >
                        {link.name}
                      </Text>
                      <Flex direction="column" mt={2} pl={4}>
                        {link.subServices.map((sub) => (
                          <NextLink key={sub.name} href={sub.path} passHref>
                            <Text
                              py={3}
                              fontSize="md"
                              fontWeight="600"
                              color="gray.800" // Explicit dark text
                              onClick={() => setIsMobileOpen(false)}
                              cursor="pointer"
                            >
                              {sub.name}
                            </Text>
                          </NextLink>
                        ))}
                      </Flex>
                    </Box>
                  ) : (
                    <NextLink href={link.path} passHref>
                      <Text
                        py={3}
                        fontSize="md"
                        fontWeight="700"
                        color="gray.800" // Explicit dark text
                        onClick={() => setIsMobileOpen(false)}
                        cursor="pointer"
                      >
                        {link.name}
                      </Text>
                    </NextLink>
                  )}
                </Box>
              ))}
              <NextLink href="/contact" passHref>
                <Button
                  w="full"
                  mt={6}
                  bg="#4caf50"
                  color="white"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact Us
                </Button>
              </NextLink>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}
