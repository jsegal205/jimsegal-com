import { useEffect, useState } from "react";
import { Button } from "./button";

export const DarkModeToggle = () => {
  const htmlClasses = document.querySelector("html")?.classList;

  console.log(htmlClasses);

  const [theme, setTheme] = useState<"light" | "dark">(
    htmlClasses?.contains("dark") ? "dark" : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Button
      onClick={() => setTheme(htmlClasses?.contains("dark") ? "light" : "dark")}
    >
      {theme === "dark" ? "set light" : "set dark"}
    </Button>
  );
};
