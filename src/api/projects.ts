import { type IconTypes } from "@/icons";

export type Project = { title: string; route: string; icon: IconTypes };
export type Projects = Array<Project>;

export const projects: Projects = [
  { title: "Recipes", route: "/recipes", icon: "recipe-book" },
  { title: "Games", route: "/games", icon: "meeple" },
];
