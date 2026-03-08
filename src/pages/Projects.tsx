import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "User Order Microservice",
    description:
      "Spring Boot microservices project with REST APIs and Dockerized services.",
    tech: ["Java", "Spring Boot", "Docker", "REST"],
    github: "https://github.com/your-username/user-order-service",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React, TypeScript, Tailwind CSS and deployed on Vercel.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "Payment Processing API",
    description:
      "Backend service handling payment workflows with Spring Boot and event-driven architecture.",
    tech: ["Java", "Spring Boot", "Kafka", "Microservices"],
    github: "https://github.com/your-username/payment-service",
  },
];

function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
