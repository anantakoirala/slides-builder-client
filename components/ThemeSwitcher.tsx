"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Switch
        checked={theme === "light"}
        className="h-10 w-20 pl-1 data-[state=checked]:bg-primary/80"
        aria-label="Toogle dark mode"
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default ThemeSwitcher;
