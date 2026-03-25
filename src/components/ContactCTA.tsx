import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

      <p className="text-gray-400 mb-6">
        Interested in collaborating or discussing opportunities?
      </p>

      <Link
        to="/contact"
        className="inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-white"
      >
        Contact Me
      </Link>
    </section>
  );
}

export default ContactCTA;
