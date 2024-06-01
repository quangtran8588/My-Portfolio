import { VisuallyHidden, chakra } from "@chakra-ui/react";

const SocialButton = ({
  children,
  color,
  label,
  href,
}: {
  children: React.ReactNode;
  color: string;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      as="a"
      href={href}
      cursor={"pointer"}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      boxSize={8}
      rounded="full"
      bg={color}
      border="1px solid #000"
      _hover={{
        transform: "scale(1.4)",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default SocialButton;
