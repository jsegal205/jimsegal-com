import { Link } from "@/components/link";
import { Nav } from "@/components/nav";

export const HeaderNav = () => (
  <header className="p-4 border-b-2 border-slate-400 flex justify-between">
    <Link className="font-mono text-2xl !no-underline hover:!underline" to="/">
      Jim Segal
    </Link>

    <Nav />
  </header>
);
