import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/_withnav/jt-hat/")({
  component: () => <IsJTWearingAHat />,
});

const IsJTWearingAHat = () => {
  const [checkBaseball, setCheckBaseball] = useState(false);
  const [checkCowboy, setCheckCowboy] = useState(false);
  const [isHatWorn, setIsHatWorn] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    setIsHatWorn(false);
    setCheckCowboy(false);
    setCheckBaseball(true);

    setTimeout(() => {
      setCheckBaseball(false);
      setCheckCowboy(true);
    }, 2000);

    setTimeout(() => {
      setCheckCowboy(false);
      setIsHatWorn(true);
      setIsButtonDisabled(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <h1>Is JT wearing a hat?</h1>
      <p>
        Are you JT or someone you know named JT? Want to know if they are
        wearing a hat?
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8 disabled:bg-slate-500"
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        Check
      </button>

      <div className="flex justify-center">
        {checkBaseball && (
          <Loading icon="baseball-hat" label="Checking for baseball hats" />
        )}
        {checkCowboy && (
          <Loading icon="cowboy-hat" label="Checking for cowboy hats" />
        )}
        {isHatWorn && <h2 className="text-6xl">Very Likely</h2>}
      </div>
    </div>
  );
};
