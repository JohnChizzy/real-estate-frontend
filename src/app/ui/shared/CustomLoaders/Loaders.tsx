import React from 'react';
import { Spinner } from '@chakra-ui/react';
import type { ColorPalette } from "@chakra-ui/react"

interface LoadersProps {
  color?: string;
  size?: "inherit" | "xs" | "sm" | "md" | "lg" | "xl";
}

const Loader = ({
  color = "#1D591B",
  size = "xl"
}: LoadersProps) => {
  
  return (
    <div className="w-full h-full bg-inherit flex  justify-center items-center">
      <Spinner color={color} size={size} animationDuration="0.5s" />
    </div>
  );
};

export default Loader;

export const colorPalettes: ColorPalette[] = [
  "gray",
  "red",
  "green",
  "blue",
  "teal",
  "pink",
  "purple",
  "cyan",
  "orange",
  "yellow",
]
