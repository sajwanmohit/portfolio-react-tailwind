import { useState } from "react";
import { submitContact } from "../services/contactService";
import type { ContactFormData } from "../types/contact";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(data: ContactFormData) {
    try {
      setLoading(true);
      setError(null);

      setSuccess(false);
      await submitContact(data);

      setSuccess(true);
    } catch (err: any) {
      setError(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    success,
    error,
    handleSubmit,
  };
}
