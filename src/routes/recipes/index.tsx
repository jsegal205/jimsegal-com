import { createFileRoute, Link } from "@tanstack/react-router";

import { fetchAllRecipes } from "@/api/recipes";
import { type Recipe } from "@/api/recipes";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/recipes/")({
  component: () => <Recipes />,
});

const Recipes = () => {
  const { isError, isPending, data, error } = fetchAllRecipes();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Recipes</h1>
      <ol className="flex flex-col">
        {data.map((recipe: Recipe) => (
          <li key={recipe.slug}>
            <Link
              className="underline hover:decoration-pink-500 hover:text-pink-500"
              to="/recipes/$slug"
              params={{ slug: recipe.slug }}
            >
              {recipe.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};
