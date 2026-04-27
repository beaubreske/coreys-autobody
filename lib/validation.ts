import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
