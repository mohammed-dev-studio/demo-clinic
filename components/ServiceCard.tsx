import { business, waLink } from "@/lib/config";

type Service = (typeof business.services)[number];
type Variant = "preview" | "detailed";

export default function ServiceCard({
  service,
  variant,
}: {
  service: Service;
  variant: Variant;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <div className="aspect-4/3 w-full overflow-hidden bg-mist">
        <img
          src={service.photo}
          alt={service.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg text-ink">{service.name}</h3>
          <span className="shrink-0 text-sm font-semibold text-accent">
            {service.price}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.short}
        </p>

        {variant === "detailed" && (
          <details className="mt-4 group">
            <summary className="cursor-pointer list-none text-sm font-medium text-accent hover:text-accent-dark">
              What it involves
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              {service.detail}
            </p>
          </details>
        )}

        <a
          href={waLink(service.whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-ink px-4 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-accent"
        >
          Ask about this
        </a>
      </div>
    </article>
  );
}
