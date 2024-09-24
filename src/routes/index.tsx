import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Link } from "@/components/link";
import { Icon } from "@/icons";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const externalLinks: Array<{ name: string; route: string }> = [
  { name: "Github", route: "https://github.com/jsegal205" },
  { name: "LinkedIn", route: "https://www.linkedin.com/in/jimsegal/" },
];

const Home = () => {
  return (
    <section className="flex flex-col grow items-center  justify-evenly md:flex-row">
      <article className="max-w-[400px] min-w-[200px]">
        <img
          src="/assets/jim.jpg"
          title="picture of me, Jim"
          className=" w-full object-cover rounded-3xl border-2 border-slate-500"
        />
      </article>
      <article className="text-center">
        <div className="mb-4">
          <h1>Jim Segal</h1>
          <ExternalSites />
        </div>
        <h4 className="mb-2">Projects</h4>
        {projects.map((project) => (
          <Project key={project.route} {...project} />
        ))}
      </article>
    </section>
  );
};

const Project = ({ title, route, icon }: Project) => {
  return (
    <Link
      to={route}
      className="border-2 border-slate-500 rounded p-2 flex flex-row justify-evenly items-center underline mb-2 last:mb-0 hover:border-pink-500"
    >
      <Icon className="h-8 w-8 mr-2" type={icon} />
      {title}
    </Link>
  );
};

const ExternalSites = () => {
  return (
    <nav className="mt-2">
      <ul className="flex flex-row justify-evenly">
        {externalLinks.map((site) => (
          <li>
            <Link to={site.route}>{site.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
