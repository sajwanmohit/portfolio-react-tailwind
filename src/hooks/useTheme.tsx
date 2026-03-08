import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    console.log("Initializing theme...");
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    console.log("Stored theme:", storedTheme);
    return storedTheme || "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
            console.log("Applying theme:", theme);
      root.classList.add("dark");
    } else {
            console.log("Applying theme:", theme);

      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("toggle theme called "+theme);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default useTheme;