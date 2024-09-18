import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Link } from "@/components/link";

export const Nav = () => (
  <nav className="place-content-center">
    <ol className="flex flex-row">
      {projects.map(({ route, title }: Project) => (
        <li key={title} className="mr-2 last:mr-0">
          <Link to={route}>{title}</Link>
        </li>
      ))}
    </ol>
  </nav>
);
