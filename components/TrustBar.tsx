const TRUST_ITEMS = [
  "Repairs Done the Right Way",
  "Full Transparency Throughout the Process",
  "Rust Repair & Restoration Specialists",
];

export default function TrustBar() {
  return (
    <section className="bg-black/80 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item}
            className="text-center pb-4 border-b-2 border-primary"
          >
            <p className="text-white font-bold text-lg font-[family-name:var(--font-days-one)] flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
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
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
