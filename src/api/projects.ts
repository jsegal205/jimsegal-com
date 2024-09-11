import { ReactNode } from "react";
import { RecipeBook } from "@/icons";

export type Project = { title: string; route: string; icon: ReactNode };
export type Projects = Array<Project>;

export const projects: Projects = [
  { title: "Recipes", route: "/recipes", icon: RecipeBook() },
];
