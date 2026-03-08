import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Orthodox Worship",
  description: "An introduction to Orthodox Christian worship and the liturgical life.",
  path: "/our-faith/worship",
});

export default function WorshipPage() {
  return (
    <>
      <PageHero title="Orthodox Worship" subtitle="The fullness of Christian liturgical life" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Orthodox worship engages the whole person &mdash; body, mind, and soul &mdash; through prayer,
          chanting, incense, prostrations, and the veneration of icons. It is the expression of
          the Church&apos;s faith in action.
        </p>
        <h2>The Liturgical Cycle</h2>
        <p>
          The Orthodox Church follows an ancient liturgical calendar that structures the entire
          year around the life of Christ and the feasts of the saints. The day begins with
          Vespers at sunset, and the week culminates in the Sunday Divine Liturgy.
        </p>
        <h2>Fasting and Feasting</h2>
        <p>
          Fasting is an integral part of Orthodox spiritual discipline. The Orthodox calendar
          includes four major fasting seasons: the Great Lent before Pascha, the Apostles&apos; Fast,
          the Dormition Fast, and the Nativity Fast. Fasting seasons alternate with periods of
          celebration and feasting.
        </p>
        <h2>Chanting</h2>
        <p>
          Orthodox services are largely sung or chanted rather than spoken. The ancient Byzantine
          chant tradition, along with Slavic and other regional traditions, forms the musical
          foundation of Orthodox worship.
        </p>
      </div>
    </>
  );
}
