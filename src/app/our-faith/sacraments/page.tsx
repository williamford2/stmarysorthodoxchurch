import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "The Holy Sacraments",
  description: "The Seven Holy Mysteries (Sacraments) of the Orthodox Church.",
  path: "/our-faith/sacraments",
});

export default function SacramentsPage() {
  return (
    <>
      <PageHero title="The Holy Sacraments" subtitle="The Seven Holy Mysteries of the Church" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Orthodox Church recognizes seven Holy Mysteries (Sacraments) as the primary means
          by which God&apos;s grace is imparted to the faithful. These are not merely symbolic acts
          but true encounters with the living God.
        </p>
        <h2>The Seven Holy Mysteries</h2>
        <ol>
          <li>
            <strong>Holy Baptism</strong> &mdash; The entry into the Church, through which a person
            is born again of water and the Spirit.
          </li>
          <li>
            <strong>Holy Chrismation</strong> &mdash; The gift of the Holy Spirit, administered
            immediately after Baptism.
          </li>
          <li>
            <strong>Holy Eucharist</strong> &mdash; The Body and Blood of Christ, offered in the
            Divine Liturgy.
          </li>
          <li>
            <strong>Holy Confession</strong> &mdash; The Mystery of repentance, reconciliation,
            and forgiveness of sins.
          </li>
          <li>
            <strong>Holy Orders</strong> &mdash; The ordination of bishops, priests, and deacons
            for the service of the Church.
          </li>
          <li>
            <strong>Holy Matrimony</strong> &mdash; The sacred union of a man and woman in Christ.
          </li>
          <li>
            <strong>Holy Unction</strong> &mdash; The anointing of the sick for healing of body and soul.
          </li>
        </ol>
        <p>
          All seven mysteries are celebrated in the life of St. Mary&apos;s parish. Please contact
          Father Alexander for more information about any of these holy mysteries.
        </p>
      </div>
    </>
  );
}
