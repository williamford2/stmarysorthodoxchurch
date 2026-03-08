import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Special Services",
  description: "Special services at St. Mary's — Vespers, Matins, Paraklesis, and more.",
  path: "/our-faith/special-services",
});

export default function SpecialServicesPage() {
  return (
    <>
      <PageHero title="Special Services" subtitle="Vespers, Matins, Paraklesis, and more" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Beyond the Sunday Divine Liturgy, the Orthodox Church offers a rich variety of
          services throughout the week and the liturgical year. These services deepen the
          faithful&apos;s participation in the life of prayer and worship.
        </p>
        <h2>Vespers</h2>
        <p>
          Vespers is the evening service of the Church, celebrating the close of the day and
          anticipating the coming feast or Sunday. Great Vespers is celebrated on Saturday
          evenings and the eves of great feasts.
        </p>
        <h2>Matins (Orthros)</h2>
        <p>
          Matins is the morning service, celebrated before the Divine Liturgy on Sundays and
          feast days. It includes the reading of the Psalms, canons, and hymns honoring the
          feast being celebrated.
        </p>
        <h2>Paraklesis</h2>
        <p>
          The Paraklesis is a supplicatory service to the Theotokos, sung especially during
          the Dormition Fast (August 1&ndash;14). It is a beautiful and moving service of petition,
          asking for the intercession of the Mother of God.
        </p>
        <h2>Presanctified Liturgy</h2>
        <p>
          During Great Lent, the Liturgy of the Presanctified Gifts is celebrated on Wednesday
          and Friday evenings. This ancient service, attributed to St. Gregory the Dialogist,
          offers the faithful an opportunity to receive Communion during the lenten weekdays.
        </p>
        <p>
          Please check the weekly bulletin for current service schedules and seasonal additions.
        </p>
      </div>
    </>
  );
}
