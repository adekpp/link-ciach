"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <Moon className="h-4 w-4 text-slate-700" />
      </div>
    )
  );
};

export default ThemeToggle;
