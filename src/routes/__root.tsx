import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
