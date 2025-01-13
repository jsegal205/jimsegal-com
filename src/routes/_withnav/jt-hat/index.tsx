import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "@/components/loading";
import { Button } from "@/components/button";
import { IconTypes } from "@/icons";

export const Route = createFileRoute("/_withnav/jt-hat/")({
  component: () => <IsJTWearingAHat />,
});

const hats: Array<{ icon: IconTypes; label: string }> = [
  { icon: "cowboy-hat", label: "cowboy hats" },
  { icon: "baseball-hat", label: "baseball hats" },
];

const IsJTWearingAHat = () => {
  const [hatIndex, setHatIndex] = useState<number>(0);
  const [isCheckingHats, setIsCheckingHats] = useState(false);
  const [isDoneChecking, setIsDoneChecking] = useState(false);

  useEffect(() => {
    if (!isCheckingHats) {
      return;
    }

    const interval = setInterval(() => {
      setHatIndex((prevHatIndex) => {
        if (hatIndex + 1 >= hats.length) {
          setIsCheckingHats(false);
          setIsDoneChecking(true);
          return prevHatIndex;
        }

        return prevHatIndex + 1;
      });
    }, 2000); // rotate every 2 seconds

    return () => clearInterval(interval);
  }, [isCheckingHats, hatIndex]);

  const handleButtonClick = () => {
    setHatIndex(0);
    setIsCheckingHats(true);
    setIsDoneChecking(false);
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <h1>Is JT wearing a hat?</h1>
      <p>
        Are you JT or someone you know named JT? Want to know if they are
        wearing a hat?
      </p>

      <Button
        className="self-center mt-2"
        onClick={handleButtonClick}
        disabled={isCheckingHats}
      >
        Check
      </Button>

      {isDoneChecking ? (
        <div className="flex justify-center">
          <h2 className="text-6xl mt-3">Very Likely</h2>
        </div>
      ) : isCheckingHats ? (
        <div className="flex justify-center">
          <Loading
            icon={hats[hatIndex].icon}
            label={`Checking for ${hats[hatIndex].label}`}
          />
        </div>
      ) : null}
    </div>
  );
};
