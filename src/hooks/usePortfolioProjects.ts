import { useEffect, useState } from "react";
import type { Project } from "../types/github";

type PageResponse<T> = {
  content: T[];
  totalElements: number;
};

function usePortfolioProjects(reloadKey: number) {
  const [rawProjects, setRawProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:8080/api/public/projects?selected=true", {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: PageResponse<Project>) => {
        setRawProjects(data.content); // 🔴 correct mapping
      })
      .catch((err) => {
        setError(err.message || "Failed to load projects");
        setRawProjects([]);
      })
      .finally(() => setLoading(false));
  }, [reloadKey]); 

  return { rawProjects, loading, error };
}

export default usePortfolioProjects;