"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState("light");

  const handleToggle = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Toggle onClick={handleToggle} aria-label="Toggle theme">
      {currentTheme === "light" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Toggle>
  );
}
