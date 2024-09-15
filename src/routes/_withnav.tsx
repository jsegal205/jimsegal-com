import { HeaderNav } from "@/components/headerNav";
import { Nav } from "@/components/nav";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav")({
  component: () => (
    <section className="m-4">
      <HeaderNav />

      <section className="p-4">
        <Outlet />
      </section>
    </section>
  ),
});
