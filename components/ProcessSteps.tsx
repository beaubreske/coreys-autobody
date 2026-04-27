import ImageSlider from "./ImageSlider";

const STEPS = [
  {
    number: "01",
    title: "Initial Inspection",
    description:
      "We start with a thorough inspection of your vehicle to assess all damage, visible and hidden.",
  },
  {
    number: "02",
    title: "Estimate & Plan",
    description:
      "You get a detailed, transparent estimate. No surprises. We walk you through every line item.",
  },
  {
    number: "03",
    title: "Repair Process",
    description:
      "Our team gets to work using quality materials and proven techniques. You can check in anytime.",
  },
  {
    number: "04",
    title: "Final Check & Delivery",
    description:
      "Every repair goes through a final quality check before we hand you back the keys.",
  },
];

const SLIDER_IMAGES = [
  "/images/process/process-1.jpg",
  "/images/process/process-2.jpg",
  "/images/process/process-3.jpg",
  "/images/process/process-4.jpg",
  "/images/process/process-5.jpg",
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-black/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-[family-name:var(--font-days-one)]">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-bold text-lg font-[family-name:var(--font-days-one)]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-days-one)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-[family-name:var(--font-syne)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ImageSlider images={SLIDER_IMAGES} />
        </div>
      </div>
    </section>
  );
}
