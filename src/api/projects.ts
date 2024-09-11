import { ReactNode } from "react";
import { RecipeBook } from "@/icons/recipe-book";

export type Project = { title: string; route: string; icon: ReactNode };
export type Projects = Array<Project>;

export const projects: Projects = [
  { title: "Recipes", route: "/recipes", icon: RecipeBook() },
];
