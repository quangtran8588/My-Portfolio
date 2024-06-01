import { Box, CardBody, Divider, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  isActive: boolean;
  children: React.ReactNode;
}

const collapse = {
  opacity: 0,
  visibility: "collapse",
};

const visible = {
  opacity: 1,
  visibility: "visible",
};

export default function SkillCardContent({ children, isActive }: Props) {
  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    lg: "horizontal",
  });

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ base: "row", lg: "column" }}
      sx={isActive ? visible : collapse}
    >
      <Divider orientation={orientation} />
      <CardBody display="flex" justifyContent="center">
        {children}
      </CardBody>
    </Box>
  );
}
