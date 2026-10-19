import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
import ContactSocials from "../components/contact/ContactSocials";
import { Download } from "lucide-react";
import Container from "../components/ui/Container";

function Contact() {
  return (
    <section className="section">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold sm:text-3xl">Let's Work Together</h2>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2
               px-4 py-2.5 sm:px-6 sm:py-3
               bg-blue-600 text-white rounded-lg 
               transition-all duration-200
               hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
               active:scale-95"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in new opportunities, collaborations, and
              challenging projects.
            </p>

            <ContactSocials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
