"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/config";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const images = business.slider;

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000,
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              Inside the clinic
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              A room you can see before you book.
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? "h-2 w-8 rounded-full bg-ink transition-all"
                    : "h-2 w-2 rounded-full bg-ink/25 transition-all"
                }
              />
            ))}
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-mist">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={
                i === index
                  ? "absolute inset-0 opacity-100 transition-opacity duration-700"
                  : "absolute inset-0 opacity-0 transition-opacity duration-700"
              }
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/80 to-transparent p-5 sm:p-6">
                <p className="text-sm text-white/95 sm:text-base">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:hidden">
            <button
              onClick={() =>
                setIndex((i) => (i - 1 + images.length) % images.length)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
