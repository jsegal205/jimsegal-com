import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { dataURL } from "../../utils";

type Recipe = {
  title: string;
  ingredients: string;
  directions: string;
  notes?: string;
  referenceLink?: string;
  slug: string;
};

type Recipes = Array<Recipe>;

export const Route = createFileRoute("/recipes/$slug")({
  component: () => <Recipe />,
});

const Recipe = () => {
  const { slug } = Route.useParams();

  const { isError, isPending, data, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: async (): Promise<Recipes> => {
      const response = await fetch(`${dataURL}/recipes.json`);
      if (!response.ok) {
        throw new Error("Error fetching recipes");
      }

      return response.json();
    },
    select: (data) => {
      return data.filter((recipe) => recipe.slug === slug);
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Not found</div>;
  }

  const recipe = data[0];

  return (
    <>
      <h2>{recipe.title}</h2>
    </>
  );
};
