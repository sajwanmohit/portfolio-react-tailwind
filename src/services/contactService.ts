import client from "../api/client";
import type { ContactFormData } from "../types/contact";

export const submitContact = async (data: ContactFormData) => {
  const res = await client.post("/public/contacts", data);
  return res.data;
};
