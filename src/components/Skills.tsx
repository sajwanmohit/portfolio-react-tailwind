import { motion } from "framer-motion";
import { Server, Code, Cloud } from "lucide-react";
import type { Skill } from "../types/skill";
import { useSkills } from "../hooks/useSkills";
import Container from "./ui/Container";

function groupSkills(skills: Skill[]) {
  const map: Record<string, Skill[]> = {};

  skills.forEach((skill) => {
    if (!map[skill.categoryName]) {
      map[skill.categoryName] = [];
    }
    map[skill.categoryName].push(skill);
  });

  return Object.entries(map).map(([category, skills]) => ({
    category,
    skills,
  }));
}

function Skills() {
  const { data: skills, loading, error } = useSkills();

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const skillGroups = groupSkills(skills);

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
    <section className="section">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
              p-4 sm:p-6
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.id}
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
                    {iconMap[skill.name]}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
