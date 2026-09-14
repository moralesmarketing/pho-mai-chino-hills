import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Order Online | Pho Mai",
  description: "Order Pho Mai for pickup or delivery via DoorDash, Uber Eats, Grubhub, or Postmates.",
};

const platforms = [
  { name: "DoorDash", href: site.order.doordash, note: "Recommended — most reliable" },
  { name: "Uber Eats", href: site.order.ubereats },
  { name: "Grubhub", href: site.order.grubhub },
  { name: "Postmates", href: site.order.postmates },
];

export default function OrderPage() {
  return (
    <div className="min-h-[80vh] bg-teal-950 px-6 py-24 text-cream">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.4em] text-cream-dim uppercase">Pickup &amp; Delivery</p>
        <h1 className="mt-4 font-serif text-5xl">Order Online</h1>
        <p className="mt-4 text-cream-dim">
          Choose your favorite delivery platform below, or call us directly at{" "}
          <a href={site.phoneHref} className="text-accent hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={1} className="mx-auto mt-14 grid max-w-2xl gap-4">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-lg border border-cream/15 px-6 py-5 transition-colors hover:border-accent hover:bg-cream/5"
          >
            <span className="font-serif text-xl">{p.name}</span>
            <span className="flex items-center gap-3 text-sm text-cream-dim">
              {p.note && <span className="hidden sm:inline">{p.note}</span>}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </Reveal>

      <Reveal delay={2} className="mx-auto mt-14 max-w-2xl border-t border-cream/10 pt-10 text-center">
        <p className="text-sm tracking-[0.3em] text-cream-dim uppercase">Dining in?</p>
        <a
          href={site.waitlist}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-serif text-2xl text-accent hover:underline"
        >
          Check current wait time
        </a>
        <p className="mt-8">
          <a href={site.yelp} target="_blank" rel="noreferrer" className="text-cream-dim hover:text-cream">
            See us on Yelp
          </a>
        </p>
      </Reveal>
    </div>
  );
}
