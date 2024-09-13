import { useQuery } from "@tanstack/react-query";
import { dataURL, sortBy } from "@/utils";

export type Recipe = {
  title: string;
  ingredients: string;
  directions: string;
  notes?: string;
  referenceLink?: string;
  slug: string;
};

export type Recipes = Array<Recipe>;

export const fetchAllRecipes = () => {
  return allRecipes();
};
export const fetchRecipeBySlug = (slug: string) => {
  return allRecipes({
    selectCB: (data: Recipes) => {
      return data.filter(
        (recipe) => recipe.slug.toLowerCase() === slug.toLowerCase(),
      );
    },
  });
};

const allRecipes = ({ selectCB } = { selectCB: (data: Recipes) => data }) => {
  return useQuery<Recipes>({
    queryKey: ["recipes"],
    queryFn: async (): Promise<Recipes> => {
      const response = await fetch(`${dataURL}/recipes.json`);
      if (!response.ok) {
        throw new Error("Error fetching recipes");
      }

      return response.json();
    },
    select: (data) => {
      const sorted = sortBy(data, "title");

      return selectCB(sorted);
    },
  });
};
