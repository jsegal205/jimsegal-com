import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "@/components/loading";
import { Button } from "@/components/button";
import { Icon } from "@/icons";
import { Link } from "@/components/link";

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
    }, 2000); // simulate checking for 2 seconds

    return () => clearInterval(interval);
  }, [isChecking]);

  const handleButtonClick = () => {
    setIsChecking(true);
    setIsDoneChecking(false);
  };

  const today = new Date();
  const isTodayBirthday =
    (today.getMonth() === 5 && today.getDate() === 7) || // june 6
    (today.getMonth() === 7 && today.getDate() === 9); // aug 9

  const cakeClass = [
    "h-20 w-20 dark:fill-slate-100",
    isTodayBirthday ? "" : "rotate-180",
  ].join(" ");

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
        <div>
          <div className="flex justify-center flex-row">
            <Icon className={cakeClass} type="birthday-cake" />
            <h2 className="text-6xl mt-3 mx-4">
              {isTodayBirthday ? "YUP" : "Not so likely"}
            </h2>
            <Icon className={cakeClass} type="birthday-cake" />
          </div>

          <Link
            className="text-sm"
            to={
              "https://chatgpt.com/share/68444f4e-db98-800b-afa6-dc1927210dc1" as string
            }
          >
            source
            <Icon
              className="inline-block align-bottom ml-2 h-4 w-4"
              type="open-external"
            />
          </Link>
        </div>
      ) : isChecking ? (
        <div className="flex justify-center">
          <Loading icon="birthday-cake" label={`Checking for birthday`} />
        </div>
      ) : null}
    </div>
  );
};
