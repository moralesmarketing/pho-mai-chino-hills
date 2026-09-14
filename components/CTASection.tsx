import Image from "next/image";
import OrderButton from "@/components/OrderButton";
import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/phobowl.jpg"
        alt="Pho Mai dining room"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-teal-950/70" />
      <Reveal className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center text-cream">
        <h2 className="font-serif text-3xl sm:text-4xl">
          A Bowl Worth Slowing Down For
        </h2>
        <p className="mt-4 text-cream-dim">
          At Pho Mai, every dish is made with quiet intention — fragrant
          broths, fresh herbs, and flavors that linger long after the last
          spoonful.
        </p>
        <div className="mt-8">
          <OrderButton />
        </div>
      </Reveal>
    </section>
  );
}
