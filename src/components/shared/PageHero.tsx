import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function PageHero({ title, subtitle, imageSrc, imageAlt, className }: PageHeroProps) {
  return (
    <div className={cn("relative bg-church-burgundy text-church-cream overflow-hidden", className)}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="object-cover opacity-20"
          priority
        />
      )}
      <div className="relative container mx-auto px-4 py-12 lg:py-16">
        <h1 className="font-heading text-3xl lg:text-4xl font-bold text-church-cream mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-church-cream/80 text-lg max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-4 w-16 h-1 bg-church-gold rounded-full" />
      </div>
    </div>
  );
}
