import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Services — Smile Studio Dental, Jogeshwari West",
  description:
    "Check-ups, fillings, root canals, crowns, whitening and kids' dentistry. Transparent pricing at Smile Studio, Jogeshwari West, Mumbai.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Every treatment, quoted before we start.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Click any treatment to see what it involves, how long it takes,
              and what it costs. All prices are starting points — we confirm the
              exact figure at the consultation.
            </p>
          </div>
        </section>
        <ServicesGrid />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
