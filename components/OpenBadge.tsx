"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/config";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function isOpenNow(): boolean {
  const now = new Date();
  const today = DAYS[now.getDay()];
  const row = business.hours.find((h) => h.day === today);
  if (!row || !row.opens || !row.closes) return false;

  const [oh, om] = row.opens.split(":").map(Number);
  const [ch, cm] = row.closes.split(":").map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= oh * 60 + om && mins < ch * 60 + cm;
}

export default function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    const id = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  // During SSR and the first paint, render nothing to avoid a flicker.
  if (open === null) return null;

  return (
    <span
      className={
        open
          ? "inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
          : "inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted"
      }
    >
      <span
        className={
          open
            ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
            : "h-1.5 w-1.5 rounded-full bg-muted"
        }
      />
      {open ? "Open now" : "Closed now"}
    </span>
  );
}
