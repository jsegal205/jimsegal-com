import { Link } from "@tanstack/react-router";

export const NotFound = () => (
  <div className="flex flex-col items-center mt-4">
    <h1>Not found!</h1>
    <Link
      className="underline hover:decoration-pink-500 hover:text-pink-500"
      to="/"
    >
      Go somewhere known
    </Link>
  </div>
);
