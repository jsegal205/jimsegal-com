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

        <svg
          className="dark:hidden"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>moon with star</title>
          <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
          <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
        </svg>
      </Button>
    </div>
  );
};
