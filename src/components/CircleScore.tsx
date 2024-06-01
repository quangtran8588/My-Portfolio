import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  score: number;
}

const color = (index: number, score: number): string => {
  const marker = Math.floor(score / 2);

  if (index <= marker) {
    if (marker >= 0 && marker <= 10) {
      return "rgba(255, 0, 0, 1)";
    } else if (marker >= 11 && marker <= 20) {
      return "rgba(255, 102, 0, 1)";
    } else if (marker >= 21 && marker <= 32) {
      return "rgba(255, 215, 0, 1)";
    } else if (marker >= 33 && marker <= 42) {
      return "rgba(0, 191, 255, 1)";
    } else if (marker >= 43) {
      return "rgba(57, 255, 20, 1)";
    }
  }
  return "rgba(128, 128, 128, 1)";
};

const MotionBox = motion(Box);

const CircleScore = ({ score }: Props) => {
  const numMarkers = 50;
  const angleStep = 360 / numMarkers;

  return (
    <Box
      position="relative"
      width={{ base: "50px", xl: "80px" }}
      height={{ base: "50px", xl: "80px" }}
      mb={1}
    >
      {Array.from({ length: numMarkers }).map((_, index) => {
        const angle = angleStep * index;
        const x = 50 + 45 * Math.cos((angle - 90) * (Math.PI / 180));
        const y = 50 + 45 * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <MotionBox
            key={index}
            position="absolute"
            initial={{
              left: `-300%`,
              top: `-300%`,
              opacity: 0,
            }}
            animate={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `rotate(${angle}deg)`,
              opacity: 1,
            }}
            width={{ base: "2px", xl: "3px" }}
            height={{ base: "10px", xl: "15px" }}
            borderRadius="1px"
            background={color(index, score)}
            transition={{
              duration: 1.5,
              type: "linear",
              ease: "easeInOut",
              delay: `${index * 0.03}`,
            }}
          />
        );
      })}
      <Text
        position="absolute"
        top="60%"
        left="52%"
        transform="translate(-50%, -50%)"
        fontSize="xs"
        fontWeight="bold"
        color="gray"
      >
        {score}
      </Text>
    </Box>
  );
};

export default CircleScore;
