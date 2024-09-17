import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { calculateShortsWearingProbability } from "@/api/shorts";
import { type Criteria } from "@/api/shorts";
import { fetchDailyMaxTemp, knownCoordinates } from "@/api/weather";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/_withnav/shorts/")({
  component: () => <Shorts />,
});

const Shorts = () => {
  const [probability, setProbability] = useState(50);
  const [criteria, setCriteria] = useState<Criteria>([]);

  const {
    chicago: { lat, long },
  } = knownCoordinates;
  const { isError, isPending, data, error } = fetchDailyMaxTemp(lat, long);

  useEffect(() => {
    if (data?.maxTemp) {
      const { criteria, probability } = calculateShortsWearingProbability({
        dailyMaxTemp: data.maxTemp,
      });

      setCriteria([
        { name: "Assumed city Jim is in", value: data.city },
        ...criteria,
      ]);
      setProbability(probability);
    }
  }, [data]);

  if (isPending) {
    return <Loading icon="shorts" />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <h1 className="mb-2">Is Jim Wearing Shorts?</h1>
      <h2 className="mb-2">There is a {probability}% that he is!</h2>
      <ul className="list-disc pl-8">
        {criteria.map(({ name, value }) => (
          <li key={name}>
            <label className="font-bold mr-2">{name}:</label>
            <label>{value}</label>
          </li>
        ))}
      </ul>
    </>
  );
};
