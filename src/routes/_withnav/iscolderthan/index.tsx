import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav/iscolderthan/")({
  component: () => <IsColderThan />,
});

const IsColderThan = () => {
  return <h1>Is Chicago, IL colder than Alaska, AK currently?</h1>;
};
