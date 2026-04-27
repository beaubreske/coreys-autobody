import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/schema";

const STATS = [
  { value: "5+", label: "Years in Business" },
  { value: "7", label: "Days a Week" },
  { value: "100%", label: "Transparency" },
  { value: "All", label: "Insurance Accepted" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/gallery/gallery-4.webp"
              alt="Inside the shop at Corey's Auto Body in Marinette, WI with multiple vehicles in progress"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <Image
                src="/images/logo.png"
                alt="Corey's Auto Body logo"
                width={220}
                height={80}
                className="drop-shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-950 rounded-xl p-4 text-center border border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-days-one)]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-days-one)] text-gray-900">
            Built on Quality Work and Full Transparency
          </h2>

          <p className="text-lg text-gray-700 mb-4 italic font-[family-name:var(--font-syne)] leading-relaxed">
            At Corey&apos;s Auto Body, we focus on doing repairs the right way
            from start to finish. Whether it&apos;s collision work, rust repair,
            or a full restoration, every job is done with attention to detail and
            no shortcuts.
          </p>

          <p className="text-lg text-gray-700 mb-6 italic font-[family-name:var(--font-syne)] leading-relaxed">
            We believe in full transparency. You can see the process, understand
            the work being done, and know exactly what you&apos;re paying for.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Collision repair done right the first time",
              "Rust repair that lasts, not just covered up",
              "Full vehicle restorations from frame to finish",
              "Specialized Corvette body and restoration work",
              "Insurance claims handled for you",
              "7-day availability, we work around your schedule",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-700 font-[family-name:var(--font-syne)]"
              >
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg font-[family-name:var(--font-days-one)]"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/about"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
