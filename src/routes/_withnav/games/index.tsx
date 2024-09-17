import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { fetchAllGames } from "@/api/games";
import { type Game, type Games } from "@/api/games";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";
import { Search, SearchEmptyResults } from "@/components/search";

export const Route = createFileRoute("/_withnav/games/")({
  component: () => <Games />,
});

const Games = () => {
  const [games, setGames] = useState<Games>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
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
    [data],
  );

  const randomGameCallback = () => {
    if (data?.length) {
      const randomGame = Math.floor(
        Math.random() * Math.floor(data?.length - 1),
      );

      setIsFiltered(true);
      setGames([data[randomGame]]);
    }
  };

  const resetCallback = () => {
    setIsFiltered(false);
    setGames(data || []);
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <h1>Games</h1>
      <p>My collection of {data.length} tabletop games.</p>
      <div className="flex justify-between items-center">
        <Search
          onValueChange={searchCallback}
          onResetClick={resetCallback}
          showReset={isFiltered}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={randomGameCallback}
        >
          Pick a random game
        </button>
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

      {games.length === 0 ? <SearchEmptyResults model="games" /> : null}
    </>
  );
};
