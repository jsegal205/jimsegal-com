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
          className="bg-slate-400 opacity-70 absolute top-0 left-0 h-screen w-screen z-[1000]"
        ></div>
      ) : null}

      <div className="relative">
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          type="button"
          className="space-y-1 py-3"
        >
          {[...Array(3)].map((ele) => (
            <div
              key={ele}
              className="w-6 h-1 rounded bg-slate-900 dark:bg-slate-100"
            ></div>
          ))}
        </button>
        <div
          className={`${isNavOpen ? "flex flex-col border-pink-500 border-2 bg-slate-100 dark:bg-slate-900 rounded-lg w-64 py-4 absolute top-8 right-0 z-[1001]" : "hidden"}`}
        >
          <button className="self-end mr-4" onClick={() => setIsNavOpen(false)}>
            <Icon
              className="h-6 w-6 hover:fill-pink-500 dark:fill-slate-100"
              type="cross"
            />
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
