import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav/games/")({
  component: () => <Games />,
});

const Games = () => {
  return <h1>Games</h1>;
};
