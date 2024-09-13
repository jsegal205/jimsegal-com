import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { fetchAllRecipes } from "@/api/recipes";
import { type Recipe, type Recipes } from "@/api/recipes";
import { Loading } from "@/components/loading";
import { Search, SearchEmptyResults } from "@/components/search";

export const Route = createFileRoute("/_withnav/recipes/")({
  component: () => <Recipes />,
});

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipes>([]);
  const { isError, isPending, data, error } = fetchAllRecipes();

  useEffect(() => {
    setRecipes(data || []);
  }, [data]);

  const searchCallback = useCallback((search: string) => {
    if (search) {
      const filteredRecipes = data!.filter((recipe: Recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase()),
      );

      setRecipes(filteredRecipes);
    } else {
      setRecipes(data!);
    }
  }, []);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Recipes</h1>
      <Search onValueChange={searchCallback} />
      <ol className="flex flex-col">
        {recipes.map((recipe: Recipe) => (
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
      {recipes.length === 0 ? <SearchEmptyResults model="recipes" /> : null}
    </>
  );
};
