/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image, VStack } from "@chakra-ui/react";
import { experiences } from "../utils/data";

interface Props {
  onSetIndex: (index: number) => void;
}

interface ColProps {
  numOfBoxes: number;
  col: number;
  gap: any;
  onSetIndex: (index: number) => void;
}

const getIndex = (col: number, row: number): number => {
  if (col === 1 && row === 2) return 0;
  else if (col === 0 && row === 1) return 1;
  else if (col === 2 && row === 1) return 2;
  else if (col === 1 && row === 1) return 3;
  else if (col === 0 && row === 0) return 4;
  else if (col === 2 && row === 0) return 5;
  else if (col === 1 && row === 0) return 6;
  return -1;
};

const gradient = `linear-gradient(
  hsl(0 0% 0% / 0),
  hsl(20 0% 0% / 0.3) 20%,
  hsl(0 0% 0% / 1),
)
`;

const Col = ({ numOfBoxes, col, gap, onSetIndex }: ColProps) => {
  const shiftX = `${col === 0 ? "-25px" : col === 2 ? "25px" : "0"}`;

  return (
    <VStack
      w="100px"
      h="400px"
      alignItems="center"
      justifyContent="center"
      gap={gap}
    >
      {[...Array(numOfBoxes).keys()].map((idx) => (
        <Box
          key={idx}
          display="flex"
          alignContent="center"
          width="100px"
          height="100px"
          bgGradient={gradient}
          border="3px solid"
          sx={{
            borderImage: "linear-gradient(to top, #7928CA, #FF0080) 1",
            borderRadius: "20px",
          }}
          transform={`translate(${shiftX}) rotate(45deg)`}
        >
          <Image
            src={experiences[getIndex(col, idx)].image}
            alt={experiences[getIndex(col, idx)].company}
            onClick={() => onSetIndex(getIndex(col, idx))}
          />
        </Box>
      ))}
    </VStack>
  );
};

export default function DiamondBox({ onSetIndex }: Props) {
  return (
    <Box width="250px" height="400px" position="relative">
      <Box position="absolute" left="-50px" top="0">
        <Col col={0} numOfBoxes={2} gap="50px" onSetIndex={onSetIndex} />
      </Box>
      <Box>
        <Col col={1} numOfBoxes={3} gap="50px" onSetIndex={onSetIndex} />
      </Box>
      <Box position="absolute" left="50px" top="0">
        <Col col={2} numOfBoxes={2} gap="50px" onSetIndex={onSetIndex} />
      </Box>
    </Box>
  );
}
