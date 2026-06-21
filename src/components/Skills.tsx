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
    <>
      <section className="min-h-screen flex items-center justify-center">
        <motion.h2
          className="glitch-hover text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
        >
          {"Skills".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </section>

      <section className="section">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
              neon-border-hover
              p-4 sm:p-6
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900 rounded-lg"  
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className={`
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
      ${index % 3 === 0 ? 'animate-float' : index % 3 === 1 ? 'animate-float-delay' : 'animate-float-slow'}
      `}
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
    </>
  );
}

export default Skills;
