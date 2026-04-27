"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Repair process photo ${i + 1} - Corey's Auto Body`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
