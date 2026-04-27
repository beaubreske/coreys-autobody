import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SERVICES } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Auto Body Services in Marinette, WI",
  description:
    "Corey's Auto Body offers collision repair, rust repair, auto painting, Corvette work, restorations, and insurance claim assistance in Marinette, WI. Free estimates.",
  openGraph: {
    title: "Auto Body Services in Marinette, WI | Corey's Auto Body",
    description:
      "Collision repair, rust repair, auto painting, Corvette work, restorations, and insurance claims. Free estimates in Marinette, WI.",
    type: "website",
    url: `${BUSINESS.url}/services`,
  },
  alternates: {
    canonical: `${BUSINESS.url}/services`,
  },
};

const SERVICE_DETAILS = [
  {
    ...SERVICES[0],
    longDescription:
      "From minor fender benders to major collision damage, we restore your vehicle to pre-accident condition. We work with your insurance company directly so you can focus on getting back on the road. Every repair goes through a multi-point quality check before delivery.",
  },
  {
    ...SERVICES[1],
    longDescription:
      "Corvettes require specialized knowledge of fiberglass body panels, unique frame geometry, and factory-specific finishes. We have hands-on experience with classic and modern Corvettes, from C3 restorations to late-model collision repair. Your Corvette gets the attention it deserves.",
  },
  {
    ...SERVICES[2],
    longDescription:
      "Wisconsin winters are hard on vehicles. Salt, moisture, and freeze-thaw cycles eat through metal faster than most people realize. We cut out the rust completely. No Bondo cover-ups, no shortcuts. You get clean metal, proper welding, and rust prevention that actually works.",
  },
  {
    ...SERVICES[3],
    longDescription:
      "Full vehicle restorations from frame to finish. We handle bodywork, metalwork, paint, and assembly. Whether it's a classic truck, a muscle car, or a family heirloom, we bring vehicles back to life with craftsmanship and attention to detail.",
  },
  {
    ...SERVICES[4],
    longDescription:
      "Professional auto painting with factory-quality color matching. We prep every surface properly: sanding, priming, sealing, so the paint bonds correctly and lasts. From single-panel touch-ups to full-body repaints, the finish speaks for itself.",
  },
  {
    ...SERVICES[5],
    longDescription:
      "We work with all major insurance companies. Filing a claim shouldn't be stressful. We handle the paperwork, communicate with your adjuster, and make sure the repair is done right. You get your vehicle back in top condition without the hassle.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does collision repair take in Marinette?",
    answer:
      "Most collision repairs take 3-10 business days depending on the severity of the damage. We provide a timeline estimate before starting any work and keep you updated throughout the process.",
  },
  {
    question: "Does Corey's Auto Body work with insurance companies?",
    answer:
      "Yes. We work directly with all major insurance companies. We handle the claims process, communicate with your adjuster, and ensure your vehicle is repaired to pre-accident condition.",
  },
  {
    question: "How much does rust repair cost?",
    answer:
      "Rust repair costs vary based on the extent of damage and location on the vehicle. Small panel repairs may start around $300-500, while extensive frame or rocker panel work can range higher. We provide free estimates so you know exactly what to expect.",
  },
  {
    question: "Do you work on Corvettes and specialty vehicles?",
    answer:
      "Yes. We specialize in Corvette body work and restorations, including fiberglass repair, frame work, and factory-match painting for both classic and modern Corvettes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Services", url: `${BUSINESS.url}/services` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />

      <section className="relative py-20 bg-black/60">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Auto Body Services in Marinette, WI
          </h1>
          <p className="text-lg text-gray-300 font-[family-name:var(--font-syne)] italic">
            From collision repair to full restorations, every job done the right
            way.
          </p>
        </div>
      </section>

      {SERVICE_DETAILS.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-16 ${i % 2 === 0 ? "bg-white text-gray-900" : "bg-gray-100 text-gray-900"}`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                serviceSchema({
                  name: service.name,
                  description: service.longDescription,
                  slug: service.slug,
                })
              ),
            }}
          />
          <div
            className={`max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 !== 0 ? "md:order-2" : ""}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} at Corey's Auto Body in Marinette, WI`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={i % 2 !== 0 ? "md:order-1" : ""}>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-days-one)]">
                {service.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-[family-name:var(--font-syne)]">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg font-[family-name:var(--font-days-one)]"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-black/80">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-10 font-[family-name:var(--font-days-one)]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question} className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-days-one)]">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed font-[family-name:var(--font-syne)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
