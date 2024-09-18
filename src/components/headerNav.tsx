import { Link } from "@/components/link";
import { Nav } from "@/components/nav";

export const HeaderNav = () => (
  <header className="pb-4 px-4 border-b-2 border-slate-400 flex justify-between">
    <Link className="text-2xl !no-underline hover:!underline" to="/">
      Jim Segal
    </Link>

    <Nav />
  </header>
);
