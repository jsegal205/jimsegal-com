import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

type Recipe = {
  title: string;
  ingredients: string;
  directions: string;
  notes?: string;
  referenceLink?: string;
  slug: string;
};

type Recipes = Array<Recipe>;

export const Route = createLazyFileRoute("/recipes")({
  component: () => <Recipes />,
});

const Recipes = () => {
  const { isError, isPending, data, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: async (): Promise<Recipes> => {
      const response = await fetch("./data/recipes.json");
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
        <div>{recipe.title}</div>
      ))}
    </>
  );
};
