import { useState } from "react";

import { projects } from "@/api/projects";
import { type Project } from "@/api/projects";
import { Link } from "@/components/link";
import { Icon } from "@/icons";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen ? (
        // overlay to handle closing when clicked outside
        <div
          onClick={() => setIsNavOpen(false)}
          className="bg-slate-400 opacity-70 absolute top-0 left-0 h-screen w-screen z-10"
        ></div>
      ) : null}
      <div className="relative">
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          type="button"
          className="space-y-1"
        >
          <div className="w-6 h-1 bg-slate-800"></div>
          <div className="w-6 h-1 bg-slate-800"></div>
          <div className="w-6 h-1 bg-slate-800"></div>
        </button>
        <div
          className={`${isNavOpen ? "border-pink-500 border-2 bg-slate-100 rounded-lg w-64 py-4 absolute top-8 z-20 right-0 duration-200 flex flex-col" : "hidden"}`}
        >
          <button className="self-end mr-4" onClick={() => setIsNavOpen(false)}>
            {/* close button */}
            <Icon className="h-6 w-6 hover:fill-pink-500" type="cross" />
          </button>

          <ul className="flex flex-col">
            {projects.map(({ route, title }: Project) => (
              <li key={title} className="flex text-center">
                <Link
                  onClick={() => setIsNavOpen(false)}
                  className="w-full p-2"
                  to={route}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
