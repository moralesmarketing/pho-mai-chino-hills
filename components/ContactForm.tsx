"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-md border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream-dim/70 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim();
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    const body = [
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:info@phomaichinohills.com?subject=${encodeURIComponent(
      "Website inquiry from " + (name || "a guest")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="firstName" placeholder="First name *" required className={inputClasses} />
        <input name="lastName" placeholder="Last name" className={inputClasses} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="email" type="email" placeholder="Email *" required className={inputClasses} />
        <input name="phone" type="tel" placeholder="Phone" className={inputClasses} />
      </div>
      <textarea name="message" placeholder="Message" rows={4} className={inputClasses} />
      <button
        type="submit"
        className="w-fit rounded-full bg-cream px-8 py-3 text-sm tracking-wide text-teal-950 transition hover:bg-accent hover:text-cream"
      >
        Submit
      </button>
      {sent && (
        <p className="text-xs text-cream-dim">
          Your email app should have opened with your message ready to send.
        </p>
      )}
    </form>
  );
}
