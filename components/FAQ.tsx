"use client";

import { useState } from "react";
import { business } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Common questions
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Before you book.
          </h2>
        </div>

        <div className="divide-y divide-line rounded-xl border border-line bg-white">
          {business.faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={
                      open
                        ? "shrink-0 text-xl leading-none text-accent"
                        : "shrink-0 text-xl leading-none text-muted"
                    }
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
