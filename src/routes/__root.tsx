import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Icon } from "@/icons";

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
      <main className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between">
        <Outlet />

        <footer className="self-bottom">
          <div className="flex justify-center text-xs">
            <span>Made with</span>
            <Icon className="mx-1 my-auto h-3 w-3 fill-red-500" type="heart" />
            <span className="mr-1">by Jim Segal</span>(
            <a
              href="https://github.com/jsegal205/jimsegal-com"
              className="mr-1 underline hover:decoration-pink-500 hover:text-pink-500 hover:fill-pink-500"
            >
              source
            </a>
            on{" "}
            <Icon
              type="github"
              className="ml-1 my-auto h-3 w-3 dark:fill-slate-100"
            />
            )
          </div>
          <Suspense>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </Suspense>
        </footer>
      </main>
    </QueryClientProvider>
  ),
});
