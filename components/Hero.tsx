import Image from "next/image";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/interior.jpg"
        alt="Inside Pho Mai restaurant"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-teal-950/70" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream">
        <svg
          width="40"
          height="52"
          viewBox="0 0 40 52"
          fill="none"
          className="mb-6 opacity-90"
          aria-hidden
        >
          <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M4 32c6 4 26 4 32 0M4 40c6 4 26 4 32 0M4 48c6 4 26 4 32 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="font-serif text-6xl leading-none sm:text-8xl">{site.name}</h1>
        <p className="mt-4 text-sm tracking-[0.5em] uppercase text-cream-dim sm:text-base">
          {site.tagline}
        </p>
        <div className="mt-10">
          <OrderButton />
        </div>
      </div>
    </section>
  );
}
