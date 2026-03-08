import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Visit Us",
  description: "Planning to visit St. Mary's Orthodox Christian Church? Here's what to expect.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <PageHero title="Visit Us" subtitle="New to St. Mary's? Here's what to expect" />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 border border-church-cream-dark shadow-sm">
            <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4">
              When to Come
            </h2>
            <div className="space-y-3">
              {services.slice(0, 2).map((s) => (
                <div key={s.name}>
                  <p className="font-semibold text-church-charcoal">{s.name}</p>
                  <p className="text-gray-600">{s.day} &middot; {s.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-church-cream-dark shadow-sm">
            <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4">
              Where We Are
            </h2>
            <p className="text-gray-700">1907 Jenkins Street<br />Endicott, NY 13760</p>
            <a
              href="https://maps.google.com/?q=1907+Jenkins+Street+Endicott+NY+13760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-church-burgundy font-medium hover:underline"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>What to Expect</h2>
          <p>
            Visitors are warmly welcome at St. Mary&apos;s. The Divine Liturgy is the center of
            our worship &mdash; a beautiful, ancient service filled with chanting, incense, and prayer.
            The service lasts approximately 1.5 hours.
          </p>
          <h3>Dress</h3>
          <p>
            We ask that visitors dress modestly as a sign of reverence for the sacred space.
            Women may wish to cover their heads, though this is not required of visitors.
          </p>
          <h3>Communion</h3>
          <p>
            Holy Communion in the Orthodox Church is offered to Orthodox Christians who have
            prepared through fasting and Confession. Visitors who are not Orthodox are welcome
            to come forward to receive a blessing from the priest.
          </p>
          <h3>After the Liturgy</h3>
          <p>
            Please join us for Coffee Hour after the service! This is a wonderful opportunity
            to meet our community and ask any questions you may have.
          </p>
          <h3>Questions?</h3>
          <p>
            We would love to answer your questions about Orthodox Christianity or our parish.
            Please <a href="/contact" className="text-church-burgundy hover:underline">contact us</a> or
            speak with Father Alexander after the Liturgy.
          </p>
        </div>
      </div>
    </>
  );
}
