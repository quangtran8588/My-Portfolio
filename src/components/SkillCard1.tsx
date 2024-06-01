import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

import LineScore from "./LineScore";
import SkillCardWrapper from "./SkillCardWrapper";
import SkillCardHeader from "./SkillCardHeader";
import SkillCardContent from "./SkillCardContent";
import { experiences } from "../utils/data";

interface Skill {
  name: string;
  assessment: number;
}

interface Props {
  selectedIndex: number;
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const assessmentText = (value: number): string => {
  if (value < 20) return "Novice";
  else if (value >= 20 && value < 40) return "Beginner";
  else if (value >= 40 && value <= 70) return "Intermediate";
  else if (value > 70 && value < 85) return "Proficient";
  return "Expert";
};

const assessmentTextColor = (value: number): string => {
  return value <= 70
    ? "linear-gradient(to right, #b074ff, #4fc2ff)"
    : "radial-gradient(circle, #FFFF00, #FFA500)";
};

const activeStyles = {
  maxW: { base: "550px", sm: "650px", lg: "500px" },
  maxH: { base: "300px", lg: "900px" },
};

const inactiveStyles = {
  maxW: { base: "50px", lg: "500px" },
  maxH: { base: "300px", lg: "50px" },
};

export default function SkillCard1({ selectedIndex, item, setItem }: Props) {
  const isActive = item === "Skills";
  const handleOnClick = () => {
    setItem("Skills");
  };

  const data = experiences[selectedIndex].skills;

  return (
    <>
      {data && (
        <SkillCardWrapper
          styles={isActive ? activeStyles : inactiveStyles}
          onClick={handleOnClick}
        >
          <SkillCardHeader item="Skills" />
          <SkillCardContent isActive={isActive}>
            {data.length !== 0 && (
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                templateRows={{
                  base: `repeat(${experiences[selectedIndex].skills.length}, 1fr)`,
                  lg: "1fr",
                }}
                gap={{ base: "10px", lg: "30px" }}
              >
                {data.map((skill: Skill, idx: number) => (
                  <GridItem key={idx} colSpan={1} rowSpan={1}>
                    <VStack maxW="300px" maxH="300px">
                      <HStack
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        fontSize={{ base: "2xs", lg: "xs" }}
                      >
                        <Text
                          bgGradient="linear-gradient(to top, #7928CA, #FF0080)"
                          bgClip="text"
                        >
                          {skill.name}
                        </Text>
                        <Text
                          bgGradient={assessmentTextColor(skill.assessment)}
                          bgClip="text"
                        >
                          {assessmentText(skill.assessment)}
                        </Text>
                      </HStack>

                      <Box width="100%">
                        <LineScore score={skill.assessment} />
                      </Box>
                    </VStack>
                  </GridItem>
                ))}
              </Grid>
            )}
          </SkillCardContent>
        </SkillCardWrapper>
      )}
    </>
  );
}
