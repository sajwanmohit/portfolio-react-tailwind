import { useState, useEffect, useMemo } from "react";
import type { GithubRepo, Project } from "../types/github";

function useGithubProjects(username: string, reloadKey: number) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetchReposWithRetry(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`,
    )
      .then((data: GithubRepo[]) => {
        setRepos(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setRepos([]);
        setLoading(false);
      });
  }, [username, reloadKey]);

  const DEFAULT_TECH = ["JavaScript"];

  const projects: Project[] = useMemo(() => {
    return repos
      .filter(
        (repo) =>
          !repo.fork && !repo.archived && !repo.disabled && !repo.private,
      )
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .map((repo) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || "No description available",
        tech: repo.language ? [repo.language] : DEFAULT_TECH,
        github: repo.html_url,
        demo: repo.homepage || undefined,
        stars: repo.stargazers_count,
        isGithubProject: true,
      }));
  }, [repos]);

  return { projects, repos, loading, error };
}

async function fetchReposWithRetry(url: string, retries = 1) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (retries === 0) throw err;

    await new Promise((r) => setTimeout(r, 1000));

    return fetchReposWithRetry(url, retries - 1);
  }
}

export default useGithubProjects;
