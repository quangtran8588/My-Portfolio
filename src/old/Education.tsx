import { useState } from "react";
import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";

import EducationInfoCard from "../components/EducationCard";
import { educations } from "../utils/data";
import { iconButtons } from "../utils/designs";
import Transition from "../components/Transition";

const cardInfoVariants = {
  initial: {
    y: "200%",
    scale: 0.1,
    opacity: 0,
    rotateY: 135,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateZ: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      perspective: "1000px",
      duration: 1,
      staggerChildren: 0.01,
    },
  },
  exit: {
    scale: 0.1,
    opacity: 0,
    rotateY: 180,
    rotateX: 135,
    x: "-200%",

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const MotionBox = motion(Box);

const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const next = () => {
    if (selectedIndex === educations.length - 1) setSelectedIndex(0);
    else setSelectedIndex((current) => current + 1);
  };

  const back = () => {
    if (selectedIndex === 0) setSelectedIndex(educations.length - 1);
    else setSelectedIndex((current) => current - 1);
  };

  const data = educations[selectedIndex];

  return (
    <Transition option={1}>
      <VStack h="100vh" w="100vw" align="center" justifyContent="center">
        <AnimatePresence>
          <MotionBox
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardInfoVariants}
            key={"Card Info" + selectedIndex}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <EducationInfoCard
              info={data}
              selectedIndex={selectedIndex}
              next={next}
            />
          </MotionBox>
        </AnimatePresence>

        <HStack gap="3" mt={"20px"}>
          <IconButton
            {...iconButtons[selectedIndex]}
            size="xs"
            fontSize={"15px"}
            aria-label="Back"
            icon={<VscTriangleLeft />}
            onClick={back}
          />
          <IconButton
            {...iconButtons[selectedIndex]}
            size="xs"
            fontSize={"15px"}
            aria-label="Next"
            icon={<VscTriangleRight />}
            onClick={next}
          />
        </HStack>
      </VStack>
    </Transition>
  );
};

export default Education;
