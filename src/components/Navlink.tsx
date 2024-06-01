/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, IconButton, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserCircle, FaTools } from "react-icons/fa";
import { FaGraduationCap, FaBusinessTime } from "react-icons/fa6";

interface Props {
  name: string;
  pathname: string;
}

const activeEffect = {
  backgroundColor: "rgba(255, 0, 128, 0.7)",
  transform: "translateY(-20px) scale(1.1)",
  border: "6px solid black",
};

const wrapperActiveEffect = {
  opacity: 1,
  visibility: "visible",
  marginTop: "-15px",
  backgroundColor: "transparent",
};

const wrapperHoverEffect = {
  opacity: 1,
  visibility: "visible",
  marginTop: "-32px",
  px: "2",
  py: "1",
  bgGradient:
    "linear-gradient(135deg, rgba(255, 0, 128, 0.9), rgba(121, 40, 202, 0.9))",
  borderRadius: "10px",
  transition: "padding 0.5s ease-out",
};

const getIcon = (name: string): JSX.Element => {
  switch (name) {
    case "About":
      return <FaUserCircle />;
    case "Education":
      return <FaGraduationCap />;
    case "Experience":
      return <FaBusinessTime />;
    case "Skills":
      return <FaTools />;
    default:
      return <IoHome />;
  }
};

export default function Navlink({ name, pathname }: Props) {
  const location = useLocation();
  const isActive = location.pathname === pathname;

  return (
    <Box
      role="group"
      position="relative"
      textAlign="center"
      as={NavLink}
      to={pathname}
    >
      <IconButton
        variant="ghost"
        aria-label={pathname}
        isRound={true}
        size="sm"
        icon={getIcon(name)}
        color="gray.200"
        backgroundColor="rgba(121, 40, 202, 1)"
        sx={isActive ? activeEffect : {}}
        _groupHover={{ opacity: 0 }}
      />
      <Box
        position="absolute"
        top="100%"
        left="50%"
        transform="translateX(-50%)"
        opacity={0}
        visibility="hidden"
        sx={isActive ? wrapperActiveEffect : {}}
        _groupHover={wrapperHoverEffect}
      >
        <Text
          fontSize="xs"
          bgClip="text"
          bgGradient={
            isActive
              ? "radial-gradient(circle, #FFFF00, #FFA500)"
              : "linear-gradient(to right, #FFFF00, #FFA500)"
          }
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
}
