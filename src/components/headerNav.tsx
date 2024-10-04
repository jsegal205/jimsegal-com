import { Link } from "@/components/link";
import { Nav } from "@/components/nav";
import { DarkModeToggle } from "./darkModeToggle";

export const HeaderNav = () => (
  <header className="p-4 border-b-2 border-slate-400 flex justify-between">
    <Link className="font-mono text-2xl !no-underline hover:!underline" to="/">
      Jim Segal
    </Link>

    <div className="flex gap-8">
      <DarkModeToggle />
      <Nav />
    </div>
  </header>
);
