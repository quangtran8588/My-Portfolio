import { CardHeader, Text } from "@chakra-ui/react";

interface Props {
  item: string;
}

export default function SkillCardHeader({ item }: Props) {
  return (
    <CardHeader
      display={{ base: "unset", lg: "flex" }}
      alignItems={{ base: "unset", lg: "center" }}
      justifyContent="center"
      maxW={{ base: "30px", lg: "100%" }}
      maxH={{ base: "300px", lg: "50px" }}
    >
      <Text
        fontSize={{ base: "2xs", sm: "xs", lg: "sm" }}
        color="gray.200"
        overflowWrap="break-word"
      >
        {item}
      </Text>
    </CardHeader>
  );
}
