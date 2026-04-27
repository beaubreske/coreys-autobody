import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/schema";

const SERVICE_LINKS = [
  { href: "/services/collision-repair", label: "Collision Repair" },
  { href: "/services/corvette-work", label: "Corvette Work" },
  { href: "/services/rust-repair", label: "Rust Repair" },
  { href: "/services/restoration-projects", label: "Restoration Projects" },
  { href: "/services/auto-painting", label: "Auto Painting" },
  { href: "/services/insurance-work", label: "Insurance Work" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/images/logo.png"
              alt="Corey's Auto Body"
              width={180}
              height={50}
              className="mb-4"
            />
            <address className="not-italic text-gray-400 text-sm font-[family-name:var(--font-syne)] leading-relaxed">
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.zip}
              </p>
              <p className="mt-2">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-primary hover:text-primary-light transition-colors font-bold"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-days-one)]">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors font-[family-name:var(--font-syne)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-days-one)]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors font-[family-name:var(--font-syne)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-days-one)]">
              Find Us
            </h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
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
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm font-[family-name:var(--font-syne)]">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
