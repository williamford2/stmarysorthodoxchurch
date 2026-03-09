import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Visit Us",
  description: "Planning to visit St. Mary's Orthodox Christian Church? Here's what to expect.",
  path: "/visit",
});

const faqs = [
  {
    q: "Will I be welcomed?",
    a: "Absolutely. Greeters are at the entrance to welcome you. We are a warm community and are genuinely glad you are here. Don't hesitate to introduce yourself to any parishioner.",
  },
  {
    q: "What should I wear?",
    a: "We ask for modest dress as a sign of reverence — think \"nice business dinner\" as a standard. Women may choose to cover their heads, though this is not required of visitors.",
  },
  {
    q: "What is the Liturgy like?",
    a: "The Divine Liturgy is a structured, ancient service of call-and-response prayer, Scripture, and hymns. The entire congregation participates in worship together. The service lasts approximately 1.5 hours.",
  },
  {
    q: "Do I have to stand the whole time?",
    a: "Standing is the traditional posture of prayer in the Orthodox Church — it is a sign of respect and attentiveness. Comfortable shoes are recommended! That said, please sit if you need to. We care about your well-being far more than the posture.",
  },
  {
    q: "What are the icons and artwork?",
    a: "Icons are sacred images of Christ, the Theotokos (Virgin Mary), and the saints. The Church is surrounded by a great \"cloud of witnesses\" (Hebrews 12:1) — the saints in heaven who pray alongside us. Icons make that reality visible.",
  },
  {
    q: "Do Orthodox Christians pray to saints?",
    a: "We ask the saints to pray for us, just as we ask one another to pray for us (James 5:14–16). There is a crucial distinction between asking a saint to intercede (prayer) and worshipping them (latria, reserved for God alone).",
  },
  {
    q: "Why is Mary so important in Orthodox worship?",
    a: "Mary is honored as the Theotokos — the Mother of God — not because she is divine, but because she bore God incarnate. She is the supreme example of human discipleship: she said \"yes\" to God where Eve said \"no.\" She is our greatest intercessor.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero title="New to St. Mary's?" subtitle="Everything you need to know for your first visit" />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Info cards */}
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
                  {s.notes && (
                    <p className="text-gray-500 text-sm italic">{s.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-church-cream-dark shadow-sm">
            <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4">
              Where We Are
            </h2>
            <p className="text-gray-700">1907 Jenkins Street<br />Endicott, NY 13760</p>
            <p className="text-gray-600 text-sm mt-2">(607) 754-8952</p>
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

        {/* Holy Communion note */}
        <div className="bg-church-cream rounded-lg p-6 border border-church-cream-dark mb-12">
          <h2 className="font-heading text-xl font-bold text-church-burgundy mb-3">
            Holy Communion
          </h2>
          <p className="text-gray-700">
            Holy Communion in the Orthodox Church is offered to Orthodox Christians who have
            prepared through fasting and Confession. Visitors who are not Orthodox are warmly
            welcome to come forward to receive a blessing from the priest. Please join us for
            Coffee Hour after the Liturgy &mdash; a wonderful opportunity to meet our community.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-6">
          Common Questions
        </h2>
        <div className="space-y-6 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-church-cream-dark pb-6 last:border-0">
              <h3 className="font-heading text-lg font-bold text-church-charcoal mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Inquirers */}
        <div className="bg-white rounded-lg p-6 border border-church-cream-dark shadow-sm">
          <h2 className="font-heading text-xl font-bold text-church-burgundy mb-3">
            Interested in Orthodoxy?
          </h2>
          <p className="text-gray-700 mb-4">
            Whether you are coming from a Roman Catholic, Protestant, Anglican, Lutheran,
            Evangelical, or no faith background, we welcome you to explore Orthodox Christianity
            at your own pace. Our pastor is glad to meet with inquirers and answer questions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-church-burgundy text-white font-medium px-5 py-2.5 rounded-lg hover:bg-church-burgundy-dark transition-colors"
          >
            Contact the Pastor
          </a>
        </div>
      </div>
    </>
  );
}
