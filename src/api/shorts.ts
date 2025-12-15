import { formatTemperatureDual } from "@/utils/temperature";

export type Criteria = Array<{ name: string; value: string }>;

type ShortsProbabilityArgs = {
  dailyMaxTemp: number;
};
type ShortsProbabilityResults = {
  probability: number;
  criteria: Criteria;
};

const dateProbability = (date: Date): number => {
  const month = date.getMonth();
  if ([0, 1, 10, 11].includes(month)) {
    return -62;
  }
  if ([2, 9].includes(month)) {
    return 15;
  }
  if ([3, 8].includes(month)) {
    return 22;
  }
  if ([4, 5, 6, 7].includes(month)) {
    return 67;
  }
  return 0;
};

const tempProbability = (temp: number): number => {
  if (temp > 80) {
    return 1000;
  }
  if (temp < 55) {
    return -47;
  }
  if (temp > 65) {
    return 95;
  }

  return 0;
};

export const calculateShortsWearingProbability = ({
  dailyMaxTemp,
}: ShortsProbabilityArgs): ShortsProbabilityResults => {
  const d = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const base = 50 + dateProbability(d) + tempProbability(dailyMaxTemp);
  let probability = base;

  // it's never 100% or 0%, there's always a chance
  if (probability > 99) {
    probability = 99;
  }

  if (probability < 1) {
    probability = 1;
  }

  return {
    probability,
    criteria: [
      {
        name: "Today's date",
        value: d.toLocaleDateString("en-US", dateOptions),
      },
      {
        name: "Today's forecasted high temperature",
        value: formatTemperatureDual(dailyMaxTemp),
      },
    ],
  };
};
