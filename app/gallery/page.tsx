import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, breadcrumbSchema, imageGallerySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View real examples of collision repair, rust repair, Corvette restoration, and auto painting work from Corey's Auto Body in Marinette, WI.",
  openGraph: {
    title: "Work Gallery | Corey's Auto Body Marinette, WI",
    description:
      "Real collision repair, rust repair, Corvette restoration, and auto painting results from Corey's Auto Body in Marinette, WI.",
    type: "website",
    url: `${BUSINESS.url}/gallery`,
    images: [{ url: `${BUSINESS.url}/images/gallery/gallery-1.jpg` }],
  },
  alternates: {
    canonical: `${BUSINESS.url}/gallery`,
  },
};

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Black Mustang GT with red pinstripe completed at Corey's Auto Body Marinette WI",
    caption: "Mustang GT 5.0 with custom red pinstripe, full repaint",
    category: "Auto Painting",
  },
  {
    src: "/images/gallery/gallery-2.webp",
    alt: "Corvette body freshly painted in the paint booth at Corey's Auto Body",
    caption: "Corvette body panel, color-matched and cleared in our booth",
    category: "Corvette Work",
  },
  {
    src: "/images/gallery/gallery-3.webp",
    alt: "Classic gold Chevy Impala restoration completed at Corey's Auto Body Marinette",
    caption: "1960s Chevy Impala full restoration, gold metallic respray",
    category: "Restoration",
  },
  {
    src: "/images/gallery/gallery-4.webp",
    alt: "Shop interior with multiple vehicles in progress at Corey's Auto Body",
    caption: "Inside the shop with multiple projects in progress",
    category: "Shop",
  },
  {
    src: "/images/gallery/gallery-5.webp",
    alt: "Classic car in paint booth during restoration at Corey's Auto Body Marinette WI",
    caption: "Classic vehicle in the booth, base coat going on",
    category: "Restoration",
  },
  {
    src: "/images/gallery/gallery-6.webp",
    alt: "Corvette collision repair and bodywork in progress at Corey's Auto Body Marinette WI",
    caption: "Corvette bodywork and fiberglass repair in progress",
    category: "Corvette Work",
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Black sedan fresh paint job completed in the booth at Corey's Auto Body Marinette WI",
    caption: "Sedan full repaint, factory-quality clear coat finish",
    category: "Auto Painting",
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    alt: "Vehicle on lift during collision repair at Corey's Auto Body Marinette WI",
    caption: "Collision repair in progress, vehicle on the lift",
    category: "Collision Repair",
  },
  {
    src: "/images/gallery/gallery-9.webp",
    alt: "Classic Mustang freshly painted dark blue in the paint booth at Corey's Auto Body",
    caption: "Classic Mustang, full respray in deep blue metallic",
    category: "Auto Painting",
  },
  {
    src: "/images/gallery/gallery-10.jpg",
    alt: "Car masked and prepped for auto painting at Corey's Auto Body Marinette WI",
    caption: "Prep work: masked, sanded, and ready for primer",
    category: "Auto Painting",
  },
];

const SERVICE_LINKS = [
  { href: "/services/collision-repair", label: "Collision Repair" },
  { href: "/services/corvette-work", label: "Corvette Work" },
  { href: "/services/auto-painting", label: "Auto Painting" },
  { href: "/services/restoration-projects", label: "Restorations" },
  { href: "/services/rust-repair", label: "Rust Repair" },
  { href: "/services/insurance-work", label: "Insurance Work" },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Gallery", url: `${BUSINESS.url}/gallery` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            imageGallerySchema(
              GALLERY_IMAGES.map((img) => ({
                url: `${BUSINESS.url}${img.src}`,
                name: img.caption,
                description: img.alt,
              }))
            )
          ),
        }}
      />

      <section className="relative py-20 bg-black/60">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <nav className="mb-4 text-sm text-gray-400 font-[family-name:var(--font-syne)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gallery</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Our Work
          </h1>
          <p className="text-lg text-gray-300 font-[family-name:var(--font-syne)] italic">
            Real results from real jobs. See the quality for yourself.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 font-[family-name:var(--font-syne)] leading-relaxed mb-4">
            Every photo below is a real project completed at our shop in
            Marinette, WI. You'll see collision repairs brought back to
            pre-accident condition, rust cut out and replaced with fresh metal,
            classic vehicles restored from bare frames, and full repaints with
            factory-quality finishes. We don't use stock photos or someone
            else's work.
          </p>
          <p className="text-lg text-gray-700 font-[family-name:var(--font-syne)] leading-relaxed mb-4">
            We document our work because we're proud of it, and because it's the
            best way for you to judge the quality before you bring your vehicle
            in. The photos don't lie. You can see the panel alignment, the paint
            finish, the attention to detail on every project. If you've got a
            vehicle that needs work, these results are what you can expect.
          </p>
          <p className="text-lg text-gray-700 font-[family-name:var(--font-syne)] leading-relaxed">
            From Corvette fiberglass repair to full-body repaints, we handle
            it all. Browse the gallery below, then{" "}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-primary font-bold hover:underline"
            >
              call {BUSINESS.phoneDisplay}
            </a>{" "}
            for a free estimate on your project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group m-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider font-[family-name:var(--font-days-one)]">
                    {img.category}
                  </span>
                  <p className="text-sm text-gray-200 mt-1 font-[family-name:var(--font-syne)]">
                    {img.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 font-[family-name:var(--font-days-one)]">
            Explore Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-[family-name:var(--font-syne)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card-bg text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Want to See Your Vehicle Looking This Good?
          </h2>
          <p className="text-gray-400 mb-6 font-[family-name:var(--font-syne)]">
            Call us today for a free estimate.
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
