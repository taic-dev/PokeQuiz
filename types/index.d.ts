import { ReactNode } from "react";

// Home Type
export type HomeSliderProps = {
  children: ReactNode;
}

// Description Type
export type DescriptionRangeType = {
  generation: number;
  min: number;
  max: number;
  checked: boolean;
}