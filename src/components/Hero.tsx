import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useSkills } from "../hooks/useSkills";
import { useMemo, useState, useEffect } from "react";
import {
  Server, Code, Cloud, Database, GitBranch,
  Cpu, Layout, Terminal, Box, Globe,
  Layers, Zap,
} from "lucide-react";

function getRandomSkills(skills: any[], count: number) {
  const shuffled = [...skills].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const skillIconMap: Record<string, React.ReactNode> = {
  Java: <Server size={22} strokeWidth={1.5} />,
  "Spring Boot": <Server size={22} strokeWidth={1.5} />,
  Microservices: <Cpu size={22} strokeWidth={1.5} />,
  Angular: <Layout size={22} strokeWidth={1.5} />,
  React: <Code size={22} strokeWidth={1.5} />,
  "Tailwind CSS": <Layers size={22} strokeWidth={1.5} />,
  AWS: <Cloud size={22} strokeWidth={1.5} />,
  Docker: <Box size={22} strokeWidth={1.5} />,
  "CI/CD": <Zap size={22} strokeWidth={1.5} />,
  Git: <GitBranch size={22} strokeWidth={1.5} />,
  "REST APIs": <Globe size={22} strokeWidth={1.5} />,
  TypeScript: <Terminal size={22} strokeWidth={1.5} />,
  "System Design": <Layers size={22} strokeWidth={1.5} />,
  "Distributed Systems": <Server size={22} strokeWidth={1.5} />,
  "Event Driven Architecture": <Zap size={22} strokeWidth={1.5} />,
  Postgres: <Database size={22} strokeWidth={1.5} />,
  MySQL: <Database size={22} strokeWidth={1.5} />,
  MongoDB: <Database size={22} strokeWidth={1.5} />,
  Kubernetes: <Box size={22} strokeWidth={1.5} />,
};

const planetColors = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-emerald-500 to-teal-400",
  "from-orange-500 to-red-400",
  "from-indigo-500 to-violet-400",
  "from-rose-500 to-pink-400",
];

function Hero() {
  const { data: skillsData, loading } = useSkills();
  const { data } = useSiteSettings();
  const { theme } = useTheme();

  const randomSkills = useMemo(() => {
    if (!skillsData) return [];
    return getRandomSkills(skillsData, 6);
  }, [skillsData]);

  const [currentSkill, setCurrentSkill] = useState<string>("");
  const allSkillNames = useMemo(() => {
    if (!skillsData) return [];
    return skillsData.map((s: any) => s.name);
  }, [skillsData]);

  useEffect(() => {
    if (!allSkillNames.length) return;
    setCurrentSkill(allSkillNames[Math.floor(Math.random() * allSkillNames.length)]);
    const interval = setInterval(() => {
      const random = allSkillNames[Math.floor(Math.random() * allSkillNames.length)];
      setCurrentSkill(random);
    }, 3000);
    return () => clearInterval(interval);
  }, [allSkillNames]);

  return (
    <section className="grid-bg min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
      {/* Central container — name as the sun, skills orbit around it */}
      <div className="relative w-[36rem] max-w-full aspect-square mx-auto">
        {/* Name at the center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.h1
            key={theme}
            className="glitch-hover text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            {data?.name?.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Orbital rings + planets */}
        {!loading && randomSkills.map((skill, index) => {
          const radii = [150, 178, 205, 230, 255, 275];
          const durations = [16, 20, 24, 28, 32, 36];
          const radius = radii[index];
          const duration = durations[index];
          const offset = [0, 2, 4, 6, 8, 10][index];

          return (
            <div key={skill.id + theme}>
{/* Planet */}
                <div
                  className="absolute top-1/2 left-1/2"
                  style={{
                    animation: `orbit ${duration}s linear infinite`,
                    animationDelay: `-${offset}s`,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      animation: `counter-orbit ${duration}s linear infinite`,
                      animationDelay: `-${offset}s`,
                      left: `${radius}px`,
                    }}
                  >
                    <div style={{ transform: "translateX(-50%)" }}>
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${planetColors[index]} flex items-center justify-center text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-125`}
                      >
                        {skillIconMap[skill.name] || <Code size={22} strokeWidth={1.5} />}
                      </div>

                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>

      {/* Role */}
      <motion.h2
        key={"role-" + theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl -mt-6 mb-6"
      >
        {data?.designation}
      </motion.h2>

      {/* Cycling skill name */}
      {currentSkill && (
        <motion.p
          key={currentSkill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm text-gray-500 dark:text-gray-400 font-mono"
        >
          {currentSkill}
        </motion.p>
      )}

      {/* Buttons */}
      {loading && <p className="text-sm text-gray-400">Loading skills...</p>}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4"
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View Projects
        </Link>
        <a
          href={data?.ownerGithubProfileURL}
          target="_blank"
          className="px-6 py-3
          border
          border-gray-400
          dark:border-gray-600
          rounded-lg
          hover:bg-gray-100
          dark:hover:bg-gray-800
          transition"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
