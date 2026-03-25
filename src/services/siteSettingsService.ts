import client from "../api/client";

export const getSiteSettings = async () => {
  const res = await client.get("/public/site-settings");
  return res.data;
};