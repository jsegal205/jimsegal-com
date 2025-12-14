import { useQuery } from "@tanstack/react-query";

type MaxDailyTemp = { city: string; maxTemp: number | undefined };
type APIMaxDailyTempResponse = {
  city: { name: string };
  list: Array<{ temp: { max: number } }>;
};

type CurrentTemp = { city: string; currentTemp: number | undefined };
type APICurrentTempResponse = {
  name: string;
  main: { temp: number | undefined };
};

export const knownCoordinates = {
  anchorage: { lat: 61.2175, long: -149.8584 },
  chicago: { lat: 41.8369, long: -87.6847 },
};

export const useFetchDailyMaxTemp = (lat: number, long: number) => {
  return useQuery({
    queryKey: ["daily-max-temp", lat, long],
    queryFn: async (): Promise<APIMaxDailyTempResponse> => {
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=imperial&cnt=1`;
      const response = await fetch(`${url}&lat=${lat}&lon=${long}`);

      if (!response.ok) {
        throw new Error("Error fetching daily max temperature");
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

export const useFetchCurrentTemp = (lat: number, long: number, opts = {}) => {
  return useQuery({
    queryKey: ["current-temp", lat, long],
    queryFn: async (): Promise<APICurrentTempResponse> => {
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=imperial`;
      const response = await fetch(`${url}&lat=${lat}&lon=${long}`);

      if (!response.ok) {
        throw new Error("Error fetching current temperature");
      }

      return response.json();
    },
    select: (data): CurrentTemp => {
      return {
        city: data.name,
        currentTemp: data.main.temp,
      };
    },
    ...opts,
  });
};
