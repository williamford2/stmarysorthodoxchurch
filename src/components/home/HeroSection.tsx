import Image from "next/image";
import Link from "next/link";
import { church } from "@/data/church";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background image */}
      <Image
        src="/images/church-exterior.jpg"
        alt="St. Mary's Orthodox Christian Church exterior"
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      {/* Neutral dark overlay — no color tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-church-gold font-heading text-lg lg:text-xl mb-3 tracking-wide">
          Welcome to
        </p>
        <h1 className="font-heading text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
          St. Mary&apos;s<br />
          <span className="text-church-gold">Orthodox Christian</span><br />
          Church
        </h1>
        <p className="text-white/80 text-lg lg:text-xl mb-2">
          Endicott, New York
        </p>
        <div className="flex items-center justify-center gap-2 text-church-gold text-base lg:text-lg mb-8">
          <span>&#10013;</span>
          <span>Sunday Divine Liturgy &mdash; 10:00 AM</span>
          <span>&#10013;</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/visit"
            className="bg-church-gold text-church-burgundy font-semibold px-6 py-3 rounded-lg hover:bg-church-gold-light transition-colors text-base"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/parish-life/sermons"
            className="bg-white/10 text-white border border-white/40 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-base"
          >
            Watch Sermons
          </Link>
          <a
            href={church.giving.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-church-burgundy-light text-white font-semibold px-6 py-3 rounded-lg hover:bg-church-burgundy transition-colors text-base"
          >
            Give Online
          </a>
        </div>
      </div>
    </section>
  );
}
