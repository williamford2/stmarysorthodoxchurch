import Link from "next/link";
import { church } from "@/data/church";

export function WelcomeSection() {
  return (
    <section className="py-12 lg:py-16 bg-church-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-church-gold text-4xl mb-4">&#10013;</div>
          <h2 className="font-heading text-3xl font-bold text-church-burgundy mb-6">
            A Message of Welcome
          </h2>
          {/* PLACEHOLDER QUOTE — replace with actual words from Fr. Alexander */}
          <blockquote className="text-lg text-church-charcoal leading-relaxed mb-6 italic border-l-4 border-amber-400 pl-4 text-left">
            &ldquo;We invite you to come and experience the fullness of the Orthodox Christian faith &mdash;
            its ancient liturgy, sacred traditions, and warm community. Whether you are a lifelong
            Orthodox Christian or curious about the faith for the first time, you are welcome here
            at St. Mary&apos;s.&rdquo;
          </blockquote>
          <p className="text-gray-600 mb-1">
            &mdash; {church.pastor}, Pastor
          </p>
          <p className="text-amber-700 text-xs italic mb-6">(Placeholder quote — to be replaced with Fr. Alexander&apos;s actual words)</p>
          <Link
            href="/about/pastors-message"
            className="inline-block text-church-burgundy font-semibold border-b-2 border-church-gold hover:text-church-gold transition-colors"
          >
            Read the full Pastor&apos;s Message &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
