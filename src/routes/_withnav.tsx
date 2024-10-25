import { HeaderNav } from "@/components/headerNav";
import {
  createFileRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav")({
  component: () => (
    <>
      <ScrollRestoration />
      <section className="m-4">
        <HeaderNav />

        <section className="p-4">
          <Outlet />
        </section>
      </section>
    </>
  ),
});
