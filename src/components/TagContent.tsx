/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, SystemStyleObject, Tag, Text } from "@chakra-ui/react";

import AnimatedText from "./AnimationText";

interface Props {
  wrapperStyles: SystemStyleObject;
  tagStyles: SystemStyleObject;
  data: any[];
}

const RegularTag = ({ data, wrapperStyles, tagStyles }: Props) => {
  return (
    <Box sx={wrapperStyles}>
      {data.map((tag) => (
        <Tag key={tag} sx={tagStyles}>
          {tag}
        </Tag>
      ))}
    </Box>
  );
};

const AnimationTag = ({ data, wrapperStyles, tagStyles }: Props) => {
  return (
    <Box sx={wrapperStyles}>
      {data.map((tag) => (
        <Tag key={tag} sx={tagStyles}>
          <Text>
            <AnimatedText text={tag} />
          </Text>
        </Tag>
      ))}
    </Box>
  );
};

export { RegularTag, AnimationTag };
