import { business } from "@/lib/config";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              variant="detailed"
            />
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
          All prices are starting points and depend on the tooth, the extent of
          the issue, and materials chosen. We confirm the exact figure at the
          consultation, before any treatment begins.
        </p>
      </div>
    </section>
  );
}
