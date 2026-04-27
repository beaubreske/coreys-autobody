"use client";

import { useState } from "react";
import { submitContact } from "@/app/contact/actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.success) {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } else if (result.errors) {
      setErrors(result.errors);
      setStatus("error");
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-accent/20 border border-accent/40 rounded-lg p-8 text-center">
        <p className="text-white text-lg font-bold font-[family-name:var(--font-days-one)]">
          Message Sent!
        </p>
        <p className="text-gray-300 mt-2 font-[family-name:var(--font-syne)]">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-white mb-1 font-[family-name:var(--font-days-one)]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={100}
          className="w-full px-4 py-3 bg-card-bg border border-white/20 rounded-lg text-white font-[family-name:var(--font-syne)] focus:outline-none focus:border-primary"
        />
        {errors.name && (
          <p className="text-primary text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-white mb-1 font-[family-name:var(--font-days-one)]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          className="w-full px-4 py-3 bg-card-bg border border-white/20 rounded-lg text-white font-[family-name:var(--font-syne)] focus:outline-none focus:border-primary"
        />
        {errors.email && (
          <p className="text-primary text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-bold text-white mb-1 font-[family-name:var(--font-days-one)]"
        >
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          maxLength={20}
          className="w-full px-4 py-3 bg-card-bg border border-white/20 rounded-lg text-white font-[family-name:var(--font-syne)] focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-white mb-1 font-[family-name:var(--font-days-one)]"
        >
          Tell Us About Your Vehicle
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          className="w-full px-4 py-3 bg-card-bg border border-white/20 rounded-lg text-white font-[family-name:var(--font-syne)] focus:outline-none focus:border-primary resize-none"
        />
        {errors.message && (
          <p className="text-primary text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)] text-lg"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && !Object.keys(errors).length && (
        <p className="text-primary text-center font-[family-name:var(--font-syne)]">
          Something went wrong. Please call us directly at (715) 716-6217.
        </p>
      )}
    </form>
  );
}
