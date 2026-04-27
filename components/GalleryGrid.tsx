import Image from "next/image";
import Link from "next/link";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Mustang GT paint job completed at Corey's Auto Body Marinette WI",
  },
  {
    src: "/images/gallery/gallery-2.webp",
    alt: "Corvette body freshly painted in paint booth at Corey's Auto Body",
  },
  {
    src: "/images/gallery/gallery-3.webp",
    alt: "Classic Chevy Impala restoration at Corey's Auto Body Marinette",
  },
];

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-[family-name:var(--font-days-one)]">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors font-[family-name:var(--font-days-one)]"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
