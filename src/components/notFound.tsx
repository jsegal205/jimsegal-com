import { Link } from "@/components/link";
import { Snake } from "@/components/snake";

export const NotFound = () => (
  <div className="flex flex-col items-center mt-4">
    <h1>Not found!</h1>
    <Link to="/">Go somewhere known</Link>
    <Snake />
  </div>
);
