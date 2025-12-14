import { createFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";

import { useFetchRecipeBySlug } from "@/api/recipes";
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
  const { isError, isPending, data, error } = useFetchRecipeBySlug(slug);

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
          {referenceLink}
          <Icon
            className="inline-block align-bottom ml-2 h-6 w-6"
            type="open-external"
          />
        </Link>
      ) : null}
      <div className="flex flex-col justify-between mt-4 sm:flex-row">
        <h2>Ingredients</h2>
        <Button
          className="my-2 self-start md:my-0"
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { node, ...rest } = props;
        return <ul className="pl-8 list-disc" {...rest} />;
      },
      ol(props) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { node, ...rest } = props;
        return <ul className="pl-8 list-decimal" {...rest} />;
      },
    }}
  >
    {children}
  </Markdown>
);
