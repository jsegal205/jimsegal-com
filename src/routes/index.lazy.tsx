import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="text-3xl font-bold underline">Hello home!</div>
  ),
});
