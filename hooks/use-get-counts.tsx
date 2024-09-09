import { useEffect, useState } from "react";

export const useGetCounts = (urlId: string) => {
  const [counts, setCounts] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/${urlId}/stats`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCounts(data.counts);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Wystąpił błąd");
      });
  }, [urlId]);

  return { counts, error };
};
