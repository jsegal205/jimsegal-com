import { useDarkModeContext } from "@/contexts/darkMode";
import { Button } from "./button";
import { Icon } from "@/icons";

export const DarkModeToggle = () => {
  const { darkModeEnabled, toggleDarkMode } = useDarkModeContext();

  return (
    <div className="flex justify-center group">
      <input
        type="checkbox"
        name="light-switch"
        className="sr-only"
        onChange={toggleDarkMode}
        checked={darkModeEnabled}
      />
      <span className="sr-only">Switch to light / dark version</span>

      <Button
        kind="link"
        className="rounded-lg cursor-pointer px-4 py-3 border-2 border-slate-500 dark:border-slate-400 flex flex-col"
        onClick={toggleDarkMode}
      >
        <Icon
          className="hidden dark:inline-block h-4 w-4 group-hover:animate-spin"
          type="sun"
        />
        <Icon
          className="dark:hidden h-4 w-4 group-hover:animate-spin"
          type="moon-with-star"
        />
      </Button>
    </div>
  );
};
