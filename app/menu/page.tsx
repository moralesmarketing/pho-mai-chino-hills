import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OrderButton from "@/components/OrderButton";
import { menu } from "@/lib/menu-data";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Menu | Pho Mai",
  description: "Full menu for Pho Mai Vietnamese Noodle & Grill in Chino Hills.",
};

export default function MenuPage() {
  return (
    <div className="bg-teal-950 text-cream">
      <section className="border-b border-cream/10 px-6 py-20 text-center">
        <Reveal>
          <p className="text-sm tracking-[0.4em] text-cream-dim uppercase">
            {site.hours.map((h) => `${h.label} ${h.value}`).join("  ·  ")}
          </p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Menu</h1>
          <div className="mt-8">
            <OrderButton />
          </div>
        </Reveal>
      </section>

      <nav className="sticky top-[64px] z-30 overflow-x-auto border-b border-cream/10 bg-teal-950/95 px-6 py-4 backdrop-blur">
        <ul className="flex w-max gap-6 text-xs tracking-[0.2em] text-cream-dim uppercase">
          {menu.map((cat) => (
            <li key={cat.name}>
              <a
                href={`#${slug(cat.name)}`}
                className="whitespace-nowrap hover:text-cream"
              >
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {menu.map((cat) => (
          <Reveal key={cat.name}>
            <section id={slug(cat.name)} className="mb-16 scroll-mt-32">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl">{cat.name}</h2>
                {cat.viName && (
                  <p className="mt-1 text-sm tracking-[0.3em] text-cream-dim uppercase">
                    {cat.viName}
                  </p>
                )}
              </div>
              <ul className="space-y-6">
                {cat.items.map((item, idx) => (
                  <li key={`${item.name}-${idx}`} className="border-b border-cream/10 pb-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-serif text-lg">
                        {item.code && (
                          <span className="mr-2 text-cream-dim">{item.code}.</span>
                        )}
                        {item.name}
                        {item.viName && (
                          <span className="text-cream-dim"> / {item.viName}</span>
                        )}
                      </p>
                      <span className="whitespace-nowrap font-serif text-lg text-accent">
                        ${item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-cream-dim">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
