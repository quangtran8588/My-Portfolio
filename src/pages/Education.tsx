import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import Transition from "../components/Transition";
import EducationCard from "../components/EducationCard";
import SquaredBox from "../components/SquaredBox";
import { educations } from "../utils/data";

const cardInfoVariants = {
  initial: {
    x: "100%",
    scale: 0.1,
    opacity: 0,
    rotateY: 135,
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.02,
    },
  },
  exit: {
    scale: 0.1,
    opacity: 0,
    rotateY: 180,
    rotateX: 135,
    x: "100%",
    y: "-100%",
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const MotionBox = motion(Box);

export default function Education() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  let prevIndex = 0;

  const next = () => {
    if (selectedIndex >= 0) prevIndex = selectedIndex;

    if (selectedIndex === educations.length - 1) setSelectedIndex(0);
    else setSelectedIndex((current) => current + 1);
  };

  const handleSetIndex = (index: number) => {
    if (selectedIndex >= 0) prevIndex = selectedIndex;

    setSelectedIndex(index);
  };

  const data = educations[selectedIndex];

  return (
    <Transition option={1}>
      <Grid
        width="100dvw"
        height="100dvh"
        templateColumns={
          selectedIndex === -1 ? "1fr" : { base: "1fr", lg: "1fr 1fr 1fr" }
        }
        templateRows={
          selectedIndex === -1 ? "1fr" : { base: "1fr 1fr 1fr", lg: "1fr" }
        }
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={1} position="relative">
          <Box
            position="absolute"
            left={
              selectedIndex === -1
                ? { base: "25%", sm: "30%", md: "40%", lg: "45%" }
                : { base: "30%", sm: "35%", md: "40%", lg: "35%", xl: "40%" }
            }
            top={{ base: "0", lg: "30%" }}
            transform={{
              base: "scale(0.7)",
              lg: "scale(0.8)",
            }}
          >
            <MotionBox
              layout
              animate={{
                layout: { transition: { duration: 2, type: "linear" } },
              }}
            >
              <SquaredBox
                prevIndex={prevIndex}
                selectedIndex={selectedIndex}
                onSetIndex={handleSetIndex}
              />
            </MotionBox>
          </Box>
        </GridItem>
        {selectedIndex !== -1 && (
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            rowSpan={{ base: 2, lg: 1 }}
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AnimatePresence>
              <MotionBox
                initial="initial"
                animate="animate"
                exit="exit"
                key={"Education Card Info" + selectedIndex}
                variants={cardInfoVariants}
                transform={{
                  base: "scale(0.9)",
                  lg: "scale(1)",
                }}
              >
                <EducationCard
                  info={data}
                  selectedIndex={selectedIndex}
                  next={next}
                />
              </MotionBox>
            </AnimatePresence>
          </GridItem>
        )}
      </Grid>
    </Transition>
  );
}
