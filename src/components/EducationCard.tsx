/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Card,
  CardHeader,
  HStack,
  Image,
  Text,
  CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import AnimationText from "./AnimationText";
import { AnimationTag } from "./TagContent";
import { AnimationDescription } from "./Description";
import { infoCards } from "../utils/designs";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Info {
  image: string;
  college: string;
  degree: string;
  major: string;
  city: string;
  state: string;
  country: string;
  admission: number;
  graduation: number;
  descriptions: string[];
}

interface Props {
  selectedIndex: number;
  info: Info;
  next: () => void;
}

const tagWrapperStyles = {
  gap: "3",
  mt: "2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
};

const tagStyles = {
  fontSize: { base: "2xs", lg: "xs" },
  textColor: "#FFF",
};

const descriptionWrapperStyles = {
  mt: "5",
};

const descriptionVariants = {
  animate: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const textStyles = {
  fontSize: { base: "2xs", sm: "xs", lg: "sm" },
  color: "white",
};

const MotionCard = motion(Card);

export default function EducationCard({ info, selectedIndex, next }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const extend = () => {
    setIsOpen((current) => !current);
  };

  const {
    college,
    image,
    degree,
    major,
    city,
    state,
    country,
    admission,
    graduation,
    descriptions,
  } = info;

  const design: any = infoCards[selectedIndex];

  return (
    <MotionCard
      layout
      transition={{
        layout: {
          duration: 0.5,
          type: "spring",
          stiffness: "3000",
          damping: "300",
        },
      }}
      width={{ base: "400px", sm: "500px", md: "600px" }}
      maxH={{ base: "350px", sm: "400px", md: "500px" }}
      variant="elevated"
      sx={design.card}
    >
      <CardHeader>
        <Image
          width="100%"
          height={{ base: "120px", sm: "150px", md: "200px" }}
          objectFit="contain"
          src={image}
          alt={college}
          sx={design.image}
          onClick={next}
        />
      </CardHeader>

      <CardBody onClick={extend} mt={-9}>
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          textColor="#FFF"
          mt="2"
          ml="2"
        >
          <AnimationText text={college} />
        </Text>

        <HStack
          justify="space-between"
          fontSize={{ base: "2xs", lg: "xs" }}
          textColor="#FFF"
        >
          {[...Array(2).keys()].map((index) => {
            const text =
              index === 0
                ? `${city}${state !== "None" ? `, ${state}, ` : ", "}${country}`
                : `${admission} - ${graduation}`;
            return (
              <Text key={`Education Info - Location - ${index}`} ml="2">
                <AnimationText text={text} />
              </Text>
            );
          })}
        </HStack>

        <AnimationTag
          wrapperStyles={tagWrapperStyles}
          tagStyles={{ ...tagStyles, ...design.tag }}
          data={[degree, major]}
        />

        {isOpen && (
          <AnimationDescription
            descriptions={descriptions}
            wrapperStyles={descriptionWrapperStyles}
            textStyles={textStyles}
            variants={descriptionVariants}
            onClick={extend}
          />
        )}
      </CardBody>
    </MotionCard>
  );
}
