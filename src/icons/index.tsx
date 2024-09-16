import { Github } from "./github";
import { BaseballHat, CowboyHat } from "./hats";
import { Heart } from "./heart";
import { Meeple } from "./meeple";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";
import { Shorts } from "./shorts";
import { Temperature } from "./temperature";

export type IconTypes =
  | "baseball-hat"
  | "cowboy-hat"
  | "github"
  | "heart"
  | "meeple"
  | "open-external"
  | "recipe-book"
  | "shorts"
  | "temperature";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  "baseball-hat": BaseballHat(),
  "cowboy-hat": CowboyHat(),
  github: Github(),
  heart: Heart(),
  meeple: Meeple(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
  shorts: Shorts(),
  temperature: Temperature(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
