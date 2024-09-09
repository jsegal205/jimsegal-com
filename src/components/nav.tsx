import { Link } from "@tanstack/react-router";

type Route = { title: string; route: string };
type Routes = Array<Route>;

const routes: Routes = [
  { title: "Home", route: "/" },
  { title: "Recipes", route: "/recipes" },
];

export const Nav = () => (
  <nav className="border-b-2 border-slate-400">
    <ol className="flex flex-row">
      {routes.map(({ route, title }: Route) => (
        <li key={title} className="mr-2 last:mr-0 hover:underline">
          <Link to={route}>{title}</Link>
        </li>
      ))}
    </ol>
  </nav>
);
