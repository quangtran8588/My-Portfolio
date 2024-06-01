import { Box, Text, HStack } from "@chakra-ui/react";

import SkillCardWrapper from "./SkillCardWrapper";
import SkillCardHeader from "./SkillCardHeader";
import SkillCardContent from "./SkillCardContent";
import { RegularTag } from "./TagContent";
import { Description } from "./Description";
import { experiences } from "../utils/data";

interface Props {
  selectedIndex: number;
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const tagWrapperStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  mt: { base: "2", lg: "3" },
  gap: { base: "1", lg: "3" },
};

const tagStyles = {
  variant: "solid",
  background: "linear-gradient(to top, #7928CA, #FF0080)",
  color: "gray.200",
  fontSize: "2xs",
};

const descriptionWrapperStyles = {
  mt: { base: "3", lg: "5" },
};

const textStyles = {
  mt: "1",
  color: "white",
  fontSize: { base: "2xs", lg: "xs" },
};

const activeStyles = {
  maxW: { base: "550px", sm: "650px", lg: "500px" },
  maxH: { base: "300px", lg: "900px" },
};

const inactiveStyles = {
  maxW: { base: "50px", lg: "500px" },
  maxH: { base: "300px", lg: "50px" },
};

export default function ExperienceCard({
  selectedIndex,
  item,
  setItem,
}: Props) {
  const data = experiences[selectedIndex];
  const isActive = item === "description";
  const handleOnClick = () => {
    setItem("description");
  };

  return (
    <>
      {data && (
        <SkillCardWrapper
          styles={isActive ? activeStyles : inactiveStyles}
          onClick={handleOnClick}
        >
          <SkillCardHeader item="Description" />
          <SkillCardContent isActive={isActive}>
            <Box>
              <HStack mb={1} mt={-3} fontSize={{ base: "xs", lg: "sm" }}>
                <Text color="white" fontWeight="lighter">
                  Company:
                </Text>
                <Text
                  bgGradient="linear-gradient(to top, #7928CA, #FF0080)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  {data.company}
                </Text>
              </HStack>

              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                fontWeight="200"
                fontSize="2xs"
              >
                <Text color="white">{data.location}</Text>
                <Text color="white">
                  {data.start} - {data.end}
                </Text>
              </HStack>

              <RegularTag
                wrapperStyles={tagWrapperStyles}
                tagStyles={tagStyles}
                data={data.tags}
              />

              <Description
                descriptions={data.descriptions}
                wrapperStyles={descriptionWrapperStyles}
                textStyles={textStyles}
              />
            </Box>
          </SkillCardContent>
        </SkillCardWrapper>
      )}
    </>
  );
}
