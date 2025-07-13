"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function useJsonFromUrl(paramName = 'url') {
  const searchParams = useSearchParams();
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const url = searchParams.get(paramName);

  useEffect(() => {
    if (!url) {
      setError("No URL parameter found");
      setData(null);
      return;
    }
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}