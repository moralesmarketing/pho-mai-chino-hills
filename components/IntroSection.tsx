import Image from "next/image";
import { House, Eye, Fan } from "lucide-react";
import OrderButton from "@/components/OrderButton";
import Reveal from "@/components/Reveal";

export default function IntroSection() {
  return (
    <section className="bg-teal-900 py-24 text-center text-cream">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6">
        <div className="mb-8 flex items-center gap-6 text-cream-dim">
          <House className="h-6 w-6" strokeWidth={1.2} />
          <Eye className="h-6 w-6" strokeWidth={1.2} />
          <Fan className="h-6 w-6" strokeWidth={1.2} />
        </div>
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          Rooted in tradition, Pho Mai brings the soul of authentic Vietnamese
          cooking to the heart of Chino Hills — one bowl at a time.
        </h2>
        <div className="mt-10">
          <OrderButton />
        </div>
      </Reveal>

      <Reveal delay={2} className="mt-16 px-6">
        <div className="relative mx-auto h-[70vh] max-w-5xl">
          <Image
            src="/images/herophoto.jpg"
            alt="Bowl of Pho Mai's signature pho with fresh basil"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 60rem, 100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
