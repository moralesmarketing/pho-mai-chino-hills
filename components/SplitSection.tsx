import Image from "next/image";
import { Flower2, Frame, Landmark } from "lucide-react";
import OrderButton from "@/components/OrderButton";
import Reveal from "@/components/Reveal";

export default function SplitSection() {
  return (
    <section className="grid bg-teal-900 text-cream md:grid-cols-2">
      <Reveal className="relative h-80 md:h-auto">
        <Image
          src="/images/fullbleed.avif"
          alt="Fresh pho with bean sprouts and herbs"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </Reveal>
      <Reveal delay={1} className="flex flex-col justify-center gap-6 px-8 py-16 sm:px-16">
        <div className="flex items-center gap-6 text-cream-dim">
          <Flower2 className="h-6 w-6" strokeWidth={1.2} />
          <Frame className="h-6 w-6" strokeWidth={1.2} />
          <Landmark className="h-6 w-6" strokeWidth={1.2} />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl">
          Come for the Pho. Stay for Everything Else.
        </h2>
        <p className="max-w-md text-cream-dim">
          From a solo lunch bowl to a full family spread, Pho Mai has
          something for every appetite — fresh, flavorful, and ready
          whenever you are.
        </p>
        <div>
          <OrderButton href="/#contact" label="Contact Us" />
        </div>
      </Reveal>
    </section>
  );
}
