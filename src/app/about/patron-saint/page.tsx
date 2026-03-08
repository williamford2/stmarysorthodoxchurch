import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Patron Saint",
  description: "The Dormition of the Theotokos — the patron feast of St. Mary's Orthodox Christian Church.",
  path: "/about/patron-saint",
});

export default function PatronSaintPage() {
  return (
    <>
      <PageHero title="Our Patron Saint" subtitle="The Most Holy Theotokos and Ever-Virgin Mary" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          St. Mary&apos;s Orthodox Christian Church is dedicated to the Most Holy Theotokos &mdash;
          the Mother of God &mdash; specifically celebrating her Dormition (falling asleep) on August 15th.
          The Dormition of the Theotokos is one of the Great Feasts of the Orthodox Church.
        </p>
        <h2>The Theotokos in Orthodox Faith</h2>
        <p>
          The Orthodox Church honors the Virgin Mary as Theotokos &mdash; literally &ldquo;God-bearer&rdquo; or
          &ldquo;Mother of God.&rdquo; This title affirms the central Orthodox teaching that Jesus Christ
          is fully God and fully man, and that Mary bore God incarnate in her womb.
        </p>
        <h2>The Feast of the Dormition</h2>
        <p>
          The Dormition of the Theotokos commemorates the death, burial, and resurrection of the
          Virgin Mary. The faithful observe a two-week fast (August 1&ndash;14) in preparation for this
          great feast. Special services are held during this period, culminating in the festive
          Divine Liturgy on August 15th.
        </p>
        <p>
          A cherished tradition at St. Mary&apos;s is the Paraklesis &mdash; a service of supplication
          to the Theotokos &mdash; sung during the Dormition fast. We invite all to join us for these
          beautiful services each year.
        </p>
      </div>
    </>
  );
}
