import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSiteSettings } from "../hooks/useSiteSettings";

function MainLayout() {
  const { data } = useSiteSettings();
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} – ${currentYear}`;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-250">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="relative text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        © {yearText} {data?.name}
      </footer>
    </div>
  );
}

export default MainLayout;
