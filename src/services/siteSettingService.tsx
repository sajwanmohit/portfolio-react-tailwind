import client from "../api/client";
import type { SiteSettings } from "../types/siteSettings";
import { defaultSettings } from "../data/defaultSettings";

export const getSiteSettings = async (): Promise<SiteSettings> => {
  try {
    console.log("getting site settings");
    const res = await client.get("/site-settings");
    return res.data;
  } catch {
    return defaultSettings;
  }
};
