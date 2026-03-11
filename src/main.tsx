import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getSiteSettings } from "../src/services/siteSettingService"
import { defaultSettings } from "./data/defaultSettings"

const queryClient = new QueryClient();

async function bootstrap() {
  // Preload site settings into cache
  await queryClient.prefetchQuery({
    queryKey: ["siteSettings"],
    queryFn: getSiteSettings,
    initialData: defaultSettings,
  });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>,
  );
}

bootstrap();
