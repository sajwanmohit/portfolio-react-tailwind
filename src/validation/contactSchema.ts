import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(100, "Message must be at least 100 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
  company: z.string().optional(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
