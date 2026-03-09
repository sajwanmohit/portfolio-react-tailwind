import type { Project } from "../types/github";

type ProjectCardProps = Project;

function ProjectCard({
  title,
  image,
  description,
  tech = [],
  github,
  demo,
  stars,
}: ProjectCardProps) {
  // fallback demo links to display when none is provided
  const FALLBACK_DEMO = 
    "https://portfolio-react-tailwind-nu.vercel.app/";

  const demoUrl = demo || FALLBACK_DEMO;

  // If no tech supplied, show a placeholder
  const techList = tech.length > 0 ? tech : ["JavaScript"];

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-gray-900 dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 h-40 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* Tech badges */}
      {techList.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {techList.map((t) => (
            <span
              key={t}
              className="rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors group-hover:border-gray-300 dark:group-hover:border-gray-600"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Stars indicator for GitHub projects */}
      {stars !== undefined && stars > 0 && (
        <div className="mb-4 flex items-center gap-1 text-sm text-yellow-600 dark:text-yellow-400">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{stars}</span>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 text-sm font-medium">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
        >
          GitHub
        </a>

        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-400 transition-colors hover:text-green-700 dark:hover:text-green-300 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
