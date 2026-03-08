import { motion } from "framer-motion";
import { Server, Code, Cloud } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    },
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Git"],
    },
    {
      category: "Architecture",
      skills: [
        "System Design",
        "Distributed Systems",
        "Event Driven Architecture",
      ],
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Java: <Server size={16} />,
    "Spring Boot": <Server size={16} />,
    Microservices: <Server size={16} />,
    Angular: <Code size={16} />,
    React: <Code size={16} />,
    "Tailwind CSS": <Code size={16} />,
    AWS: <Cloud size={16} />,
    Docker: <Cloud size={16} />,
    "CI/CD": <Cloud size={16} />,
    Git: <Cloud size={16} />,
    "REST APIs": <Server size={16} />,
    TypeScript: <Code size={16} />,
    "System Design": <Server size={16} />,
    "Distributed Systems": <Server size={16} />,
    "Event Driven Architecture": <Server size={16} />,
  };
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              className="
              p-6
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              rounded-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
      flex items-center gap-2
      px-3 py-1.5
      text-sm
      rounded-full
      bg-gray-100
      dark:bg-gray-800
      text-gray-800
      dark:text-gray-200
      border border-gray-200
      dark:border-gray-700
      "
                  >
                    {iconMap[skill]}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
