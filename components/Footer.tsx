import Link from "next/link";
import { business, directionsLink } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl">{business.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {business.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Pages
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-white"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white"
                >
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={directionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Website by Ibrahim — Web Developer, Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
