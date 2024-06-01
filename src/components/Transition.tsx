import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  option: number;
}

const slideBottom: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  background: "black",
  zIndex: 50,
  transformOrigin: "bottom",
};

const slideTop: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  background: "black",
  zIndex: 50,
  transformOrigin: "top",
};

const slideLeft: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100%",
  background: "black",
  zIndex: 50,
  transformOrigin: "left",
};

const slideRight: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100%",
  background: "black",
  zIndex: 50,
  transformOrigin: "right",
};

const animatedVariants1 = {
  initital: {
    scaleY: 0.5,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 0.5,
  },
};

const animatedVariants2 = {
  initital: {
    scaleX: 0.5,
  },
  animate: {
    scaleX: 0,
  },
  exit: {
    scaleX: 0.5,
  },
};

export default function Transition({ children, option }: Props) {
  return (
    <>
      {children}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={option === 1 ? animatedVariants1 : animatedVariants2}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={option === 1 ? slideBottom : slideLeft}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={option === 1 ? animatedVariants1 : animatedVariants2}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={option === 1 ? slideTop : slideRight}
      />
    </>
  );
}
