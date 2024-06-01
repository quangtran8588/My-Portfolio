import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

import { Logo } from "../components/Logo";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Education",
    path: "/education",
  },
  {
    name: "Experience",
    path: "/experience",
  },
];

const hoverStyles = {
  borderBottom: "2px solid magenta",
  borderRadius: "5px",
  px: "10px",
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const activeStyles = {
  px: "10px",
  py: "3px",
  borderBottom: "2px solid magenta",
  borderRadius: "5px",
  boxShadow: "0 1px 3px magenta",
};

export default function Navbar() {
  const location = useLocation();

  return (
    <Box bg="transparent" px={4} mb="2">
      <Flex h={16} align="center" position="relative">
        <Box
          as={"a"}
          href={"/"}
          position="absolute"
          left={{ base: "-1", md: "0" }}
        >
          <Logo
            width={{ base: "70px", md: "100px" }}
            height={{ base: "50px", md: "80px" }}
          />
        </Box>
        <HStack
          as="nav"
          display="flex"
          alignItems="center"
          position="absolute"
          left="50%"
          spacing={{ base: "3", md: "7" }}
          transform={{ base: "translateX(-40%)", md: "translateX(-50%))" }}
        >
          {Links.map((link) => {
            const isActive: boolean = link.path === location.pathname;
            return (
              <Text
                key={link.name}
                as={NavLink}
                to={link.path}
                fontSize={{ base: "sm", md: "md" }}
                fontFamily="Poppins"
                fontWeight="500"
                bgGradient="linear-gradient(to left, #0CF2E4, #EF0DB0)"
                bgClip="text"
                sx={isActive ? activeStyles : {}}
                _hover={hoverStyles}
              >
                {link.name}
              </Text>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}
