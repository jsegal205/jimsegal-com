import { Link } from "@/components/link";

export const NotFound = () => (
  <div className="flex flex-col items-center mt-4">
    <h1>Not found!</h1>
    <Link to="/">Go somewhere known</Link>
  </div>
);
