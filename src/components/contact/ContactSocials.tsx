import { Github, Linkedin, Mail } from "lucide-react";

function ContactSocials() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition">
      <a
        href="https://github.com/sajwanmohit"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
      >
        <Github size={20} />
        <span>GitHub</span>
      </a>

      <a
        href="https://linkedin.com/in/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>

      <a
        href="mailto:your@email.com"
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
      >
        <Mail size={20} />
        <span>Email</span>
      </a>

      <span className="text-gray-600 font-medium">
        ● Open to full-time and remote opportunities.
      </span>
    </div>
  );
}

export default ContactSocials;
