import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Microservices",
    "Angular",
    "React",
    "AWS",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
