import { church } from "@/data/church";

export function GivingSection() {
  return (
    <section className="py-12 lg:py-16 bg-church-burgundy text-church-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="text-church-gold text-3xl mb-4">&#10013;</div>
        <h2 className="font-heading text-3xl font-bold text-white mb-4">
          Support Our Parish
        </h2>
        <p className="text-church-cream/80 max-w-xl mx-auto mb-8 text-lg">
          Your generosity helps sustain our ministry, maintain our beautiful church,
          and serve our community. Thank you for your prayerful support.
        </p>
        <a
          href={church.giving.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-church-gold text-church-burgundy font-bold px-8 py-4 rounded-lg hover:bg-church-gold-light transition-colors text-lg"
        >
          Give Online via Tithe.ly
        </a>
        <p className="text-church-cream/60 text-sm mt-4">
          Secure online giving powered by Tithe.ly
        </p>
      </div>
    </section>
  );
}
