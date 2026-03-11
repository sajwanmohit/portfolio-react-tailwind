import { Github, Linkedin, Mail } from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";

function ContactSocials() {
  const { data } = useSiteSettings();

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition">
      <a
        href={data?.ownerGithubProfileURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
      >
        <Github size={20} />
        <span>GitHub</span>
      </a>

      <a
        href={data?.ownerLinkedinProfileURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition"
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>

      <a
        href={`mailto:${data?.ownerEmailAddress}`}
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
