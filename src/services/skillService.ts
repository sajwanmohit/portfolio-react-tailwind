import client from "../api/client";
import type { Skill } from "../types/skill";

export const getSkills = async (): Promise<Skill[]> => {
  const res = await client.get("/public/skills");
  return res.data;
};
