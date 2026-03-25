import { useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../services/siteSettingsService";
import { defaultSettings } from "../data/defaultSettings";
import type { SiteSettings } from "../types/siteSettings";

export const useSiteSettings = () =>
  useQuery<SiteSettings>({
    queryKey: ["siteSettings"],
    queryFn: getSiteSettings,
    initialData: defaultSettings,
     staleTime: 1000 * 60 * 10,
  });
