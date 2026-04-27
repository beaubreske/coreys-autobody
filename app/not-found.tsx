import Link from "next/link";
import { BUSINESS } from "@/lib/schema";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-black/80">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4 font-[family-name:var(--font-days-one)]">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 font-[family-name:var(--font-syne)]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)]"
          >
            Go Home
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="border border-white/20 hover:border-white/40 text-white font-bold py-3 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
