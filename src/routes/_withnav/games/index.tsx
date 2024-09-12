import { fetchAllGames } from "@/api/games";
import { type Game } from "@/api/games";
import { Loading } from "@/components/loading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withnav/games/")({
  component: () => <Games />,
});

const Games = () => {
  const { isError, isPending, data, error } = fetchAllGames();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Games</h1>
      <p>My collection of {data.length} tabletop games.</p>
      <ol className="flex flex-wrap justify-evenly">
        {data.map((game: Game) => (
          <li key={game.bgg_id}>
            <a
              className="flex flex-col items-center border-2 border-slate-500 rounded m-5 p-4 underline w-[225px] hover:decoration-pink-500 hover:text-pink-500 hover:border-pink-500"
              href={game.url}
            >
              <img
                className="max-h-[200px] mb-2"
                src={game.image_url}
                alt={`cover art for ${game.name}`}
              />
              <label className="text-xl">{game.name}</label>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};
