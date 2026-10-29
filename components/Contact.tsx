import {
  business,
  directionsLink,
  formatHours,
  mapEmbedSrc,
  waLink,
} from "@/lib/config";
import OpenBadge from "./OpenBadge";

export default function Contact({ compact = false }: { compact?: boolean }) {
  return (
    <section id="visit" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                Visit
              </p>
              <OpenBadge />
            </div>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Find us.
            </h2>

            <address className="mt-6 not-italic text-sm leading-relaxed text-ink">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.city} {business.address.pincode}
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={directionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Get directions
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
              >
                Call {business.phone}
              </a>
            </div>

            {!compact && (
              <div className="mt-10">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  Opening hours
                </h3>
                <dl className="divide-y divide-line border-y border-line text-sm">
                  {business.hours.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-baseline justify-between py-2.5"
                    >
                      <dt className="text-ink">{row.day}</dt>
                      <dd className={!row.opens ? "text-muted" : "text-ink"}>
                        {formatHours(row)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <a
              href={waLink(`Hi ${business.shortName}, I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dark"
            >
              Message us on WhatsApp
            </a>
          </div>

          <div className="flex flex-col">
            <div className="overflow-hidden rounded-xl border border-line bg-white">
              <iframe
                title={`Map showing ${business.name}`}
                src={mapEmbedSrc()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-85 w-full border-0 sm:h-110"
              />
            </div>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
            >
              Open in Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
