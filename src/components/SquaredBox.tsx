/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image, VStack } from "@chakra-ui/react";

import getTranslate from "../utils/rotate";
import { educations } from "../utils/data";
import { infoCards } from "../utils/designs";

interface Props {
  prevIndex: number;
  selectedIndex: number;
  onSetIndex: (index: number) => void;
}

interface ColProps {
  prevIndex: number;
  selectedIndex: number;
  numOfBoxes: number;
  col: number;
  onSetIndex: (index: number) => void;
}

const getIndex = (col: number, row: number): number => {
  if (col === 1 && row === 0) return 0;
  else if (col === 1 && row === 1) return 1;
  else if (col === 0 && row === 0) return 2;
  else if (col === 2 && row === 0) return 3;
  return -1;
};

const boxSize = 150;
const gap = boxSize / 2;

const Col = ({
  prevIndex,
  selectedIndex,
  numOfBoxes,
  col,
  onSetIndex,
}: ColProps) => {
  return (
    <VStack
      w={`${boxSize}px`}
      h={`${2.5 * boxSize}px`}
      alignItems="center"
      justifyContent="center"
      gap={`${gap}px`}
    >
      {[...Array(numOfBoxes).keys()].map((idx) => (
        <Box
          key={`${col}, ${idx}`}
          boxSize={`${boxSize}px`}
          display="flex"
          alignContent="center"
          clipPath="polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
          cursor="pointer"
          filter={
            getIndex(col, idx) === selectedIndex
              ? "grayscale(0%)"
              : "grayscale(100%)"
          }
          transform={
            selectedIndex >= 0
              ? `${getTranslate(
                  boxSize,
                  prevIndex,
                  selectedIndex,
                  getIndex(col, idx)
                )} rotate(45deg)`
              : "rotate(45deg)"
          }
          transition="all 0.5s ease-in-out"
          onClick={() => onSetIndex(getIndex(col, idx))}
          zIndex={2}
        >
          <Image
            src={educations[getIndex(col, idx)].image}
            alt={educations[getIndex(col, idx)].college}
            sx={infoCards[getIndex(col, idx)].image}
          />
        </Box>
      ))}
    </VStack>
  );
};

export default function SquaredBox({
  prevIndex,
  selectedIndex,
  onSetIndex,
}: Props) {
  return (
    <Box
      width={`${2.5 * boxSize}px`}
      height={`${2.5 * boxSize}px`}
      position="relative"
    >
      {[0, 1, 2].map((col) => (
        <Box
          key={col}
          position="absolute"
          left={
            col === 0
              ? `-${(3 * boxSize) / 4}px`
              : col === 2
              ? `${(3 * boxSize) / 4}px`
              : "unset"
          }
        >
          <Col
            col={col}
            numOfBoxes={col === 1 ? 2 : 1}
            prevIndex={prevIndex}
            selectedIndex={selectedIndex}
            onSetIndex={onSetIndex}
          />
        </Box>
      ))}
    </Box>
  );
}
