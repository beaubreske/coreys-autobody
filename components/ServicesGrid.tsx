import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    name: "Collision Repair",
    slug: "collision-repair",
    description: "View real collision repairs and before and after results.",
    image: "/images/services/collision-repair-hero.jpg",
  },
  {
    name: "Corvette Work",
    slug: "corvette-work",
    description: "Specialized Corvette repair and restoration work.",
    image: "/images/services/corvette-work.jpg",
  },
  {
    name: "Rust Repair",
    slug: "rust-repair",
    description: "Proper rust repair done the right way, not covered up.",
    image: "/images/services/rust-repair.jpg",
  },
  {
    name: "Restoration Projects",
    slug: "restoration-projects",
    description: "Complete vehicle restorations from start to finish.",
    image: "/images/services/restoration.jpg",
  },
  {
    name: "Auto Painting",
    slug: "auto-painting",
    description: "Professional auto painting with factory-quality finish.",
    image: "/images/services/auto-painting.webp",
  },
  {
    name: "Insurance Work",
    slug: "insurance-work",
    description: "We work with all insurance companies to get your vehicle repaired.",
    image: "/images/services/insurance-work.jpg",
  },
];

export { SERVICES };

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-black/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3 font-[family-name:var(--font-days-one)]">
          Our Services
        </h2>
        <p className="text-center text-gray-400 mb-12 font-[family-name:var(--font-syne)] italic">
          Select a service to view real examples of our work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
            >
              <Image
                src={service.image}
                alt={`${service.name} - Corey's Auto Body Marinette WI`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-days-one)] flex items-center gap-1">
                  {service.name}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
                <p className="text-sm text-gray-300 mt-1 font-[family-name:var(--font-syne)]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
