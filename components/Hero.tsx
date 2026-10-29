"use client";

import { useState } from "react";
import { business, directionsLink } from "@/lib/config";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="top" className="relative">
      <div className="relative h-[80vh] min-h-130 w-full overflow-hidden bg-ink">
        {/* Poster always rendered underneath — used as fallback and as the mobile view. */}
        <img
          src={business.hero.posterUrl}
          alt={business.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        {/* Video: desktop only. If it 404s or the file was not added, poster shows. */}
        {!videoFailed && (
          <video
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            poster={business.hero.posterUrl}
            onError={() => setVideoFailed(true)}
          >
            <source src={business.hero.videoUrl} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink/90" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-14 sm:pb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/80">
            Jogeshwari West, Mumbai
          </p>

          <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl">
            {business.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-base">
            {business.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#enquire"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist"
            >
              Book an appointment
            </a>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
