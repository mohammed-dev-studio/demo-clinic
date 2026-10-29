export const business = {
  name: "Smile Studio Dental",
  shortName: "Smile Studio",
  tagline: "Gentle, modern dentistry in Jogeshwari West.",
  intro:
    "Single-chair practice. Clean instruments, honest pricing, no upselling. Appointments start on time — and we tell you the cost before we pick up a drill.",
  longIntro:
    "Smile Studio opened in 2018 with one idea: dentistry should not feel like a negotiation. We show you the X-ray, explain the options in plain language, quote the price, and then begin. No surprise bills.",

  phone: "+919820012345",
  phoneRaw: "919820012345",
  whatsapp: "919820012345",
  email: "hello@smilestudio.in",

  address: {
    line1: "Ground Floor, Kamla Niwas",
    line2: "Off S.V. Road, Jogeshwari West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400102",
  },

  mapQuery: "19.141929,72.8404389",

  hours: [
    { day: "Monday", opens: "10:00", closes: "19:00" },
    { day: "Tuesday", opens: "10:00", closes: "19:00" },
    { day: "Wednesday", opens: "10:00", closes: "19:00" },
    { day: "Thursday", opens: "10:00", closes: "19:00" },
    { day: "Friday", opens: "10:00", closes: "17:00" },
    { day: "Saturday", opens: "10:00", closes: "15:00" },
    { day: "Sunday", opens: null, closes: null },
  ],

  hero: {
    /**
     * Drop a stock dental clip at public/videos/hero.mp4 (≤4 MB).
     * If the file is missing, the poster shows — the page still works.
     */
    videoUrl: "/videos/hero.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    mobilePosterUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    alt: "Smile Studio Dental — treatment room",
  },

  slider: [
    {
      src: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Bright dental treatment room",
      caption: "Single-chair practice — no queues.",
    },
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      alt: "Sterilised instruments laid out",
      caption: "Every instrument autoclaved, every tray sealed.",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      alt: "Consultation room",
      caption: "Digital X-rays on a screen you can see.",
    },
    {
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
      alt: "Reception area",
      caption: "Walk-ins welcome when the chair is free.",
    },
  ],

  services: [
    {
      slug: "checkup-cleaning",
      name: "Check-up & Cleaning",
      price: "from ₹800",
      short:
        "Scaling, polishing and a full exam. The starting point for everything else.",
      detail:
        "A 30-minute visit. We scale above and below the gumline, polish the surface, take a digital X-ray if you have not had one in 12 months, and show you exactly what we see. You leave with a printed plan — not a sales pitch.",
      photo:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
      whatsappMsg: "Hi Smile Studio, I'd like to book a check-up and cleaning.",
    },
    {
      slug: "fillings",
      name: "Fillings",
      price: "from ₹1,500",
      short:
        "Tooth-coloured composite fillings for cavities, done in one visit.",
      detail:
        "We use composite (not amalgam), matched to your tooth shade. Numbed properly, drilled minimally, finished in about 40 minutes per tooth. Root-treated teeth or deep cavities may need a crown — we will tell you before we start.",
      photo:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
      whatsappMsg: "Hi Smile Studio, I have a cavity and need a filling.",
    },
    {
      slug: "root-canal",
      name: "Root Canal",
      price: "from ₹5,000",
      short:
        "Single-visit RCT with rotary instruments. Save the tooth, skip the pain.",
      detail:
        "Most root canals are done in one sitting — about 90 minutes. Rotary endodontics, apex locator, digital X-ray confirmation before we close. Post-treatment crown is quoted separately.",
      photo:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      whatsappMsg: "Hi Smile Studio, I've been told I need a root canal.",
    },
    {
      slug: "crowns",
      name: "Crowns & Bridges",
      price: "from ₹8,000",
      short: "Zirconia or metal-ceramic, made in 3–5 days.",
      detail:
        "Shade-matched to your natural teeth. Two visits: prep and impression, then fit and cement. We use zirconia for back teeth and metal-ceramic where budget matters more than appearance.",
      photo:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      whatsappMsg: "Hi Smile Studio, I need a crown or bridge.",
    },
    {
      slug: "whitening",
      name: "Teeth Whitening",
      price: "from ₹6,000",
      short: "In-chair whitening. Roughly 3–5 shades lighter, one hour.",
      detail:
        "Hydrogen peroxide gel with a light, protective gum barrier. Sensitivity for 24–48 hours afterwards is normal. We tell you before you sit down whether your staining will respond well — coffee and tobacco yes, tetracycline staining no.",
      photo:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
      whatsappMsg: "Hi Smile Studio, I'd like to know about teeth whitening.",
    },
    {
      slug: "kids",
      name: "Kids' Dentistry",
      price: "from ₹500",
      short: "First visits, fluoride, sealants. Calm and unhurried.",
      detail:
        "A first visit is 20 minutes with no treatment. We show the chair, the light, the mirror, and let them touch everything. Fluoride varnish and sealants as needed. We do not restrain children, and we do not treat children who are not ready — you get a second appointment free if the first is only a look-around.",
      photo:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
      whatsappMsg:
        "Hi Smile Studio, I'd like to book a first visit for my child.",
    },
  ],

  testimonials: [
    {
      name: "Priya M.",
      area: "Jogeshwari West",
      rating: 5,
      text: "I have been terrified of dentists since childhood. Dr. Rao explained every step and stopped whenever I raised a hand. First root canal I have had without a panic attack.",
    },
    {
      name: "Rakesh S.",
      area: "Andheri West",
      rating: 5,
      text: "Quoted ₹5,000 for the RCT over WhatsApp, paid ₹5,000 at the clinic. No additions. That is rarer than it should be.",
    },
    {
      name: "Fatima K.",
      area: "Jogeshwari East",
      rating: 5,
      text: "Took my six-year-old for a first check-up. They let her hold the mirror and count her own teeth. She asked when we could go back.",
    },
    {
      name: "Anil T.",
      area: "Goregaon",
      rating: 5,
      text: "Walked in with a broken molar on a Saturday afternoon. Seen in 20 minutes, temporary filling, permanent one on Tuesday. Practical and fast.",
    },
    {
      name: "Sneha R.",
      area: "Jogeshwari West",
      rating: 4,
      text: "Whitening came out two shades lighter, not five like the videos show. Dr. Rao told me this before I paid, which is why I trusted the result.",
    },
    {
      name: "Imran H.",
      area: "Bandra East",
      rating: 5,
      text: "My mother is 71 and needs a full denture. The whole plan, in writing, with costs against each step. No surprises for her or for me.",
    },
  ],

  faq: [
    {
      question: "Do you take walk-ins?",
      answer:
        "Yes, when the chair is free. Weekday mornings are the safest bet. For anything beyond a check-up, message us on WhatsApp first so we can block enough time.",
    },
    {
      question: "Do you offer payment plans or EMI?",
      answer:
        "For treatments above ₹15,000 — braces, implants, full-mouth work — yes. Zero-cost EMI on select credit cards, and a three-instalment plan otherwise. Ask before we begin.",
    },
    {
      question: "Is teeth whitening safe for sensitive teeth?",
      answer:
        "Generally yes, with precautions. We use a gum barrier and a lower-concentration gel if your teeth are already sensitive. Some sensitivity for 24–48 hours afterwards is normal and settles on its own.",
    },
    {
      question: "How long does a root canal take?",
      answer:
        "About 90 minutes for most single-rooted teeth, longer for molars. We aim for a single visit. If the tooth is infected or has a curved canal, we may ask you to come back once more.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes, from age three. A first visit is 20 minutes with no treatment — we let them explore the chair and instruments first. No restraints, no rush.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We provide itemised bills you can submit for reimbursement. We do not have direct tie-ups with insurers, so you pay us and claim separately.",
    },
    {
      question: "What are your timings?",
      answer:
        "Monday to Thursday 10am–7pm, Friday 10am–5pm, Saturday 10am–3pm. Closed Sunday. We do not take the last appointment of the day unless the treatment is short.",
    },
  ],

  about: {
    story:
      "Smile Studio opened in 2018 in a single-room clinic off S.V. Road. It has never expanded, and that is deliberate. One dentist, one chair, one set of instruments you can see being unpacked from the autoclave bag.",
    doctor: {
      name: "Dr. Aditi Rao",
      credentials: "BDS, MDS (Conservative Dentistry & Endodontics)",
      bio: "Practising since 2012. Trained in rotary endodontics and adhesive dentistry. Has a specific interest in treating patients with dental anxiety — the ones who have put off a visit for a decade.",
    },
    differentiators: [
      {
        title: "Quoted price is the final price",
        body: "Every treatment is quoted in writing before we start. If something unexpected comes up mid-procedure, we stop and requote. We do not add line items after the fact.",
      },
      {
        title: "One patient at a time",
        body: "No overlapping appointments. Your slot is yours. If we are running late, we will message you before you leave home.",
      },
      {
        title: "Show, then treat",
        body: "Every X-ray is shown to you on a screen. Every option is explained. You decide — we do not push the most expensive treatment.",
      },
    ],
  },
} as const;

/** Formats a 24-hour time ("19:00") as 12-hour ("7:00 pm"). */
export function to12h(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/** One row of the opening hours table, ready to display. */
export function formatHours(row: {
  opens: string | null;
  closes: string | null;
}): string {
  if (!row.opens || !row.closes) return "Closed";
  return `${to12h(row.opens)} – ${to12h(row.closes)}`;
}

export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function directionsLink(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.mapQuery,
  )}`;
}

export function mapEmbedSrc(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapQuery,
  )}&output=embed`;
}
