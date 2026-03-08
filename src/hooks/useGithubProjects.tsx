import { useState, useEffect } from "react";

function useGithubProjects(username: string) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, [username]);

  return { projects, loading };
}

export default useGithubProjects;
