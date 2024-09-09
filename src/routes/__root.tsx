import React, { Suspense } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Nav } from "../components/nav";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <main className="m-2">
      <Nav />

      <section>
        <Outlet />
      </section>
      <footer>
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </footer>
    </main>
  ),
});
