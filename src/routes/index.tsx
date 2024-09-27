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
    <section className="flex flex-col grow items-center justify-evenly mt-4 md:flex-row md:mt-0">
      <article className="max-w-[200px] min-w-[100px] md:max-w-[400px] md:min-w-[200px]">
        <img
          src="/assets/jim.jpg"
          title="picture of me, Jim"
          className=" w-full object-cover rounded-3xl border-2 border-slate-500"
        />
      </article>
      <article className="text-center">
        <div className="mb-4">
          <h1 className="font-mono">Jim Segal</h1>
          <ExternalSites />
        </div>
        <div className="flex flex-col mb-2">
          <h4 className="mb-2">Projects</h4>
          {projects.map((project) => (
            <Project key={project.route} {...project} />
          ))}
        </div>
      </article>
    </section>
  );
};

const Project = ({ title, route, icon }: Project) => {
  return (
    <Link
      to={route}
      className="border-2 border-slate-500 rounded-lg px-4 py-2 flex flex-row justify-evenly items-center underline mb-2 last:mb-0 hover:border-pink-500"
    >
      <Icon className="flex-none ml-2 mr-4 h-8 w-8" type={icon} />
      <label className="grow px-2">{title}</label>
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
