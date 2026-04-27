import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Corey's Auto Body in Marinette, WI. 5+ years of collision repair, rust repair, and full restorations. Built on quality work and full transparency.",
  openGraph: {
    title: "About Corey's Auto Body | Marinette, WI",
    description:
      "5+ years of collision repair, rust repair, and full restorations in Marinette, WI. Built on quality work and full transparency.",
    type: "website",
    url: `${BUSINESS.url}/about`,
  },
  alternates: {
    canonical: `${BUSINESS.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "About", url: `${BUSINESS.url}/about` },
            ])
          ),
        }}
      />

      <section className="relative py-20 bg-black/60">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <nav className="mb-4 text-sm text-gray-400 font-[family-name:var(--font-syne)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            About Corey&apos;s Auto Body
          </h1>
          <p className="text-lg text-gray-300 font-[family-name:var(--font-syne)] italic">
            Built on quality work and full transparency since day one.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/gallery/gallery-4.webp"
                alt="Inside the shop at Corey's Auto Body with multiple projects in progress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/gallery/gallery-9.webp"
                alt="Classic Mustang freshly painted in the booth at Corey's Auto Body"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-days-one)]">
              Doing Things the Right Way
            </h2>

            <div className="space-y-4 text-lg text-gray-700 font-[family-name:var(--font-syne)] leading-relaxed italic">
              <p>
                Corey&apos;s Auto Body was founded on a simple principle: do the
                job right the first time. Located on Green Gable Road in
                Marinette, Wisconsin, we serve the entire Marinette-Menominee
                area and surrounding communities in northeastern Wisconsin and
                Upper Michigan.
              </p>

              <p>
                With over 5 years in business and a lifetime of hands-on
                experience, we specialize in collision repair, rust repair, auto
                painting, and full vehicle restorations. We&apos;re particularly
                known for our Corvette bodywork and restoration expertise.
                Corey personally owns and works on Corvettes, so every job gets
                the attention of someone who genuinely cares about the craft.
              </p>

              <p>
                Transparency is at the core of everything we do. When your
                vehicle is in our shop, you can stop by anytime, ask questions,
                and see the work being done. We send photo updates, explain
                what we&apos;re doing and why, and never start additional work
                without your approval. No black-box repairs. No hidden
                costs. No shortcuts.
              </p>

              <p>
                We work with all major insurance companies and handle the claims
                process for you. Our 7-day availability means we work around
                your schedule because getting your vehicle fixed shouldn&apos;t
                mean rearranging your life.
              </p>

              <p>
                Every vehicle that leaves our shop goes through a multi-point
                quality check. We inspect paint finish, panel alignment, hardware
                torque, and function of every component we touched. If something
                isn&apos;t right, we fix it before you pick up, not after you
                call back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-16 bg-black/80">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4 font-[family-name:var(--font-days-one)]">
            Our Shop & Equipment
          </h2>
          <p className="text-center text-gray-400 mb-12 font-[family-name:var(--font-syne)] italic max-w-2xl mx-auto">
            The right tools and environment make the difference between
            a repair that holds up and one that falls apart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Dedicated Paint Booth",
                description:
                  "Temperature and humidity-controlled downdraft paint booth for contamination-free finishes. Consistent environment means consistent results, rain or shine, summer or winter.",
              },
              {
                title: "Computerized Color Matching",
                description:
                  "Digital spectrophotometer reads your vehicle's actual color, not just the factory code, and creates a custom formula that accounts for weathering and UV fade. Seamless blends, every time.",
              },
              {
                title: "Frame Measuring Equipment",
                description:
                  "Structural damage isn't always visible. Our measuring system detects frame and unibody misalignment down to millimeters, ensuring your vehicle's safety geometry is restored to factory spec.",
              },
              {
                title: "Welding & Fabrication",
                description:
                  "MIG and TIG welding for structural and panel repairs. We fabricate custom patch panels when off-the-shelf replacements don't exist, common on classic vehicles and hard-to-find models.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card-bg border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-days-one)]">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-[family-name:var(--font-syne)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-[family-name:var(--font-days-one)]">
            Serving Northeastern Wisconsin & Upper Michigan
          </h2>
          <p className="text-center text-gray-600 mb-10 font-[family-name:var(--font-syne)] italic max-w-2xl mx-auto">
            Located in Marinette, WI, we serve customers from across
            the region. Many customers drive 30-60 minutes because they
            know the quality of work is worth the trip.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Marinette, WI",
              "Menominee, MI",
              "Peshtigo, WI",
              "Oconto, WI",
              "Crivitz, WI",
              "Sturgeon Bay, WI",
              "Iron Mountain, MI",
              "Green Bay, WI",
            ].map((city) => (
              <div
                key={city}
                className="text-center py-3 px-4 rounded-lg bg-gray-100 font-[family-name:var(--font-syne)] text-gray-700"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12 font-[family-name:var(--font-days-one)]">
            Why Choose Corey&apos;s Auto Body
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "Every repair meets our standard, not just 'good enough.' We fix it right or we fix it again. No cutting corners to save time.",
              },
              {
                title: "Full Transparency",
                description:
                  "See the process. Understand the work. Know what you're paying for. Photo updates, open-door policy, and no surprises on your bill.",
              },
              {
                title: "7-Day Availability",
                description:
                  "We work around your schedule, not the other way around. Drop off or pick up any day of the week. We respect your time.",
              },
              {
                title: "Insurance Handled",
                description:
                  "We work with all major insurance carriers and handle the entire claims process: paperwork, adjuster communication, supplements. So you don't have to.",
              },
              {
                title: "Corvette Specialists",
                description:
                  "Fiberglass repair, classic restorations, and modern collision work. We understand Corvettes from the inside out because Corey owns and works on them personally.",
              },
              {
                title: "Honest Assessments",
                description:
                  "We'll tell you if a repair doesn't make financial sense. No pressure, no upselling. Just an honest evaluation and your options laid out clearly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-card-bg border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-days-one)]">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-[family-name:var(--font-syne)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-days-one)]">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-syne)]">
            Call us for a free estimate. We&apos;ll take a look at your vehicle
            and give you an honest assessment. No pressure, no upselling.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors font-[family-name:var(--font-days-one)]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
