import { Github } from "./github";
import { Heart } from "./heart";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";

export type IconTypes = "github" | "heart" | "open-external" | "recipe-book";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  github: Github(),
  heart: Heart(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
