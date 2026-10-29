import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { business } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Smile Studio Dental, Jogeshwari West",
  description:
    "Dr. Aditi Rao has practised dentistry in Jogeshwari West since 2018. One dentist, one chair, and a written quote before any treatment begins.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-mist">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              About
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              One dentist. One chair.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {business.about.story}
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-[1fr,1.4fr] md:gap-16">
              <div>
                <div className="aspect-4/5 overflow-hidden rounded-xl border border-line bg-mist">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt={business.about.doctor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
                  The dentist
                </p>
                <h2 className="font-display text-3xl text-ink">
                  {business.about.doctor.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted">
                  {business.about.doctor.credentials}
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/85">
                  {business.about.doctor.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-mist">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent">
              How we work
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Three promises we actually keep.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {business.about.differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <h3 className="font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
