import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSiteSettings } from "../hooks/useSiteSettings";
import Container from "../components/ui/Container";

function MainLayout() {
  const { data } = useSiteSettings();
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} – ${currentYear}`;

  const particles = Array.from({ length: 15 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 12}s`,
    animationDuration: `${8 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.2 + Math.random() * 0.3,
  }));

  return (
    <div className="grid-bg scanlines min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-250 relative z-0">
      <div className="particle-container">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`star-${i}`} className="shooting-star" />
      ))}

      <Navbar name={data?.name} />

      <main className="flex-1 py-8 sm:py-12">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="sticky bottom-0 text-center py-2 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        © {yearText} <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{data?.name}</span>
      </footer>
    </div>
  );
}

export default MainLayout;
