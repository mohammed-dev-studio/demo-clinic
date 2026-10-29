import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { business } from "@/lib/config";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} — Dentist in Jogeshwari West, Mumbai`,
  description:
    "Check-ups, fillings, root canals, crowns, whitening and kids' dentistry in Jogeshwari West, Mumbai. Transparent pricing, one patient at a time.",
  openGraph: {
    title: `${business.name} — Dentist in Jogeshwari West, Mumbai`,
    description:
      "Check-ups, fillings, root canals, crowns, whitening and kids' dentistry in Jogeshwari West, Mumbai.",
    type: "website",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  description: business.intro,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: business.hours.flatMap((h) => {
    if (!h.opens || !h.closes) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.opens,
        closes: h.closes,
      },
    ];
  }),
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: business.faq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
