import { BirthdayCake } from "./birthday-cake";
import { Cross } from "./cross";
import { Exclamation } from "./exclamation";
import { Github } from "./github";
import { BaseballHat, CowboyHat } from "./hats";
import { Heart } from "./heart";
import { Loading } from "./loading";
import { Meeple } from "./meeple";
import { MoonWithStar } from "./moon-with-star";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";
import { Shorts } from "./shorts";
import { Snake } from "./snake";
import { Sun } from "./sun";
import { Temperature } from "./temperature";

export type IconTypes =
  | "birthday-cake"
  | "baseball-hat"
  | "cowboy-hat"
  | "cross"
  | "exclamation"
  | "github"
  | "heart"
  | "loading"
  | "meeple"
  | "moon-with-star"
  | "open-external"
  | "recipe-book"
  | "shorts"
  | "snake"
  | "sun"
  | "temperature";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  "birthday-cake": BirthdayCake(),
  "baseball-hat": BaseballHat(),
  "cowboy-hat": CowboyHat(),
  cross: Cross(),
  exclamation: Exclamation(),
  github: Github(),
  heart: Heart(),
  loading: Loading(),
  meeple: Meeple(),
  "moon-with-star": MoonWithStar(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
  shorts: Shorts(),
  snake: Snake(),
  sun: Sun(),
  temperature: Temperature(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
