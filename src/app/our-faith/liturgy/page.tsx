import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "The Divine Liturgy",
  description: "The central act of Orthodox Christian worship — the Divine Liturgy.",
  path: "/our-faith/liturgy",
});

export default function LiturgyPage() {
  return (
    <>
      <PageHero title="The Divine Liturgy" subtitle="The central act of Orthodox worship" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Divine Liturgy is the central act of Orthodox Christian worship. It is the
          Eucharistic service in which the faithful come together to offer praise and thanksgiving
          to God and to receive the Body and Blood of Christ in Holy Communion.
        </p>
        <h2>The Liturgy of St. John Chrysostom</h2>
        <p>
          The most commonly celebrated form of the Divine Liturgy is the Liturgy of St. John
          Chrysostom, which dates to the 4th century. It is a rich tapestry of scripture,
          prayer, chanting, and ceremonial action that draws the faithful into the heavenly
          worship of God.
        </p>
        <h2>Structure of the Liturgy</h2>
        <p>
          The Divine Liturgy is divided into two main parts: the Liturgy of the Word (formerly
          called the Liturgy of the Catechumens), which includes readings from the Epistles and
          Gospels, and the Liturgy of the Faithful, which is the Eucharistic prayer and
          communion.
        </p>
        <h2>At St. Mary&apos;s</h2>
        <p>
          The Divine Liturgy is celebrated every Sunday at 10:00 AM, as well as on major feast
          days and weekdays as scheduled. All are welcome to attend. Orthodox Christians who
          have prepared through fasting and Confession are welcome to receive Holy Communion.
        </p>
      </div>
    </>
  );
}
