import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useGithubProjects from "../hooks/useGithubProjects";
import ProjectCard from "./ProjectCard";
import type { Project } from "../types/github";

function ProjectsPreview() {
  const { projects, loading, error } = useGithubProjects("sajwanmohit",2);

  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;

    const text = tickerRef.current;
    const container = containerRef.current;

    if (!text || !container) return;

    let direction = -1;
    let frameId: number;
    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;
    let position = containerWidth - textWidth;

    const animate = () => {
      position += direction * 3;

      // LEFT EDGE BOUNCE
      if (position <= 0) {
        position = 0;
        direction = 1;
      }

      // RIGHT EDGE BOUNCE
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

  if (loading) {
    return (
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
          </motion.div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-red-600 dark:text-red-400">
              Failed to load projects: {error}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="ticker-container mb-8 mt-2"
        >
          <div
            ref={tickerRef}
            className="inline-block whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
          >
            Some of the projects I've built and published on GitHub.
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.slice(0, 6).map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
