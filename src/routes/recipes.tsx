import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { dataURL } from "../utils";

type Recipe = {
  title: string;
  ingredients: string;
  directions: string;
  notes?: string;
  referenceLink?: string;
  slug: string;
};

type Recipes = Array<Recipe>;

export const Route = createFileRoute("/recipes")({
  component: () => <Recipes />,
});

const Recipes = () => {
  const { isError, isPending, data, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: async (): Promise<Recipes> => {
      const response = await fetch(`${dataURL}/recipes.json`);
      if (!response.ok) {
        throw new Error("Error fetching recipes");
      }

      return response.json();
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h2>Recipes</h2>
      {data.map((recipe: Recipe) => (
        <div key={recipe.slug}>{recipe.title}</div>
      ))}
    </>
  );
};
