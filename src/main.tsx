import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  ScrollRestoration,
} from "@tanstack/react-router";
import * as Sentry from "@sentry/react";

import { routeTree } from "@/routeTree.gen";

import { NotFound } from "@/components/notFound";
import { HeaderNav } from "@/components/headerNav";

import "@/index.css";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: "https://c63c4a4bf9af9744352abd31f42fab39@o345528.ingest.us.sentry.io/4507958443442176",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0,
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

const router = createRouter({
  defaultNotFoundComponent: () => (
    <>
      <ScrollRestoration />
      <section className="m-4">
        <HeaderNav />

        <section className="p-4">
          <NotFound />
        </section>
      </section>
    </>
  ),
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
