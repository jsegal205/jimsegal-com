import { createFileRoute } from "@tanstack/react-router";
import { fetchRecipeBySlug } from "../../api/recipes";

export const Route = createFileRoute("/recipes/$slug")({
  component: () => <Recipe />,
});

const Recipe = () => {
  const { slug } = Route.useParams();
  const { isError, isPending, data, error } = fetchRecipeBySlug(slug);

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
