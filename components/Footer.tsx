import Image from "next/image";
import { site } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="bg-teal-950 text-cream">
      <Reveal className="flex flex-col items-center gap-4 border-b border-cream/10 px-6 py-16 text-center">
        <Image
          src="/images/logo.avif"
          alt="Pho Mai logo"
          width={96}
          height={96}
          className="h-24 w-24 rounded-sm object-cover"
        />
        <h2 className="font-serif text-3xl">Pho Mai</h2>
        <p className="text-sm tracking-[0.3em] text-cream-dim uppercase">
          Vietnamese Noodle &amp; Grill
        </p>
      </Reveal>

      <div className="grid gap-0 border-b border-cream/10 md:grid-cols-2">
        <Reveal className="h-72 md:h-auto">
          <iframe
            title="Pho Mai location map"
            className="h-full w-full grayscale"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=4505+Chino+Hills+Pkwy,+Chino+Hills,+CA+91709&output=embed"
          />
        </Reveal>
        <Reveal delay={1} className="flex flex-col justify-center gap-6 px-6 py-12 sm:px-12">
          <h3 className="font-serif text-2xl">Contact Us</h3>
          <ContactForm />
        </Reveal>
      </div>

      <div className="flex flex-col items-center gap-4 px-6 py-10 text-center text-xs tracking-wide text-cream-dim sm:flex-row sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p>{site.address}</p>
          <p>
            {site.hours.map((h) => `${h.label}: ${h.value}`).join(" · ")}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={site.phoneHref} className="hover:text-cream">
            {site.phone}
          </a>
          <a href={site.yelp} target="_blank" rel="noreferrer" className="hover:text-cream">
            Yelp
          </a>
        </div>
        <p>© {new Date().getFullYear()} Pho Mai. All rights reserved.</p>
      </div>
    </footer>
  );
}
