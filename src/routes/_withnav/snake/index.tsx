import { Snake } from "@/components/snake";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav/snake/")({
  component: () => (
    <div className="flex flex-col items-center mt-4">
      <Snake />
    </div>
  ),
});
