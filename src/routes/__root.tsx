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
        <Outlet />
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
