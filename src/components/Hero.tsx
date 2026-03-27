import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useSkills } from "../hooks/useSkills";
import { useMemo } from "react";

function getRandomSkills(skills: any[], count: number) {
  const shuffled = [...skills].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function Hero() {
  const { data: skillsData, loading } = useSkills();
  const { data } = useSiteSettings();
  const { theme } = useTheme();

  const randomSkills = useMemo(() => {
    if (!skillsData) return [];
    return getRandomSkills(skillsData, 6);
  }, [skillsData]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
      {/* Animated Name */}
      <motion.h1
        key={theme}
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
      >
        {data?.name}
      </motion.h1>

      {/* Animated Role */}
      <motion.h2
        key={"role-" + theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl mb-6"
      >
        {data?.designation}
      </motion.h2>

      {loading ? (
        <p className="text-sm text-gray-400">Loading skills...</p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {randomSkills.map((skill, index) => (
            <motion.span
              key={skill.id + theme}
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              className="px-4 py-2
            text-sm
            bg-gray-200
            dark:bg-gray-800
            rounded-lg"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      )}

      {/* Buttons */}
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
