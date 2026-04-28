import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Corey's Auto Body in Marinette, WI for a free estimate. Call or text (715) 716-6217. Mon-Fri 8am-5pm.",
  openGraph: {
    title: "Contact Corey's Auto Body | Marinette, WI",
    description:
      "Get a free estimate from Corey's Auto Body. Call or text (715) 716-6217. Mon-Fri 8am-5pm in Marinette, WI.",
    type: "website",
    url: `${BUSINESS.url}/contact`,
  },
  alternates: {
    canonical: `${BUSINESS.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Contact", url: `${BUSINESS.url}/contact` },
            ])
          ),
        }}
      />

      <section className="relative py-20 bg-black/60">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <nav className="mb-4 text-sm text-gray-400 font-[family-name:var(--font-syne)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 font-[family-name:var(--font-syne)] italic">
            Get a free estimate or ask us anything about your vehicle.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
              Call or Text for a Free Estimate
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-syne)] italic max-w-xl mx-auto">
              The fastest way to get a quote is to call or text us directly.
              Send us photos of the damage and we&apos;ll give you a ballpark
              before you even bring it in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex flex-col items-center gap-3 p-8 rounded-xl bg-primary/10 border-2 border-primary hover:bg-primary/20 transition-colors group"
            >
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-2xl font-bold text-white font-[family-name:var(--font-days-one)]">
                Call {BUSINESS.phoneDisplay}
              </span>
              <span className="text-gray-400 font-[family-name:var(--font-syne)]">
                Tap to call now
              </span>
            </a>

            <a
              href={`sms:${BUSINESS.phone}`}
              className="flex flex-col items-center gap-3 p-8 rounded-xl bg-card-bg border-2 border-white/20 hover:border-primary/50 transition-colors group"
            >
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-2xl font-bold text-white font-[family-name:var(--font-days-one)]">
                Text {BUSINESS.phoneDisplay}
              </span>
              <span className="text-gray-400 font-[family-name:var(--font-syne)]">
                Send photos for a quick quote
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 font-[family-name:var(--font-days-one)]">
                Address
              </h3>
              <address className="not-italic text-gray-300 font-[family-name:var(--font-syne)] leading-relaxed">
                <p>{BUSINESS.address.street}</p>
                <p>
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </p>
              </address>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 font-[family-name:var(--font-days-one)]">
                Hours
              </h3>
              <p className="text-gray-300 font-[family-name:var(--font-syne)]">
                Mon-Fri: 8:00 AM - 5:00 PM
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 font-[family-name:var(--font-days-one)]">
                Free Estimates
              </h3>
              <p className="text-gray-300 font-[family-name:var(--font-syne)]">
                No pressure, no upselling
              </p>
              <p className="text-gray-400 font-[family-name:var(--font-syne)] text-sm mt-1">
                Honest assessment of your vehicle
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/60">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6 font-[family-name:var(--font-days-one)]">
            Find Us
          </h2>
          <div className="aspect-[16/9] rounded-xl overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45000!2d${BUSINESS.lng}!3d${BUSINESS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDXCsDAzJzU4LjAiTiA4N8KwMzcnNDguMCJX!5e0!3m2!1sen!2sus!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corey's Auto Body location on Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
