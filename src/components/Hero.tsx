import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSiteSettings } from "../hooks/useSiteSettings";

const skills = ["Java", "Spring Boot", "Microservices", "Angular", "AWS"];

function Hero() {
  const { data } = useSiteSettings();
  const { theme } = useTheme();
  console.log("Hero : ", theme);
  return (
    <section
      className="min-h-screen
      flex flex-col
      justify-center
      items-center
      text-center
      px-6
      bg-gradient-to-b
      from-gray-100
      to-white
      dark:from-gray-900
      dark:to-black
      text-gray-900
      dark:text-white
      transition-colors
      duration-300"
    >
      {/* Animated Name */}
      <motion.h1
        key={theme}
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        {data?.name}
      </motion.h1>

      {/* Animated Role */}
      <motion.h2
        key={"role-" + theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl text-blue-500 dark:text-blue-400 mb-6"
      >
        Full Stack Developer
      </motion.h2>

      {/* Skills falling animation */}
      <div className="flex flex-wrap gap-3 justify-center max-w-xl mb-10">
        {skills.map((skill, index) => (
          <motion.span
            key={skill + theme}
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
            {skill}
          </motion.span>
        ))}
      </div>

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
