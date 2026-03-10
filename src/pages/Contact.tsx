import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
import ContactSocials from "../components/contact/ContactSocials";

function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

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
    </section>
  );
}

export default Contact;
