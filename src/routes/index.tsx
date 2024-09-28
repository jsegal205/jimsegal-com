import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Link } from "@/components/link";
import { Icon } from "@/icons";
import { useEffect, useState } from "react";

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
      <ImageCarousel />
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
          <li key={site.name}>
            <Link to={site.route}>{site.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ImageCarousel = () => {
  // update to objects with image and alt text
  // maybe try to condense the images so they aren't so big.
  // add timer line to visually indicate that the image will change.
  // maybe programatically shuffle the array?
  const images = [
    "jim.jpg",
    "jim2.jpg",
    "jim3.jpg",
    "jim4.jpg",
    "jim5.jpg",
    "jim6.jpg",
    "jim7.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteLoop = () => {
    if (currentIndex === images.length - 1) {
      return setCurrentIndex(0);
    }

    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteLoop();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <article className="flex flex-nowrap overflow-hidden max-w-[200px] min-w-[100px] md:max-w-[400px] md:min-w-[200px]">
      {images.map((image) => {
        return (
          <img
            key={image}
            src={`/assets/${image}`}
            title="picture of me, Jim"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            className="min-w-full w-full object-cover rounded-3xl border-2 border-slate-500 transition ease-in-out duration-1000"
          />
        );
      })}
    </article>
  );
};
