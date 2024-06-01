import {
  Image,
  VStack,
  Text,
  GridItem,
  Grid,
  Stack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

import Transition from "../components/Transition";
import AnimatedText from "../components/AnimationText";
import SocialButton from "../components/SocialButton";
import { AnimatedLogo } from "../components/Logo";

const imageVariants = {
  initial: {
    scale: 0.1,
    opacity: 0,
    rotate: 135,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

const MotionImg = motion(Image);
const MotionBox = motion(Box);

const Home = () => {
  return (
    <Transition option={1}>
      <Box maxWidth="min(100vw, 100dvw)" maxHeight="min(100vh, 100dvh)">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(2, 1fr)", md: "1fr" }}
          gap={6}
        >
          <GridItem w="100%" h={{ base: "40dvh", md: "100dvh" }}>
            <Box
              width={"100%"}
              height={"100%"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              {[...Array(3).keys()].map((idx) => (
                <MotionBox
                  key={idx}
                  position="absolute"
                  width="100px"
                  height={{ base: "400px", md: "500px", lg: "600px" }}
                  border="2px solid transparent"
                  borderTop="2px solid rgba(255, 0, 128, 1)"
                  borderBottom="2px solid rgba(121, 40, 202, 1)"
                  borderRadius="100%"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6.0,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2 * idx + 1,
                  }}
                  zIndex={2}
                />
              ))}
              <MotionImg
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                key="Home Page Image"
                whileHover={{
                  scale: 0.5,
                  rotateY: 360,
                  rotateZ: 135,
                  rotateX: 135,
                }}
                style={{
                  scale: 1,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s",
                }}
                src="./images/ai-generator.png"
                width={{ base: "250px", md: "300px", lg: "400px" }}
                height={{ base: "300px", md: "400px", lg: "500px" }}
                borderTop="3px solid rgba(121, 40, 202, 0.7)"
                borderRight="3px solid rgba(121, 40, 202, 0.7)"
                borderBottom="3px solid rgba(255, 0, 128, 0.3)"
                borderLeft="3px solid rgba(255, 0, 128, 0.3)"
                borderRadius="45%"
                mt={2}
                zIndex={5}
              />
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h={{ base: "40dvh", md: "100dvh" }}
            zIndex={-1}
            background="transparent"
          >
            <VStack
              align={{ base: "center", md: "start" }}
              justify={{ base: "start", md: "center" }}
              width="100%"
              height="100%"
            >
              <HStack
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight={{ base: "500", md: "700" }}
                ml={{ base: "-100px", md: "0" }}
                mt={3}
                gap={{ base: "2", md: "5" }}
              >
                <Text color="gray.300">Hey there!</Text>
                <Text
                  bgGradient="linear-gradient(to top, #7928CA, #FF0080)"
                  bgClip="text"
                >
                  I'm
                </Text>
              </HStack>

              <VStack ml={{ base: "unset", md: "100px" }}>
                <AnimatedLogo
                  width={{ base: "200px", md: "350px" }}
                  height={{ base: "150px", md: "250px" }}
                />

                <Text
                  fontSize={{ base: "sm", md: "unset" }}
                  bgClip="text"
                  bgGradient="linear-gradient(to right, #c59bff, #75daff)"
                  mt={5}
                >
                  <AnimatedText text="Blockchain & Smart Contract Developer" />
                </Text>
                <Stack direction={"row"} spacing={5} mt="3">
                  <SocialButton
                    color="linear-gradient(to bottom, #33aaff 0%, #0077b5 50%, #005f87 100%)"
                    label={"LinkedIn"}
                    href={"https://www.linkedin.com/in/quangtran88/"}
                  >
                    <FaLinkedin />
                  </SocialButton>
                  <SocialButton
                    color="linear-gradient(to top, #d4d4d4 0%, #4a4a4a 50%, #2c2c2c 100%)"
                    label={"Github"}
                    href={"https://github.com/quangtran8588"}
                  >
                    <FaGithub />
                  </SocialButton>
                  <SocialButton
                    color="linear-gradient(to bottom, #33aaff 0%, #0077b5 50%, #005f87 100%)"
                    label={"Telegram"}
                    href={"https://telegram.me/JasonT8588"}
                  >
                    <FaTelegram />
                  </SocialButton>
                </Stack>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Transition>
  );
};

export default Home;
