import { useRef, useLayoutEffect } from "react";
import useGithubProjects from "../hooks/useGithubProjects";

function ProjectsPreview() {
  const { projects, loading } = useGithubProjects("sajwanmohit");
  type GithubRepo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
  };

  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (loading) return;

    const text = tickerRef.current;
    const container = containerRef.current;

    if (!text || !container) return;
    let direction = -1;
    let frameId: number;
    let position = 0;

    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;

    const animate = () => {
      position += direction;
      //LEFT EDGE BOUNCE
      if (position <= 0) {
        position = 0;
        direction = 1;
      }
      //RIGHT EDGE BOUNCE
      if (position >= containerWidth - textWidth) {
        position = containerWidth - textWidth;
        direction = -1;
      }
      text.style.transform = `translateX(${position}px)`;
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [loading]);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div ref={containerRef} className="ticker-container mt-2">
        <div
          ref={tickerRef}
          className="ticker-text inline-block whitespace-nowrap text-gray-500 dark:text-gray-400"
        >
          Some of the projects I’ve built and published on GitHub.
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((repo: GithubRepo) => (
          <div
            key={repo.id}
            className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>

            <p className="text-gray-400 mb-4">{repo.description}</p>

            <a href={repo.html_url} target="_blank" className="text-blue-400">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPreview;
