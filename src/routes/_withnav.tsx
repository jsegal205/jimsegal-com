import { Nav } from "@/components/nav";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav")({
  component: () => (
    <>
      <header className="pb-4 px-4 border-b-2 border-slate-400 flex justify-between">
        <Link
          className="text-2xl hover:underline hover:decoration-pink-500 hover:text-pink-500"
          to="/"
        >
          Jim Segal
        </Link>

        <Nav />
      </header>

      <section className="p-4">
        <Outlet />
      </section>
    </>
  ),
});
