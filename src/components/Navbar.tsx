import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition hover:text-blue-500 ${
      isActive
        ? "text-blue-500 font-semibold"
        : "text-gray-700 dark:text-gray-200"
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={linkClass} end>
        Home
      </NavLink>

      <NavLink to="/projects" className={linkClass}>
        Projects
      </NavLink>

      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Mohit Sajwan</h1>

        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks}

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          {navLinks}

          <button
            onClick={toggleTheme}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition w-fit"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
