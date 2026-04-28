import { BUSINESS } from "@/lib/schema";

const TESTIMONIALS = [
  {
    name: "Teya",
    text: "Corey did an amazing job on my car! The repair looks like it never happened. Highly recommend!",
    stars: 5,
  },
  {
    name: "Margaret",
    text: "Very professional and transparent throughout the entire process. They kept me updated every step of the way.",
    stars: 5,
  },
  {
    name: "Jordan",
    text: "Best auto body shop in the area. Fair pricing and the quality of work is outstanding.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCards() {
  return (
    <section className="py-20 bg-black/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-[family-name:var(--font-days-one)]">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-card-bg rounded-xl p-6 border border-primary/30 shadow-[0_0_15px_rgba(225,6,0,0.15)]"
            >
              <Stars count={t.stars} />
              <p className="text-gray-300 mb-4 font-[family-name:var(--font-syne)] italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-white font-bold font-[family-name:var(--font-days-one)]">
                {t.name}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden mt-10">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${BUSINESS.lng}!3d${BUSINESS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${BUSINESS.placeId}!2sCorey's+Auto+Body!5e0!3m2!1sen!2sus`}
            width="100%"
            height={450}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Corey's Auto Body Google Reviews"
          />
        </div>
      </div>
    </section>
  );
}
