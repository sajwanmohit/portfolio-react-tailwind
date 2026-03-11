import { useQuery } from "@tanstack/react-query";
import { getSiteSettings } from "../services/siteSettingService";
import { defaultSettings } from "../data/defaultSettings";

export const useSiteSettings = () =>
  useQuery({
    queryKey: ["siteSettings"],
    queryFn: getSiteSettings,
    initialData: defaultSettings,
     staleTime: 1000 * 60 * 10,
  });
