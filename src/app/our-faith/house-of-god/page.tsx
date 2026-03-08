import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "The House of God",
  description: "The Orthodox church building — a heaven on earth.",
  path: "/our-faith/house-of-god",
});

export default function HouseOfGodPage() {
  return (
    <>
      <PageHero title="The House of God" subtitle="A heaven on earth" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Orthodox church building is not merely a place where Christians gather &mdash; it is
          understood to be a sacred space, a meeting point between heaven and earth. Every element
          of the building is filled with theological meaning, drawing the faithful into the
          presence of God.
        </p>
        <h2>The Nave</h2>
        <p>
          The nave is where the faithful stand during services. In Orthodox practice, worshippers
          traditionally stand throughout the Liturgy as a sign of resurrection and readiness
          before God. Pews are a more recent accommodation in some parishes.
        </p>
        <h2>The Iconostasis</h2>
        <p>
          The iconostasis &mdash; the icon screen &mdash; separates the nave from the sanctuary (altar).
          It is adorned with icons of Christ, the Theotokos, John the Baptist, and the saints.
          The iconostasis does not hide the altar from the faithful but rather reveals the
          heavenly reality of the Divine Liturgy being celebrated within.
        </p>
        <h2>Holy Icons</h2>
        <p>
          Icons cover the walls, pillars, and ceiling of an Orthodox church. These images of
          Christ, the Theotokos, angels, and saints are not mere art but windows into heaven &mdash;
          reminders of the great cloud of witnesses who surround the faithful in worship.
        </p>
      </div>
    </>
  );
}
