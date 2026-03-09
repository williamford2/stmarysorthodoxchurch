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
          the Mother of God &mdash; specifically celebrating her Dormition (falling asleep) on
          <strong> August 15th</strong>. The Dormition of the Theotokos is one of the Great Feasts
          of the Orthodox Church.
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
          Virgin Mary. The faithful observe a two-week fast (August 1&ndash;14) in preparation for
          this great feast. During this period, the Paraklesis &mdash; a service of supplication to
          the Theotokos &mdash; is sung each evening. The fast culminates in the festive Divine
          Liturgy on August 15th. All are welcome to join us for these beautiful services each year.
        </p>

        <h2>Apolytikion (First Tone)</h2>
        <blockquote>
          <p>
            In giving birth you preserved your virginity, and in falling asleep you did not forsake
            the world, O Theotokos. You were translated to life, O Mother of Life, and through your
            intercessions you deliver our souls from death.
          </p>
        </blockquote>

        <h2>Kontakion (Second Tone)</h2>
        <blockquote>
          <p>
            Neither the tomb, nor death, could hold the Theotokos, who is constant in prayer and our
            firm hope in her intercessions. For being the Mother of Life, she was translated to life
            by the One who dwelt in her ever-virgin womb.
          </p>
        </blockquote>
      </div>
    </>
  );
}
