import { createFileRoute } from "@tanstack/react-router";

import { fetchRecipeBySlug } from "@/api/recipes";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/recipes/$slug")({
  component: () => <Recipe />,
});

const Recipe = () => {
  const { slug } = Route.useParams();
  const { isError, isPending, data, error } = fetchRecipeBySlug(slug);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Not found</div>;
  }

  const { title, referenceLink, ingredients, directions, notes } = data[0];

  return (
    <>
      <h1>{title}</h1>
      {referenceLink ? <label>{referenceLink}</label> : null}
      <h2>Ingredients</h2>
      {ingredients}
      <h2>Directions</h2>
      {directions}
      {notes ? (
        <>
          <h2>Notes</h2>
          {notes}
        </>
      ) : null}
    </>
  );
};
