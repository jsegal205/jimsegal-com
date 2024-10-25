import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Link } from "@/components/link";
import { DarkModeProvider } from "@/contexts/darkMode";
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

// This is here to get around typescript errors relating to tanstack router type safety
const githubSauce: string = "https://github.com/jsegal205/jimsegal-com";
export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <main className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between">
            <Outlet />

            <footer className="self-bottom mb-1">
              <div className="flex justify-center text-xs">
                <span className="mr-1">Made with</span>
                <Icon className="my-auto h-3 w-3 fill-red-500" type="heart" />
                <span className="mx-1">by Jim Segal</span>(
                <Link to={githubSauce}>source</Link>
                <span className="mx-1">on</span>
                <Icon
                  type="github"
                  className="my-auto h-3 w-3 dark:fill-slate-100"
                />
                )
              </div>
              <Suspense>
                <TanStackRouterDevtools />
                <ReactQueryDevtools />
              </Suspense>
            </footer>
          </main>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  ),
});
