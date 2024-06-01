import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

import SkillCardWrapper from "./SkillCardWrapper";
import SkillCardHeader from "./SkillCardHeader";
import SkillCardContent from "./SkillCardContent";
import CircleScore from "./CircleScore";
import { skills } from "../utils/data";

interface Props {
  item: string;
}

interface Skill {
  name: string;
  assessment: number;
}

const assessmentText = (value: number): string => {
  if (value <= 20) return "Novice";
  else if (value >= 21 && value <= 40) return "Beginner";
  else if (value >= 41 && value <= 65) return "Intermediate";
  else if (value >= 66 && value <= 85) return "Proficient";
  return "Expert";
};

const assessmentTextColor = (value: number): string => {
  return value <= 65
    ? "linear-gradient(to right, #b074ff, #4fc2ff)"
    : "radial-gradient(circle, #FFFF00, #FFA500)";
};

const customStyles = {
  px: { base: "unset", lg: "5" },
  py: { base: "3", lg: "unset" },
};

export default function SkillCard2({ item }: Props) {
  const data: Skill[] = skills[item as keyof typeof skills];

  return (
    <SkillCardWrapper styles={customStyles}>
      <SkillCardHeader item={item} />
      <SkillCardContent isActive={true}>
        {data.length !== 0 && (
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            templateRows={"1fr"}
            gap={{ base: "30px", xl: "50px" }}
          >
            {data.map((skill: Skill, idx: number) => (
              <GridItem key={idx} colSpan={1} rowSpan={1}>
                <VStack maxW="250px" maxH="800px">
                  <Text
                    fontSize="sm"
                    bgGradient="linear-gradient(to top, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    {skill.name}
                  </Text>
                  <Box>
                    <CircleScore score={skill.assessment} />
                  </Box>
                  <Text
                    fontSize="xs"
                    bgGradient={assessmentTextColor(skill.assessment)}
                    bgClip="text"
                  >
                    {assessmentText(skill.assessment)}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        )}
      </SkillCardContent>
    </SkillCardWrapper>
  );
}
