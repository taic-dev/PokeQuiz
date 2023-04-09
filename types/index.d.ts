import { ReactNode } from "react";

export type HomeSliderProps = {
  children: ReactNode;
}

export type RangeType = {
  generation: number;
  min: number;
  max: number;
  checked: boolean;
}

export type PokemonObj = {
  desc?: Array<any> | undefined;
  answer?: Array<any> | undefined;
}

export type PokemonAnswerInfo = {
  length: number | undefined;
  genera: string | undefined;
  flavor: string | undefined;
  img: string | undefined;
}

export type QuizNameProps = {
  answerArray: string[];
  questionArray?: Array<PokemonObj> | undefined;
}