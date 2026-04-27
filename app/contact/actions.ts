"use server";

import { contactFormSchema } from "@/lib/validation";

export async function submitContact(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    message: formData.get("message"),
  };

  const result = contactFormSchema.safeParse(raw);
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as string;
      fieldErrors[field] = issue.message;
    }
    return { success: false, errors: fieldErrors };
  }

  // TODO: Wire up email service (Resend, SendGrid, etc.) when ready
  console.log("Contact form submission:", result.data);

  return { success: true };
}
