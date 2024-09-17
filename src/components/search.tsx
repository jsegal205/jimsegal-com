import { useState } from "react";

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
    <div className="flex items-center flex-row my-2">
      <label className="pr-2">Search:</label>
      <input
        className="border-2 border-slate-500 rounded px-3 py-1.5"
        type="text"
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
          onValueChange(value);
        }}
      />
      {(Boolean(search) || showReset) && (
        <button
          onClick={() => {
            setSearch("");
            onResetClick();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-2"
        >
          Reset
        </button>
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
