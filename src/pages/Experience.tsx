/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import Transition from "../components/Transition";
import ExperienceCard from "../components/ExperienceCard";
import SkillCard1 from "../components/SkillCard1";
import CircleProject from "../components/CircleProject";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

const expCardVariantsForCol = {
  initial: {
    y: "-200%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: "200%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const expCardVariantsForRow = {
  initial: {
    x: "-200%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    y: "200%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const skillCardVariantsForCol = {
  initial: {
    y: "200%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: "200%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const skillCardVariantsForRow = {
  initial: {
    x: "200%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    y: "200%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [item, setItem] = useState<string>("");

  const expCardVariants = useBreakpointValue({
    base: expCardVariantsForRow,
    lg: expCardVariantsForCol,
  });
  const skillCardVariants = useBreakpointValue({
    base: skillCardVariantsForRow,
    lg: skillCardVariantsForCol,
  });

  const handleSetIndex = (index: number) => {
    setSelectedIndex(index);
    setItem("");
  };

  return (
    <Transition option={2}>
      <Grid
        width="100dvw"
        height="100dvh"
        templateColumns={
          selectedIndex === -1 ? "1fr" : { base: "1fr", lg: "1fr 1fr" }
        }
        templateRows={
          selectedIndex === -1 ? "1fr" : { base: "1fr 1fr", lg: "1fr" }
        }
      >
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MotionBox
            layout
            animate={{
              layout: { transition: { duration: 1, type: "linear" } },
            }}
          >
            <Box transform={{ base: "scale(0.7)", lg: "unset" }}>
              <CircleProject
                selectedIndex={selectedIndex}
                onSetIndex={handleSetIndex}
              />
            </Box>
          </MotionBox>
        </GridItem>

        {selectedIndex !== -1 && (
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={{ base: "-50px", lg: "unset" }}
          >
            <Box
              display="flex"
              flexDirection={{ base: "row", lg: "column" }}
              gap={{ base: "10px", lg: "30px" }}
            >
              <AnimatePresence>
                <MotionBox
                  display="flex"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={`Experience Info Card ${selectedIndex}`}
                  variants={expCardVariants}
                >
                  <ExperienceCard
                    selectedIndex={selectedIndex}
                    item={item}
                    setItem={setItem}
                  />
                </MotionBox>

                <MotionBox
                  display="flex"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={`Skill Card ${selectedIndex}`}
                  variants={skillCardVariants}
                >
                  <SkillCard1
                    selectedIndex={selectedIndex}
                    item={item}
                    setItem={setItem}
                  />
                </MotionBox>
              </AnimatePresence>
            </Box>
          </GridItem>
        )}
      </Grid>
    </Transition>
  );
};

export default Experience;
