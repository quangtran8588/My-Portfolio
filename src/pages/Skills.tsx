import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

import Transition from "../components/Transition";
import SkillsCard2 from "../components/SkillCard2";

export default function Skills() {
  return (
    <Transition option={1}>
      <Box
        width="100%"
        height={{ base: "150px", lg: "300px" }}
        display="flex"
        alignItems="center"
      >
        <Text
          fontFamily="sacramento"
          letterSpacing="wide"
          fontSize={{ base: "40px", lg: "60px" }}
          fontWeight={700}
          bgGradient="radial-gradient(circle, #FFFF00, #FFA500)"
          bgClip="text"
          ml={{ base: "10%", lg: "5%" }}
        >
          My Skills
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        templateRows={{ base: "repeat(2, 1fr)", lg: "1fr" }}
        gap={3}
        // mt={{ base: "0", sm: "5%", md: "10%", lg: "15%" }}
      >
        <GridItem
          colSpan={1}
          rowSpan={1}
          display="flex"
          justifyContent="center"
        >
          <Box width="80%">
            <SkillsCard2 item="Technical" />
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          display="flex"
          justifyContent="center"
        >
          <Box width="80%">
            <SkillsCard2 item="Professional" />
          </Box>
        </GridItem>
      </Grid>
    </Transition>
  );
}
