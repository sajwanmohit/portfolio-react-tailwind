import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../validation/contactSchema";
import { useContactForm } from "../../hooks/useContactForm";
import type { ContactSchemaType } from "../../validation/contactSchema";
import toast from "react-hot-toast";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const {
    handleSubmit: submitForm,
    loading,
    error,
  } = useContactForm();
  const onSubmit = async (data: ContactSchemaType) => {
    const toastId = toast.loading("Sending message...");

    try {
      await submitForm(data);
      toast.success("Message sent successfully. I will get back to you soon.", {
        id: toastId,
      });
      // reset only if success
      reset();
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to send message",
        { id: toastId },
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      <div>
        <input
          {...register("name")}
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-300 
px-4 py-3 text-sm 
transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
hover:border-gray-400
dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 
px-4 py-3 text-sm 
transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
hover:border-gray-400
dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register("company")}
          placeholder="Company (optional)"
          className="w-full rounded-lg border border-gray-300 
px-4 py-3 text-sm 
transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
hover:border-gray-400
dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        />
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={5}
          className="w-full rounded-lg border border-gray-300 
px-4 py-3 text-sm 
transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
hover:border-gray-400
dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-2 rounded-lg text-white transition-all
    ${
      loading
        ? "bg-blue-400 cursor-not-allowed"
        : "duration-200 bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
    }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default ContactForm;
