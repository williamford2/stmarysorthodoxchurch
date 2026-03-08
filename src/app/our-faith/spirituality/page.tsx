import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Orthodox Spirituality",
  description: "Prayer, fasting, and almsgiving in the Orthodox Christian life.",
  path: "/our-faith/spirituality",
});

export default function SpiritualityPage() {
  return (
    <>
      <PageHero title="Orthodox Spirituality" subtitle="Prayer, fasting, and almsgiving" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Orthodox Christian spirituality is rooted in the ancient traditions of the Church:
          prayer, fasting, almsgiving, and the reception of the Holy Mysteries. These practices
          work together to cleanse the heart and open it to the grace of God.
        </p>
        <h2>Prayer</h2>
        <p>
          The Orthodox Church provides a rich treasury of prayers for every hour of the day.
          The Daily Office (morning and evening prayers, the Hours) structures the day around
          prayer. The Jesus Prayer &mdash; &ldquo;Lord Jesus Christ, Son of God, have mercy on me, a
          sinner&rdquo; &mdash; is a central practice of Orthodox hesychast spirituality.
        </p>
        <h2>Fasting</h2>
        <p>
          Fasting is a discipline of the body and soul that the Orthodox Church has maintained
          since apostolic times. Orthodox Christians fast from meat, dairy, fish, wine, and oil
          on Wednesdays and Fridays throughout the year, and more strictly during the four
          major fasting seasons.
        </p>
        <h2>Almsgiving</h2>
        <p>
          Care for the poor and the neighbor is an expression of love for God. The Orthodox
          tradition calls believers to give generously of their time, talent, and treasure in
          service to others.
        </p>
        <h2>The Philokalia</h2>
        <p>
          The <em>Philokalia</em> is a classic collection of Orthodox spiritual writings from the
          4th through the 15th centuries, focused on the practice of hesychasm &mdash; the interior
          stillness and watchfulness that opens the soul to God. It remains a foundational text
          of Orthodox spirituality.
        </p>
      </div>
    </>
  );
}
