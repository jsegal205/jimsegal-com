import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Link } from "@/components/link";
import { Icon } from "@/icons";
import { useEffect, useState } from "react";
import { DarkModeToggle } from "@/components/darkModeToggle";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const Home = () => {
  return (
    <>
      <div className="absolute top-2 right-2">
        <DarkModeToggle />
      </div>
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
    </>
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

const externalLinks: Array<{ name: string; route: string }> = [
  { name: "Github", route: "https://github.com/jsegal205" },
  { name: "LinkedIn", route: "https://www.linkedin.com/in/jimsegal/" },
];

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

const images: Array<{ asset: string; alt: string }> = [
  {
    asset: "jim.jpg", // headshot
    alt: "A man smiling in a professional headshot, wearing a gray button-up shirt, with short brown hair and a neutral background.",
  },
  {
    asset: "jim2.jpg", // sparkle jacket
    alt: "A man in a black sequined jacket and jeans playfully poses with finger guns in a clothing store.",
  },
  {
    asset: "jim3.jpg", //moonpie
    alt: "A man in a black shirt is sitting at a table biting into a chocolate Moon Pie.",
  },
  {
    asset: "jim4.jpg", // spock kisses
    alt: "A man sitting on the floor in a kitchen, smiling as a black and white dog wearing a green harness affectionately licks his face.",
  },
  {
    asset: "jim5.jpg", // beach contemplation
    alt: "A man standing barefoot in shallow ocean water at the beach, holding his shoes in his hand, gazing at the horizon as clouds fill the sky.",
  },
  {
    asset: "jim6.jpg", // yelling at astronaut
    alt: "A man in casual clothing playfully poses with a mannequin dressed in a NASA astronaut suit inside a modern indoor setting.",
  },
  {
    asset: "jim7.jpg", // rock contemplation
    alt: "A man in a grey shirt and black shorts stands on rocky terrain with a forested background, arms crossed and facing the camera. The sunlight creates visible lens flares in the image.",
  },
];

const ImageCarousel = () => {
  const imageRotationMS = 5000;
  const progressUpdateMS = imageRotationMS / 100;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const infiniteLoop = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      infiniteLoop();
      setProgress(0);
    }, imageRotationMS);

    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime % imageRotationMS) / progressUpdateMS; // Calculate progress (in percentage)
      setProgress(newProgress);
    }, progressUpdateMS);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentIndex]);

  return (
    <section className="relative flex flex-col max-w-[200px] min-w-[100px] md:max-w-[400px] md:min-w-[200px] overflow-hidden rounded-3xl border-2 border-slate-500">
      <article className="flex flex-nowrap">
        {images.map((image) => (
          <img
            key={image.asset}
            src={`/assets/${image.asset}`}
            title={image.alt}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            className="min-w-full w-full object-cover transition ease-in-out duration-1000"
          />
        ))}
      </article>
      <ProgressBar progress={progress} />
    </section>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-transparent">
    <div
      className="h-full bg-pink-500 rounded"
      style={{
        width: `${progress}%`,
        transition: "width 0.04s ease-in-out",
      }}
    ></div>
  </div>
);
