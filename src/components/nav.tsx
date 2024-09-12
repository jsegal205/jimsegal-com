import { Link } from "@tanstack/react-router";
import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";

export const Nav = () => (
  <nav className="place-content-center">
    <ol className="flex flex-row">
      {projects.map(({ route, title }: Project) => (
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
