import { BUSINESS } from "@/lib/schema";

export default function CTABanner() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-days-one)]">
          Let&apos;s Get Your Vehicle Fixed Right
        </h2>

        <p className="text-lg text-gray-300 mb-8 font-[family-name:var(--font-syne)] italic">
          Whether it&apos;s collision damage, rust, or a full restoration, call
          us today for a free estimate.
        </p>

        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg border-2 border-primary shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.7)] transition-all text-xl font-[family-name:var(--font-days-one)]"
        >
          Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
