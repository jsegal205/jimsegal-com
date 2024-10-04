import { useState } from "react";

import { Button } from "@/components/button";

export const Search = ({
  onValueChange,
  onResetClick,
  showReset = false,
}: {
  onValueChange: (value: string) => void;
  onResetClick: () => void;
  showReset?: boolean;
}) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col md:items-baseline md:flex-row my-2">
      <label className="pr-2">Search:</label>
      <input
        className="border-2 border-slate-500 rounded px-3 py-1.5 bg-slate-100 dark:text-slate-900"
        type="text"
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
          onValueChange(value);
        }}
      />
      {(Boolean(search) || showReset) && (
        <Button
          className="mt-2 md:mt-0 md:ml-2"
          onClick={() => {
            setSearch("");
            onResetClick();
          }}
        >
          Reset
        </Button>
      )}
    </div>
  );
};

export const SearchEmptyResults = ({ model }: { model: string }) => (
  <div className="flex flex-col text-center">
    <h2>Whoops, no {model} found</h2>
    <div>Try updating the search</div>
  </div>
);
