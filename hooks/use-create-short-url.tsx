import { useState } from "react";

export const useCreateShortUrl = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createShortUrl = async (originalUrl: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("data", data);
      setShortUrl(data);
    } catch (error) {
      setError("Wystąpił błąd. Spróbuj ponownie.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { createShortUrl, shortUrl, loading, error };
};
