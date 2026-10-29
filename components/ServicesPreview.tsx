import Link from "next/link";
import { business } from "@/lib/config";
import ServiceCard from "./ServiceCard";

export default function ServicesPreview() {
  const preview = business.services.slice(0, 4);

  return (
    <section id="services" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Four treatments most people start with.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-accent hover:text-accent-dark"
          >
            See all services →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              variant="preview"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
