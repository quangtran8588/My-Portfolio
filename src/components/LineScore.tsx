import { HStack, Progress } from "@chakra-ui/react";

interface Props {
  score: number;
}

const getColor = (level: number): string => {
  const color =
    level === 1
      ? "red"
      : level === 2
      ? "orange"
      : level === 3
      ? "yellow"
      : level === 4
      ? "blue"
      : "green";

  return color;
};

export default function LineScore({ score }: Props) {
  return (
    <HStack display="flex" justifyContent="space-between">
      {[...Array(5).keys()].map((idx) => (
        <Progress
          key={idx}
          width="35px"
          borderRadius="5px"
          size="sm"
          hasStripe={true}
          isAnimated={true}
          min={0}
          max={20}
          value={
            score > (idx + 1) * 20
              ? 20
              : score - 20 * idx > 0
              ? score - 20 * idx
              : 0
          }
          colorScheme={getColor(idx + 1)}
        />
      ))}
    </HStack>
  );
}
