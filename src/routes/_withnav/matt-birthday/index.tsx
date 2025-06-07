import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "@/components/loading";
import { Button } from "@/components/button";
import { Icon } from "@/icons";

export const Route = createFileRoute("/_withnav/matt-birthday/")({
  component: () => <IsMattsBirthday />,
});

const IsMattsBirthday = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [isDoneChecking, setIsDoneChecking] = useState(false);

  useEffect(() => {
    if (!isChecking) {
      return;
    }

    const interval = setInterval(() => {
      setIsChecking(false);
      setIsDoneChecking(true);
    }, 2000); // rotate every 2 seconds

    return () => clearInterval(interval);
  }, [isChecking]);

  const handleButtonClick = () => {
    setIsChecking(true);
    setIsDoneChecking(false);
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <h1>Is today Matt's birthday?</h1>
      <p>
        Do you know Matt and want to check to see if it's their birthday? You
        came to the right place!
      </p>

      <Button
        className="self-center mt-2"
        onClick={handleButtonClick}
        disabled={isChecking}
      >
        Check
      </Button>

      {isDoneChecking ? (
        <div className="flex justify-center flex-row">
          <Icon
            className="h-20 w-20 mr-4 dark:fill-slate-100"
            type="birthday-cake"
          />
          <h2 className="text-6xl mt-3">Very Likely</h2>
          <Icon
            className="h-20 w-20 ml-4 dark:fill-slate-100"
            type="birthday-cake"
          />
        </div>
      ) : isChecking ? (
        <div className="flex justify-center">
          <Loading icon="birthday-cake" label={`Checking for birthday`} />
        </div>
      ) : null}
    </div>
  );
};
