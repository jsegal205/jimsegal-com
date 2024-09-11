import { Heart } from "./heart";
import { OpenExternal } from "./open-external";
import { RecipeBook } from "./recipe-book";

export type IconTypes = "heart" | "open-external" | "recipe-book";
type Icon = {
  className?: string;
  type: IconTypes;
};

const typeToSVG = {
  heart: Heart(),
  "open-external": OpenExternal(),
  "recipe-book": RecipeBook(),
};

export const Icon = ({ className, type }: Icon) => {
  return <div className={className}>{typeToSVG[type]}</div>;
};
