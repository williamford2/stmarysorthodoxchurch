import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "The Church",
  description: "Orthodox ecclesiology — the nature and mission of the Church.",
  path: "/our-faith/the-church",
});

export default function TheChurchPage() {
  return (
    <>
      <PageHero title="The Church" subtitle="The Body of Christ in the world" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Orthodox Church understands itself as the one, holy, catholic, and apostolic Church
          confessed in the Nicene Creed. It is the Body of Christ &mdash; not a human institution,
          but a divine-human reality, animated by the Holy Spirit.
        </p>
        <h2>One, Holy, Catholic, and Apostolic</h2>
        <p>
          These four marks of the Church, taken from the Nicene Creed, describe the essential
          nature of the Orthodox Church. The Church is <em>one</em> because there is one Christ and
          one faith; <em>holy</em> because the Holy Spirit dwells within it; <em>catholic</em> because it
          holds the fullness of the faith everywhere and for all people; and <em>apostolic</em> because
          it traces its origin and authority to the Apostles of Christ.
        </p>
        <h2>The Local Church</h2>
        <p>
          For the Orthodox, the local church &mdash; the parish gathered around its bishop or priest
          for the celebration of the Eucharist &mdash; is the fullness of the Church in that place.
          The parish is not a branch office of a larger organization; it is the Church fully
          present in its locality.
        </p>
        <h2>The Communion of Saints</h2>
        <p>
          The Orthodox Church is not limited to the living. It includes all the faithful who
          have fallen asleep in Christ throughout the ages. The saints in heaven intercede for
          the living, and the living pray for those who have died. The Church militant, suffering,
          and triumphant are one body in Christ.
        </p>
      </div>
    </>
  );
}
