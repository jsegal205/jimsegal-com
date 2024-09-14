import { useQuery } from "@tanstack/react-query";

type MaxDailyTemp = { city: string; maxTemp: number | undefined };
type APIWeatherResponse = {
  city: { name: string };
  list: Array<{ temp: { max: number } }>;
};

export const knownCoordinates = {
  anchorage: { lat: 61.2175, long: -149.8584 },
  chicago: { lat: 41.8369, long: -87.6847 },
};

export const fetchDailyMaxTemp = (lat: number, long: number) => {
  return useQuery({
    queryKey: ["weather", lat, long],
    queryFn: async (): Promise<APIWeatherResponse> => {
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=imperial&cnt=1`;
      const response = await fetch(`${url}&lat=${lat}&lon=${long}`);

      if (!response.ok) {
        throw new Error("Error fetching games");
      }

      return response.json();
    },
    select: (data): MaxDailyTemp => {
      return {
        city: data.city.name,
        maxTemp: data?.list[0]?.temp?.max || undefined,
      };
    },
  });
};
