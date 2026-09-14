"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site-config";

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = site.testimonials.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[active] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <section className="bg-teal-900 text-cream">
      <Reveal>
        <h2 className="pt-16 text-center font-serif text-3xl">
          What Our Diners Say About Us
        </h2>
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-0 overflow-x-auto px-6 pb-4 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {site.testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`w-full flex-shrink-0 snap-center border-cream/15 px-8 py-6 text-center sm:w-1/3 sm:border-l ${
                i === 0 ? "sm:border-l-0" : ""
              }`}
            >
              <p className="text-cream-dim italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-6 text-sm tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 pb-10">
          {site.testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-accent" : "bg-cream/30"
              }`}
            />
          ))}
        </div>
      </Reveal>
      <div className="relative h-64 sm:h-96">
        <Image
          src="/images/springrolls.jpg"
          alt="Fresh spring rolls at Pho Mai"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
