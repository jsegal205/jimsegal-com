import { createFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

import { fetchRecipeBySlug } from "@/api/recipes";
import { Loading } from "@/components/loading";
import { OpenExternal } from "@/components/open-external";

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
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Not found</div>;
  }

  const { title, referenceLink, ingredients, directions, notes } = data[0];

  return (
    <>
      <h1>{title}</h1>
      {referenceLink ? (
        <Link
          className="underline hover:decoration-pink-500 hover:text-pink-500"
          to={referenceLink}
        >
          <OpenExternal text={referenceLink} />
        </Link>
      ) : null}
      <div className="flex flex-col justify-between sm:flex-row">
        <h2>Ingredients</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigator.clipboard.writeText(ingredients.replace(/-\s/gm, ""));
          }}
        >
          Copy Ingredients
        </button>
      </div>
      <CustomMarkdown>{ingredients}</CustomMarkdown>
      <h2>Directions</h2>
      <CustomMarkdown>{directions}</CustomMarkdown>
      {notes ? (
        <>
          <h2>Notes</h2>
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
