/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Image, Text, HStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Transition from "../components/Transition";
import AnimationText from "../components/AnimationText";
import { RegularTag } from "../components/TagContent";
import { intro } from "../utils/data";

interface AuthorProps {
  date: Date;
  name: string;
}

const container = {
  animate: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const MotionBox = motion(Box);

const tagWrapperStyles = {
  gap: "2",
  display: "flex",
  flexWrap: "wrap",
};

const tagStyles = {
  size: { base: "xs", md: "sm" },
  fontSize: { base: "xs", md: "sm" },
  variant: "solid",
  bgGradient: "linear-gradient(135deg, #7928CA, #FF0080)",
  color: "gray.200",
};

const Author = (props: AuthorProps) => {
  return (
    <HStack
      display="flex"
      alignItems="center"
      justify="space-around"
      mt="2"
      spacing="2"
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        fontFamily="alexbrush"
        bgClip="text"
        bgGradient="linear-gradient(135deg, #7928CA, #FF0080)"
      >
        {props.name}
      </Text>
      <Text>---</Text>
      <Text
        fontWeight="bold"
        fontSize="sm"
        fontFamily="alexbrush"
        bgClip="text"
        bgGradient="linear-gradient(135deg, #7928CA, #FF0080)"
      >
        {props.date.toLocaleDateString()}
      </Text>
    </HStack>
  );
};

export default function About() {
  return (
    <Transition option={2}>
      <Container
        maxW={"7xl"}
        maxH="min(100vh, 100dvh)"
        p={{ base: "5", sm: "5", md: "10", lg: "10", xl: "3" }}
      >
        <Heading
          as="h1"
          fontFamily="montecarlo"
          letterSpacing="wide"
          size="xl"
          bgGradient="linear-gradient(to top, #7928CA, #FF0080)"
          bgClip="text"
        >
          About Me
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mt={{ base: "1", sm: "1", md: "5" }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex="1"
            mr="3"
            position="relative"
          >
            <Box
              width={{ base: "100%", sm: "85%", md: "85%" }}
              display="flex"
              justifyContent="center"
              ml={{ base: "0", sm: "5%", md: "5%" }}
              mt="5%"
              zIndex="2"
            >
              <Image
                width="600px"
                height="300px"
                src="./images/Presentation.jpg"
                alt="Quang Tran"
              />
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={"radial(purple.300 1px, transparent 1px)"}
                backgroundSize="20px 20px"
                opacity="0.5"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
            mt={{ base: "3", sm: "3" }}
          >
            <RegularTag
              wrapperStyles={tagWrapperStyles}
              tagStyles={tagStyles}
              data={[
                "Blockchain Developer",
                "Smart Contract Developer",
                "Researcher",
              ]}
            />

            <MotionBox
              initial="initial"
              animate="animate"
              exit="exit"
              fontSize={{ base: "xs", sm: "xs", md: "sm" }}
              color="gray.300"
              variants={container}
            >
              <Text mt="3">
                <AnimationText text={intro.first} />
              </Text>

              <Text mt="7" mb="3">
                <AnimationText text={intro.second} />
              </Text>
            </MotionBox>

            <Author name="Quang Tran" date={new Date("2024-05-08T08:05:05Z")} />
          </Box>
        </Box>
      </Container>
    </Transition>
  );
}
