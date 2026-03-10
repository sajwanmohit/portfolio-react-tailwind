import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-250">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="relative text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        © 2026 Mohit Sajwan
      </footer>
    </div>
  );
}

export default MainLayout;
