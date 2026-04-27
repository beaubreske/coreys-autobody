"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/schema";
import { SERVICES } from "@/lib/services";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="text-white p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-dark/98 border-b border-white/10 py-4 px-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-lg font-[family-name:var(--font-syne)]"
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 text-lg font-[family-name:var(--font-syne)]"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-gray-400 hover:text-white py-1.5 text-base font-[family-name:var(--font-syne)]"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="text-primary hover:text-primary-light py-1.5 text-base font-bold font-[family-name:var(--font-syne)]"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-lg font-[family-name:var(--font-syne)]"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-lg font-[family-name:var(--font-syne)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-lg font-[family-name:var(--font-syne)]"
            >
              Contact
            </Link>
          </nav>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="mt-4 block text-center bg-primary text-white font-bold py-3 px-6 rounded-lg font-[family-name:var(--font-days-one)]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      )}
    </div>
  );
}
