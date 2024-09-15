import { Link } from "@tanstack/react-router";

import { Nav } from "@/components/nav";

export const HeaderNav = () => (
  <header className="pb-4 px-4 border-b-2 border-slate-400 flex justify-between">
    <Link
      className="text-2xl hover:underline hover:decoration-pink-500 hover:text-pink-500"
      to="/"
    >
      Jim Segal
    </Link>

    <Nav />
  </header>
);
