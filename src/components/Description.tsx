import { Box, Text, SystemStyleObject } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";

import AnimatedText from "./AnimationText";

const MotionBox = motion(Box);

interface Props {
  descriptions: string[];
  variants?: Variants;
  wrapperStyles: SystemStyleObject;
  textStyles: SystemStyleObject;
  onClick?: () => void;
}

const Description = ({
  descriptions,
  wrapperStyles,
  textStyles,
  onClick,
}: Props) => {
  return (
    <MotionBox sx={wrapperStyles} onClick={onClick}>
      {descriptions.length != 0 &&
        descriptions.map((text: string) => (
          <Text key={text} sx={textStyles}>
            {text}
          </Text>
        ))}
    </MotionBox>
  );
};

const AnimationDescription = ({
  descriptions,
  wrapperStyles,
  textStyles,
  variants,
  onClick,
}: Props) => {
  return (
    <MotionBox sx={wrapperStyles} onClick={onClick} variants={variants}>
      {descriptions.length != 0 &&
        descriptions.map((text: string) => (
          <Text key={text} sx={textStyles}>
            <AnimatedText text={text} />
          </Text>
        ))}
    </MotionBox>
  );
};

export { Description, AnimationDescription };
