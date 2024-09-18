import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { fetchCurrentTemp, knownCoordinates } from "@/api/weather";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";
import { Button } from "@/components/button";

export const Route = createFileRoute("/_withnav/iscolderthan/")({
  component: () => <IsColderThan />,
});

const IsColderThan = () => {
  const [wellIsIt, setWellIsIt] = useState("");

  const [getLocationData, setGetLocationData] = useState<boolean>(false);
  const [locationLat, setLocationLat] = useState<number>();
  const [locationLong, setLocationLong] = useState<number>();
  const [browserLocationBlocked, setBrowserLocationBlocked] =
    useState<string>("");
  const [locationColderThan, setLocationColderThan] = useState("");

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

  const {
    isError: locationIsError,
    isPending: locationIsPending,
    data: locationData,
    error: locationError,
  } = fetchCurrentTemp(locationLat!, locationLong!, {
    enabled: getLocationData,
  });

  useEffect(() => {
    if (chiData?.currentTemp && akData?.currentTemp) {
      const isIt = tempCompare(akData.currentTemp!, chiData.currentTemp!);

      setWellIsIt(isIt);
    }
  }, [chiData, akData]);

  useEffect(() => {
    if (locationData?.currentTemp && akData?.currentTemp) {
      const isIt = tempCompare(akData.currentTemp!, locationData.currentTemp!);

      setLocationColderThan(isIt);
    }
  }, [locationData, akData]);

  const tempCompare = (akTemp: number, compareTemp: number): string => {
    let isIt = "NOPE";

    if (akTemp > compareTemp) {
      isIt = "YEP";
    }

    if (akTemp > compareTemp - 5) {
      isIt = "ALMOST";
    }

    return isIt;
  };

  const browserLocationEnabled = ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    setBrowserLocationBlocked("");
    setLocationLat(latitude);
    setLocationLong(longitude);
  };

  const browserLocationDisabled = (err: GeolocationPositionError) => {
    setGetLocationData(false);
    setBrowserLocationBlocked(err.message);
  };

  const checkBrowserLocation = () => {
    setBrowserLocationBlocked("");
    setGetLocationData(true);

    navigator.geolocation.getCurrentPosition(
      browserLocationEnabled,
      browserLocationDisabled,
    );
  };

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

      <LocationCurrentTemp {...chiData} />
      <LocationCurrentTemp {...akData} />

      {"geolocation" in navigator ? (
        <div className="flex flex-col mt-4">
          <h3 className="mb-2">Is your location colder than Anchorage?</h3>

          <Button className="self-center" onClick={checkBrowserLocation}>
            Let's find out
          </Button>

          {Boolean(browserLocationBlocked) ? (
            <Error
              message={`${browserLocationBlocked}. Please allow browser to access
                location information and try again.`}
              jimNotified={false}
            />
          ) : null}

          {getLocationData ? (
            <>
              {locationIsPending ? <Loading /> : null}
              {locationIsError ? (
                <Error message={locationError.message} />
              ) : null}
              {!locationIsPending &&
              !locationIsError &&
              locationLat &&
              locationLong &&
              locationData?.city &&
              locationData?.currentTemp ? (
                <>
                  <h2 className="mb-2">{locationColderThan}</h2>
                  <LocationCurrentTemp {...locationData} />
                </>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

const LocationCurrentTemp = ({
  city,
  currentTemp,
}: {
  city: string;
  currentTemp: number | undefined;
}) => (
  <label className="block">
    Current temperature in {city}: {currentTemp} °F
  </label>
);
