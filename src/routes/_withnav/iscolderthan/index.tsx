import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { fetchCurrentTemp, knownCoordinates } from "@/api/weather";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/_withnav/iscolderthan/")({
  component: () => <IsColderThan />,
});

const IsColderThan = () => {
  const [wellIsIt, setWellIsIt] = useState("");

  const {
    chicago: { lat: chiLat, long: chiLong },
    anchorage: { lat: akLat, long: akLong },
  } = knownCoordinates;
  const {
    isError: chiIsError,
    isPending: chiIsPending,
    data: chiData,
    error: chiError,
  } = fetchCurrentTemp(chiLat, chiLong);
  const {
    isError: akIsError,
    isPending: akIsPending,
    data: akData,
    error: akError,
  } = fetchCurrentTemp(akLat, akLong);

  useEffect(() => {
    if (chiData?.currentTemp && akData?.currentTemp) {
      let isIt = "NOPE";

      if (akData?.currentTemp > chiData?.currentTemp) {
        isIt = "YEP";
      }

      if (akData?.currentTemp > chiData?.currentTemp - 5) {
        isIt = "ALMOST";
      }

      setWellIsIt(isIt);
    }
  }, [chiData, akData]);

  if (chiIsPending || akIsPending) {
    return <Loading />;
  }

  if (chiIsError) {
    return <Error message={chiError.message} />;
  }
  if (akIsError) {
    return <Error message={akError.message} />;
  }

  return (
    <>
      <h1 className="mb-2">Is Chicago, IL colder than Alaska, AK currently?</h1>
      <h2 className="mb-2">{wellIsIt}</h2>
      <div>Current temperature in Chicago: {chiData.currentTemp} °F</div>
      <div>Current temperature in Anchorage: {akData.currentTemp} °F</div>
    </>
  );
};
