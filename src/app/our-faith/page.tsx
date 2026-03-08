import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Our Faith",
  description: "An introduction to Orthodox Christianity at St. Mary's Church.",
  path: "/our-faith",
});

export default function FaithPage() {
  return (
    <>
      <PageHero title="Our Faith" subtitle="An Introduction to Orthodox Christianity" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Orthodox Christianity is the ancient Christian faith, unchanged since the time of the
          Holy Apostles. The Orthodox Church preserves the fullness of the Christian tradition &mdash;
          its theology, worship, sacraments, and way of life &mdash; as handed down through the ages.
        </p>
        <p>
          The word &ldquo;Orthodox&rdquo; means &ldquo;correct belief&rdquo; or &ldquo;right glory.&rdquo;
          The Orthodox Church traces its origins directly to Christ and His Apostles, and has
          maintained an unbroken line of apostolic succession throughout history.
        </p>
        <h2>The Orthodox Faith</h2>
        <p>
          Orthodox Christians believe in the Holy Trinity &mdash; Father, Son, and Holy Spirit &mdash; one
          God in three persons. We confess Jesus Christ as fully God and fully man, born of the
          Virgin Mary, crucified, risen, and coming again in glory.
        </p>
        <p>
          Use the navigation menu to explore the various aspects of Orthodox faith and practice.
          We invite you to learn, to visit, and to experience Orthodoxy for yourself.
        </p>
      </div>
    </>
  );
}
