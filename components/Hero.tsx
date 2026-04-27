import { BUSINESS } from "@/lib/schema";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/75 text-black font-bold px-6 py-1.5 rounded-sm mb-4 font-[family-name:var(--font-days-one)] text-xs tracking-wide">
            5+ Years In Business
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-[family-name:var(--font-days-one)]">
            Collision Repair to Full Restorations in Marinette, WI
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl italic font-[family-name:var(--font-syne)]">
            We specialize in collision repair, rust repair, and full restorations,
            focusing on doing the job right the first time. No shortcuts. Full
            transparency. You can see every step.
          </p>

          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-block bg-primary/90 hover:bg-primary text-white font-bold py-3 px-8 rounded-lg border-2 border-primary shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.7)] transition-all text-lg font-[family-name:var(--font-days-one)]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>

          <p className="mt-4 text-white font-bold italic text-sm font-[family-name:var(--font-days-one)]">
            7-Day Availability
          </p>
        </div>
      </div>
    </section>
  );
}
