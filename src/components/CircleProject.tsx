import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { experiences } from "../utils/data";

interface Props {
  selectedIndex: number;
  onSetIndex: (index: number) => void;
}

const activeBoxShadow = `
0 0 0 4px #222, 0 0 0 6px rgba(255, 215, 0, 0.7)
`;

const boxShadow = `
0 0 0 4px #222, 0 0 0 6px rgba(255, 0, 255, 0.7)
`;

const circle1 = {
  inset: "65px",
  borderLeft: "2px solid rgba(255, 0, 128, 1)",
  borderRight: "2px solid rgba(121, 40, 202, 1)",
};

const circle1Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
};

const circle2 = {
  inset: "90px",
  borderTop: "2px solid rgba(255, 0, 255, 0.7)",
  borderBottom: "2px solid rgba(0, 0, 255, 0.7)",
};

const circle2Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 2.5, repeat: Infinity, ease: "linear" },
  },
};

const MotionBox = motion(Box);

export default function CircleProject({ selectedIndex, onSetIndex }: Props) {
  const radius = 200;
  const boxSize = 100;
  const numItems = experiences.length;
  const data = experiences[selectedIndex];

  return (
    <Box
      width="400px"
      height="400px"
      position="relative"
      border="2px solid rgba(255, 0, 255, 0.7)"
      borderRadius="50%"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
      >
        <MotionBox
          boxSize={`${boxSize}px`}
          border="1px solid rgba(255, 0, 255, 0.7)"
          borderRadius="50%"
          overflow="hidden"
          animate={
            selectedIndex !== -1
              ? {
                  opacity: 1,
                  visibility: "visible",
                }
              : {
                  opacity: 0,
                  visibility: "hidden",
                }
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Image
            src={selectedIndex !== -1 ? data.image : ""}
            width="100%"
            height="100%"
            background="gray.200"
          />
        </MotionBox>
        {[...Array(2).keys()].map((index) => (
          <MotionBox
            key={index}
            position="absolute"
            border="2px solid transparent"
            borderRadius="50%"
            animate="animate"
            variants={index === 0 ? circle1Variants : circle2Variants}
            sx={index === 0 ? circle1 : circle2}
          />
        ))}
        {experiences.map((info, index) => {
          const angle = (360 / numItems) * index;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const isActive = selectedIndex === index;

          return (
            <MotionBox
              key={info.company}
              position="absolute"
              boxSize={`${boxSize}px`}
              border="1px solid rgba(0, 0, 255, 0.7)"
              borderRadius="50%"
              boxShadow={isActive ? activeBoxShadow : boxShadow}
              overflow="hidden"
              zIndex="5"
              animate={{
                left: `calc(50% + ${x}px - ${boxSize / 2}px)`,
                top: `calc(50% + ${y}px - ${boxSize / 2}px)`,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: "3000",
                damping: "300",
                delay: index * 0.1,
              }}
              onClick={() => onSetIndex(index)}
            >
              <Image
                src={info.image}
                width="100%"
                height="100%"
                background="gray.200"
                filter={isActive ? "grayscale(0%)" : "grayscale(100%)"}
              />
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
}
