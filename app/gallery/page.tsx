import type { Metadata } from "next";
import Image from "next/image";
import { BUSINESS, breadcrumbSchema } from "@/lib/schema";

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
  },
  alternates: {
    canonical: `${BUSINESS.url}/gallery`,
  },
};

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Black Mustang GT with red pinstripe - completed paint job at Corey's Auto Body Marinette WI",
  },
  {
    src: "/images/gallery/gallery-2.webp",
    alt: "Corvette body freshly painted in the paint booth at Corey's Auto Body",
  },
  {
    src: "/images/gallery/gallery-3.webp",
    alt: "Classic gold Chevy Impala restoration completed at Corey's Auto Body Marinette",
  },
  {
    src: "/images/gallery/gallery-4.webp",
    alt: "Shop interior with multiple vehicles in progress at Corey's Auto Body",
  },
  {
    src: "/images/gallery/gallery-5.webp",
    alt: "Classic car in paint booth during restoration at Corey's Auto Body",
  },
  {
    src: "/images/gallery/gallery-6.webp",
    alt: "Corvette collision repair in progress at Corey's Auto Body Marinette WI",
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Black sedan fresh paint job in the booth at Corey's Auto Body Marinette WI",
  },
  {
    src: "/images/gallery/gallery-8.jpg",
    alt: "Vehicle on lift during collision repair at Corey's Auto Body Marinette WI",
  },
  {
    src: "/images/gallery/gallery-9.webp",
    alt: "Classic Mustang freshly painted dark blue in the paint booth at Corey's Auto Body",
  },
  {
    src: "/images/gallery/gallery-10.jpg",
    alt: "Car masked and prepped for auto painting at Corey's Auto Body Marinette WI",
  },
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

      <section className="relative py-20 bg-black/60">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-days-one)]">
            Our Work
          </h1>
          <p className="text-lg text-gray-300 font-[family-name:var(--font-syne)] italic">
            Real results from real jobs. See the quality for yourself.
          </p>
        </div>
      </section>

      <section className="py-16 bg-black/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
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
