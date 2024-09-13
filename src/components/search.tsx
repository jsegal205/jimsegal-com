import { useState } from "react";

export const Search = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  return (
    <div>
      <label className="pr-2">Search:</label>
      <input
        className="border-2 border-slate-500 rounded p-1"
        type="text"
        value={search}
        onChange={({ target: { value } }) => {
          setSearch(value);
          onValueChange(value);
        }}
      />
    </div>
  );
};

export const SearchEmptyResults = ({ model }: { model: string }) => (
  <div className="flex flex-col text-center">
    <h2>Whoops, no {model} found</h2>
    <div>Try updating the search</div>
  </div>
);
