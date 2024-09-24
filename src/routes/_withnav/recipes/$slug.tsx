import { createFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";

import { fetchRecipeBySlug } from "@/api/recipes";
import { Error } from "@/components/error";
import { Link } from "@/components/link";
import { Loading } from "@/components/loading";
import { NotFound } from "@/components/notFound";
import { Icon } from "@/icons";
import { Button } from "@/components/button";

export const Route = createFileRoute("/_withnav/recipes/$slug")({
  component: () => <Recipe />,
});

const Recipe = () => {
  const { slug } = Route.useParams();
  const { isError, isPending, data, error } = fetchRecipeBySlug(slug);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  if (data.length === 0) {
    return <NotFound />;
  }

  const { title, referenceLink, ingredients, directions, notes } = data[0];

  return (
    <>
      <Link to="/recipes">{"<< "}All Recipes</Link>
      <h1>{title}</h1>
      {referenceLink ? (
        <Link to={referenceLink}>
          <div className="flex">
            {referenceLink}
            <Icon className="ml-1 h-6 w-6" type="open-external" />
          </div>
        </Link>
      ) : null}
      <div className="flex flex-col justify-between mt-4 sm:flex-row">
        <h2>Ingredients</h2>
        <Button
          className="self-start"
          onClick={() => {
            navigator.clipboard.writeText(ingredients.replace(/-\s/gm, ""));
          }}
        >
          Copy Ingredients
        </Button>
      </div>
      <CustomMarkdown>{ingredients}</CustomMarkdown>
      <h2 className="mt-4">Directions</h2>
      <CustomMarkdown>{directions}</CustomMarkdown>
      {notes ? (
        <>
          <h2 className="mt-4">Notes</h2>
          <CustomMarkdown>{notes}</CustomMarkdown>
        </>
      ) : null}
    </>
  );
};

const CustomMarkdown = ({ children }: { children: string }) => (
  <Markdown
    components={{
      ul(props) {
        const { node, ...rest } = props;
        return <ul className="pl-8 list-disc" {...rest} />;
      },
      ol(props) {
        const { node, ...rest } = props;
        return <ul className="pl-8 list-decimal" {...rest} />;
      },
    }}
  >
    {children}
  </Markdown>
);
