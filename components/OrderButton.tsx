import Link from "next/link";

export default function OrderButton({
  href = "/order",
  label = "Order Online",
  variant = "outline",
}: {
  href?: string;
  label?: string;
  variant?: "outline" | "solid";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm tracking-[0.15em] uppercase transition-colors duration-300";
  const styles =
    variant === "outline"
      ? "border-cream text-cream hover:bg-cream hover:text-teal-950"
      : "border-accent bg-accent text-cream hover:bg-transparent hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}
