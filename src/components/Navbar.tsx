import { Box, Flex, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import Navlink from "./Navlink";
import { Logo } from "./Logo";

const Links = ["Home", "About", "Education", "Experience", "Skills"];

const getPathname = (name: string): string => {
  switch (name) {
    case "About":
      return "/about";
    case "Education":
      return "/education";
    case "Experience":
      return "/experience";
    case "Skills":
      return "/skills";
    default:
      return "/";
  }
};

export default function Navbar() {
  return (
    <Box bg="blackAlpha.900" px={4} mb="2">
      <Flex h={16} align="center" position="relative">
        <Box
          as={NavLink}
          to="/"
          position="absolute"
          left={{ base: "-2", md: "0" }}
        >
          <Logo
            width={{ base: "90px", md: "120px" }}
            height={{ base: "50px", md: "80px" }}
          />
        </Box>
        <HStack
          as="nav"
          display={{ base: "flex", md: "flex" }}
          alignItems="center"
          position="absolute"
          left="50%"
          py="2"
          px={{ base: "5", sm: "7", md: "14" }}
          spacing={{ base: "5", sm: "6", md: "9" }}
          bgGradient="linear-gradient(to bottom, rgba(255, 0, 128, 0.3), rgba(121, 40, 202, 0.3))"
          borderBottom="1px solid rgba(255, 0, 128, 0.5)"
          borderTop="1px solid rgba(255, 0, 128, 0.5)"
          borderRadius="30px"
          boxShadow="0 5px 5px rgba(121, 40, 202, 1)"
          transform={{ base: "translateX(-40%)", md: "translateX(-50%)" }}
        >
          {Links.map((link: string) => (
            <Navlink key={link} name={link} pathname={getPathname(link)} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
