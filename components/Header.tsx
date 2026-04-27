import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/schema";
import MobileNav from "./MobileNav";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-nav.webp"
            alt="Corey's Auto Body - Collision Repair & Restoration in Marinette, WI"
            width={200}
            height={60}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <address className="not-italic text-sm text-gray-300 font-[family-name:var(--font-days-one)]">
            {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
            {BUSINESS.address.state} {BUSINESS.address.zip}
          </address>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-syne)]"
          >
            Home
          </Link>
          <ServicesDropdown />
          <Link
            href="/gallery"
            className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-syne)]"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-syne)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-syne)]"
          >
            Contact
          </Link>
        </nav>

        <a
          href={`tel:${BUSINESS.phone}`}
          className="hidden md:flex items-center bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-5 rounded-lg border border-primary shadow-[0_0_15px_rgba(225,6,0,0.4)] transition-all hover:shadow-[0_0_25px_rgba(225,6,0,0.6)] font-[family-name:var(--font-days-one)] text-sm"
        >
          Call {BUSINESS.phoneDisplay}
        </a>

        <MobileNav />
      </div>
    </header>
  );
}
