/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

interface AnimatedCharactersProps {
  text: string;
}

const textAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function AnimationText({ text }: AnimatedCharactersProps) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={textAnimationVariants}>
          {letter}
        </motion.span>
      ))}
    </>
  );
}
