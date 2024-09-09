'use client'
import { Scissors } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <div className="flex items-center justify-center">
        {theme === "dark" ? (
          <Image
            src="/logo-dark.svg"
            alt="logo"
            width={50}
            height={20}
            className="w-[200px] h-auto"
          />
        ) : (
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={20}
            className="w-[200px] h-auto"
          />
        )}
      </div>
      <ThemeToggle />
    </header>
  );
};
