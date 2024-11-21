import { createContext, useEffect, useState } from "react";

export const myContext = createContext();

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return { toggleTheme, theme };
};
