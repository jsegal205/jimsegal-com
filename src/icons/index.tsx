import { Cross } from "./cross";
import { Exclamation } from "./exclamation";
import { Github } from "./github";
import { BaseballHat, CowboyHat } from "./hats";
import { Heart } from "./heart";
import { Loading } from "./loading";
import { Meeple } from "./meeple";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";
import { Shorts } from "./shorts";
import { Snake } from "./snake";
import { Temperature } from "./temperature";

export type IconTypes =
  | "baseball-hat"
  | "cowboy-hat"
  | "cross"
  | "exclamation"
  | "github"
  | "heart"
  | "loading"
  | "meeple"
  | "open-external"
  | "recipe-book"
  | "shorts"
  | "snake"
  | "temperature";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  "baseball-hat": BaseballHat(),
  "cowboy-hat": CowboyHat(),
  cross: Cross(),
  exclamation: Exclamation(),
  github: Github(),
  heart: Heart(),
  loading: Loading(),
  meeple: Meeple(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
  shorts: Shorts(),
  snake: Snake(),
  temperature: Temperature(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
