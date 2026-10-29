"use client";

import { useState } from "react";
import { business, waLink } from "@/lib/config";

const TIME_SLOTS = [
  "Morning (10 am – 1 pm)",
  "Afternoon (1 pm – 4 pm)",
  "Evening (4 pm – 7 pm)",
  "Any time",
];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(business.services[0].name);
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hi ${business.shortName}, I'd like to book an appointment.

Name: ${name.trim()}
Phone: ${digits}
Service: ${service}
Preferred time: ${time}`;

    const url = waLink(message);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <section id="enquire" className="border-b border-line bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Book an appointment
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Tell us what you need.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Fill in four fields and the message opens in WhatsApp. We reply
            within working hours to confirm the exact time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="Priya Sharma"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Mobile number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="98765 43210"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              >
                {business.services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Preferred time
              </label>
              <select
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Send on WhatsApp
          </button>

          <p className="text-xs leading-relaxed text-muted">
            Opens WhatsApp with your details filled in. Nothing is stored on
            this website.
          </p>
        </form>
      </div>
    </section>
  );
}
