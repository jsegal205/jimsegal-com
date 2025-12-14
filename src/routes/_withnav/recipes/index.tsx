import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { useFetchAllRecipes } from "@/api/recipes";
import { type Recipe, type Recipes } from "@/api/recipes";
import { Error } from "@/components/error";
import { Link } from "@/components/link";
import { Loading } from "@/components/loading";
import { Search, SearchEmptyResults } from "@/components/search";

export const Route = createFileRoute("/_withnav/recipes/")({
  component: () => <Recipes />,
});

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipes>([]);
  const { isError, isPending, data, error } = useFetchAllRecipes();

  useEffect(() => {
    setRecipes(data || []);
  }, [data]);

  const searchCallback = useCallback(
    (search: string) => {
      if (search) {
        const filteredRecipes = data!.filter((recipe: Recipe) =>
          recipe.title.toLowerCase().includes(search.toLowerCase()),
        );

        setRecipes(filteredRecipes);
      } else {
        setRecipes(data!);
      }
    },
    [data],
  );

  const resetCallback = () => {
    setRecipes(data || []);
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <h1>Recipes</h1>
      <Search onValueChange={searchCallback} onResetClick={resetCallback} />
      <ol className="flex flex-col space-y-2">
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.slug}>
            <Link to="/recipes/$slug" params={{ slug: recipe.slug }}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ol>
      {recipes.length === 0 ? <SearchEmptyResults model="recipes" /> : null}
    </>
  );
};
