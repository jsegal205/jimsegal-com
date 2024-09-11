import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <main>
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
