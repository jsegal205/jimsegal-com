import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Icon } from "@/icons";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center md:justify-evenly md:flex-row">
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
          {/* <p>I'mma jim</p>
          <nav>
            <ul className="flex flex-row justify-evenly">
              <li>github</li>
              <li>email</li>
              <li>linkedin</li>
            </ul>
          </nav> */}
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
      className="border-2 border-slate-500 rounded p-2 flex flex-row justify-evenly items-center underline hover:decoration-pink-500 hover:text-pink-500 hover:border-pink-500 hover:fill-pink-500"
    >
      <Icon className="h-8 w-8" type={icon} />
      {title}
    </Link>
  );
};
