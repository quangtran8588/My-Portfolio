import { Card, SystemStyleObject } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  styles: SystemStyleObject;
  onClick?: () => void;
}

export default function SkillCardWrapper({ children, styles, onClick }: Props) {
  return (
    <Card
      display="flex"
      flexDirection={{ base: "row", lg: "column" }}
      bgGradient="linear-gradient(to top, #1A1A1A, #333333)"
      borderRadius="20px"
      border="1px solid #FF00FF"
      sx={styles}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
