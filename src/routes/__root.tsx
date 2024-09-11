import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Nav } from "@/components/nav";

const queryClient = new QueryClient();

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <main className="m-4">
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
        <footer>
          <Suspense>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </Suspense>
        </footer>
      </main>
    </QueryClientProvider>
  ),
});
