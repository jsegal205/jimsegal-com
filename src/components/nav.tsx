import { Link } from "@tanstack/react-router";

type Route = { title: string; route: string };
type Routes = Array<Route>;

const routes: Routes = [
  { title: "Home", route: "/" },
  { title: "Recipes", route: "/recipes" },
];

export const Nav = () => (
  <nav className="place-content-center">
    <ol className="flex flex-row">
      {routes.map(({ route, title }: Route) => (
        <li key={title} className="mr-2 last:mr-0">
          <Link
            className="underline hover:decoration-pink-500 hover:text-pink-500"
            to={route}
          >
            {title}
          </Link>
        </li>
      ))}
    </ol>
  </nav>
);
