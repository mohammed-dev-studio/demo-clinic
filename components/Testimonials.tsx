import { business } from "@/lib/config";

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
            Patient reviews
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            What patients say.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Pulled from our Google reviews. Not edited, not filtered.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.testimonials.map((review, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-xl border border-line bg-mist p-6"
            >
              <div
                className="mb-3 text-sm text-accent"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {"★".repeat(review.rating)}
                <span className="text-line">
                  {"★".repeat(5 - review.rating)}
                </span>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-ink/85">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <figcaption className="mt-5 text-xs text-muted">
                <span className="font-medium text-ink">{review.name}</span>
                <span className="mx-1.5">·</span>
                {review.area}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
