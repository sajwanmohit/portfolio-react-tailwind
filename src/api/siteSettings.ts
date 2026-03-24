import client from "../api/client";

export const getSiteSettings = async () => {
  const res = await client.get("/public/site-settings");
  console.log("Site settings fetched:", res.data);
  return res.data;
};