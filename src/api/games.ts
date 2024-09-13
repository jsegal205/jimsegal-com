import { useQuery } from "@tanstack/react-query";
import { dataURL, sortBy } from "@/utils";

export type Game = {
  name: string;
  url: string;
  image_url: string;
  bgg_id: number;
};

export type Games = Array<Game>;

export const fetchAllGames = () => {
  return useQuery<Games>({
    queryKey: ["games"],
    queryFn: async (): Promise<Games> => {
      const response = await fetch(`${dataURL}/games.json`);
      if (!response.ok) {
        throw new Error("Error fetching games");
      }

      return response.json();
    },
    select: (data) => sortBy(data, "name"),
  });
};
