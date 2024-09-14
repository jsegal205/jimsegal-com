import { Github } from "./github";
import { Heart } from "./heart";
import { Meeple } from "./meeple";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";
import { Shorts } from "./shorts";

export type IconTypes =
  | "github"
  | "heart"
  | "meeple"
  | "open-external"
  | "recipe-book"
  | "shorts";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  github: Github(),
  heart: Heart(),
  meeple: Meeple(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
  shorts: Shorts(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
