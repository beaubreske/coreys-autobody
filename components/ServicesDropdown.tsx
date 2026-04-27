"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-syne)] flex items-center gap-1"
      >
        Services
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {open && (
        <div className="absolute top-full left-0 pt-2 w-56">
          <div className="bg-gray-950/98 border border-white/10 rounded-lg py-2 shadow-xl">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-[family-name:var(--font-syne)]"
              >
                {service.name}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-1 pt-1">
              <Link
                href="/services"
                className="block px-4 py-2 text-sm text-primary hover:text-primary-light transition-colors font-[family-name:var(--font-syne)] font-bold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
