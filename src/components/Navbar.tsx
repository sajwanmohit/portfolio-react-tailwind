import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

type NavbarProps = {
  name?: string;
};

function Navbar({ name }: NavbarProps) {
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
      <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)}>
        Home
      </NavLink>

      <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
        Projects
      </NavLink>

      <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg text-gray-900 dark:text-white border-b border-gray-200/50 dark:border-gray-800/50 px-4 sm:px-6 py-3 sm:py-4 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <h1 className="min-w-0 truncate pr-3 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{name}</h1>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="shrink-0 rounded p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

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

      {open && (
        <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-4 p-4 sm:p-6 md:hidden">
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