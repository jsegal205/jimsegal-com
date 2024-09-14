import { type IconTypes } from "@/icons";
import { sortBy } from "@/utils";

export type Project = { title: string; route: string; icon: IconTypes };
export type Projects = Array<Project>;

export const projects: Projects = sortBy(
  [
    { title: "Recipes", route: "/recipes", icon: "recipe-book" },
    { title: "Games", route: "/games", icon: "meeple" },
    { title: "Shorts", route: "/shorts", icon: "shorts" },
  ],
  "title",
);
