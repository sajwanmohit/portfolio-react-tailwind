type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tech, github, demo } = project;

  return (
    <div
      className="
      p-6 rounded-lg
      border border-gray-200 dark:border-gray-800
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      shadow-sm hover:shadow-md
      transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="
            px-2 py-1 text-xs
            rounded-md
            bg-gray-100 dark:bg-gray-800
            text-gray-800 dark:text-gray-200
            border border-gray-200 dark:border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
