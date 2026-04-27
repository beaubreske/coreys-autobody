import Image from "next/image";
import Link from "next/link";
import { BUSINESS, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import type { ServiceData } from "@/lib/services";
import { getRelatedServices } from "@/lib/services";
import ScrollToTop from "./ScrollToTop";

export default function ServicePage({ service }: { service: ServiceData }) {
  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Services", url: `${BUSINESS.url}/services` },
              { name: service.name, url: `${BUSINESS.url}/services/${service.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.name,
              description: service.bluf,
              slug: service.slug,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />

      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="mb-4 text-sm text-gray-400 font-[family-name:var(--font-syne)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            {service.h1}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl font-[family-name:var(--font-syne)] italic leading-relaxed">
            {service.bluf}
          </p>
        </div>
      </section>

      {/* Main Content + Image */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-days-one)]">
              What to Expect
            </h2>
            <div className="space-y-4">
              {service.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed font-[family-name:var(--font-syne)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-block mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg font-[family-name:var(--font-days-one)]"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={`${service.name} at Corey's Auto Body in Marinette, WI`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-10 font-[family-name:var(--font-days-one)]">
            Our Process
          </h2>
          <ol className="space-y-6 list-none p-0">
            {service.steps.map((step, i) => (
              <li key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center" aria-hidden="true">
                  <span className="text-primary font-bold font-[family-name:var(--font-days-one)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-days-one)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-[family-name:var(--font-syne)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 font-[family-name:var(--font-days-one)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-days-one)]">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-syne)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-black/80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8 font-[family-name:var(--font-days-one)]">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
              >
                <Image
                  src={rel.image}
                  alt={`${rel.name} - Corey's Auto Body`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-days-one)]">
                    {rel.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black/60 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 font-[family-name:var(--font-syne)] italic">
            Call us for a free estimate. 7-day availability.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg border-2 border-primary shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.7)] transition-all text-xl font-[family-name:var(--font-days-one)]"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
