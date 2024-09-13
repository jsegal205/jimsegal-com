import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav/shorts/")({
  component: () => <Shorts />,
});

const Shorts = () => {
  return (
    <>
      <h1>Is Jim Wearing Shorts?</h1>
    </>
  );
};
