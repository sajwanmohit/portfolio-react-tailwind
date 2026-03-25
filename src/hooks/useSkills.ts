// hooks/useSkills.ts
import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";
import type { Skill } from "../types/skill";

export function useSkills() {
  const [data, setData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await getSkills();
        setData(res);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return { data, loading, error };
}
