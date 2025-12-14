import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { useFetchAllGames } from "@/api/games";
import { type Game, type Games } from "@/api/games";
import { Button } from "@/components/button";
import { Error } from "@/components/error";
import { Link } from "@/components/link";
import { Loading } from "@/components/loading";
import { Search, SearchEmptyResults } from "@/components/search";

export const Route = createFileRoute("/_withnav/games/")({
  component: () => <Games />,
});

const Games = () => {
  const [games, setGames] = useState<Games>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const { isError, isPending, data, error } = useFetchAllGames();

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
      <div className="flex flex-col md:justify-between md:flex-row md:items-baseline">
        <Search
          onValueChange={searchCallback}
          onResetClick={resetCallback}
          showReset={isFiltered}
        />
        <Button onClick={randomGameCallback}>Pick a random game</Button>
      </div>

      {games.length === 0 ? (
        <SearchEmptyResults model="games" />
      ) : (
        <ol className="flex flex-wrap justify-evenly">
          {games.map(({ bgg_id, image_url, name, url }: Game) => (
            <li key={bgg_id}>
              <Link
                to={url}
                className="flex flex-col items-center border-2 border-slate-500 rounded m-5 p-4 underline w-[225px] hover:border-pink-500"
              >
                <img
                  className="max-h-[200px] mb-2"
                  src={image_url}
                  alt={`cover art for ${name}`}
                />
                <label className="text-xl">{name}</label>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
