import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { fetchAllGames } from "@/api/games";
import { type Game, type Games } from "@/api/games";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/_withnav/games/")({
  component: () => <Games />,
});

const Games = () => {
  const [games, setGames] = useState<Games>([]);
  const [search, setSearch] = useState<string>("");
  const { isError, isPending, data, error } = fetchAllGames();

  useEffect(() => {
    setGames(data || []);
  }, [data]);

  const searchCallback = useCallback(
    (search: string) => {
      if (search) {
        const filteredGames = data!.filter((game) =>
          game.name.toLowerCase().includes(search.toLowerCase()),
        );

        setGames(filteredGames);
      } else {
        setGames(data!);
      }
    },
    [search, data],
  );

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
      <div>
        <label className="pr-2">Search:</label>
        <input
          className="border-2 border-slate-500 rounded p-1"
          type="text"
          value={search}
          onChange={({ target: { value } }) => {
            setSearch(value);
            searchCallback(value);
          }}
        />
      </div>
      <ol className="flex flex-wrap justify-evenly">
        {games.map((game: Game) => (
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

      {games.length === 0 ? (
        <div className="flex flex-col text-center">
          <h2>Whoops, no games found</h2>
          {Boolean(search) ? <div>Try updating the search</div> : null}
        </div>
      ) : null}
    </>
  );
};
