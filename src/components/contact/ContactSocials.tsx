import { Github, Linkedin, Mail } from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";

function ContactSocials() {
  const { data } = useSiteSettings();

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition">
      <div className="flex flex-wrap gap-4">
        <a
          href={data?.ownerGithubProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-blue-600 transition"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>

        <a
          href={data?.ownerLinkedinProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-blue-600 transition"
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
      </div>
      <span className="text-gray-600 text-sm sm:text-base font-medium">
        ● Open to full-time and remote opportunities.
      </span>
    </div>
  );
}

export default ContactSocials;
