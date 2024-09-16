import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "@/components/loading";

export const Route = createFileRoute("/_withnav/jt-hat/")({
  component: () => <IsJTWearingAHat />,
});

const IsJTWearingAHat = () => {
  const [isHatWorn, setIsHatWorn] = useState(false);
  const [checkBaseball, setCheckBaseball] = useState(false);
  const [checkCowboy, setCheckCowboy] = useState(false);

  const handleButtonClick = () => {
    setCheckBaseball(true);
    // setIsHatWorn(true);
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <h1>Is JT wearing a hat?</h1>
      <p>
        Are you JT or someone you know named JT? Want to know if they are
        wearing a hat?
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={handleButtonClick}
      >
        Check
      </button>

      {isHatWorn && <h2 className="text-6xl">Very Likely</h2>}
      {checkBaseball && (
        <div className="justify-center text-2xl">
          <Loading icon="baseball-hat" />
        </div>
      )}
    </div>
  );
};
