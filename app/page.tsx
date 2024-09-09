"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkIcon, Scissors, Check, Copy, BarChart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { FeaturesCard } from "@/components/features-card";
import { createShortUrl } from "./utils";
import Link from "next/link";
import { toast } from "sonner";
export default function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shortUrl = await createShortUrl(url);
    setShortenedUrl(shortUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    toast.success("Skopiowano do schowka");
  };

  return (
    <>
      <section className="flex w-full py-10 md:py-24 lg:py-24 justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#121212] dark:text-white">
                Skróć swój{" "}
                <span className="text-blue-500 underline-offset-3 underline cursor-pointer">
                  LINK
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Skracaj swoje linki w kilka sekund.
              </p>
            </div>
            <div className="flex flex-col w-full max-w-sm space-y-2 relative">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  className="flex-1 placeholder:opacity-40 text-[#121212] dark:text-white"
                  placeholder="Link do skórcenia"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <Button type="submit">Skróć</Button>
              </form>
              {shortenedUrl && (
                <div className="absolute inset-0 top-12">
                  <div className="flex items-center bg-green-900 p-3 rounded-md justify-between">
                    <Check className="text-green-600" />
                    <p className="font-medium text-[#121212] dark:text-white">{shortenedUrl}</p>
                    <Button
                      className="bg-white/10 hover:bg-white/20 text-white hover:text-white active:bg-white/10"
                      variant="ghost"
                      size="default"
                      onClick={copyToClipboard}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopiuj
                    </Button>
                  </div>
                  <div className="text-base text-[#121212] dark:text-white">
                    <p>Śledź klinięcia w swój link:</p>
                    <Link href={`${shortenedUrl}/stats`} className="text-blue-500 underline">
                      {shortenedUrl}/stats
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full pt-36 pb-8 md:pt-24 lg:py-24 ">
        <div className="container mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#121212] dark:text-white">
            Funkcje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturesCard
              icon={Scissors}
              title="Szybkie skracanie"
              description="Skróć swoje linki w kilka sekund dzięki naszemu szybkiemu przetwarzaniu."
            />
            <FeaturesCard
              icon={LinkIcon}
              title="Niestandardowe linki"
              description="Twórz łatwe do zapamiętania, spersonalizowane krótkie linki."
            />
            <FeaturesCard
              icon={BarChart}
              title="Statystyki"
              description="Śledź kliknięcia w swoje linki."
            />
          </div>
        </div>
      </section>
    </>
  );
}
