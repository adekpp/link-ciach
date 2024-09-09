"use client";
import { Scissors } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
export const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { theme } = useTheme();

  if (!mounted) return null;
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <div className="flex items-center justify-center">
        {theme === "dark" ? (
          <Link href="/">
            <Image
              src="/logo-dark.svg"
              alt="logo"
              width={50}
              height={20}
              className="w-[200px] h-auto"
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={20}
              className="w-[200px] h-auto"
            />
          </Link>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
};
