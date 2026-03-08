import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "History of the Church",
  description: "A brief history of the Orthodox Christian Church.",
  path: "/our-faith/history",
});

export default function HistoryPage() {
  return (
    <>
      <PageHero title="History of the Church" subtitle="Two thousand years of unbroken faith" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Orthodox Church traces its origins to the day of Pentecost, when the Holy Spirit
          descended upon the Apostles gathered in Jerusalem (Acts 2). From that moment, the
          Church has continued in an unbroken line of apostolic succession and faithful
          preservation of the Christian faith.
        </p>
        <h2>The Early Church</h2>
        <p>
          The Apostles and their successors spread the Christian faith throughout the Roman Empire
          and beyond. The first centuries saw the Church define its faith through the great
          Ecumenical Councils, refuting heresies and articulating the truth about Christ,
          the Trinity, and salvation.
        </p>
        <h2>The Great Schism (1054)</h2>
        <p>
          In 1054, a rupture occurred between the Eastern (Orthodox) and Western (Roman Catholic)
          churches, rooted in theological, ecclesiological, and political differences. The
          Orthodox Church understands itself as the continuation of the undivided Church of
          the first millennium.
        </p>
        <h2>The Carpatho-Russian Tradition</h2>
        <p>
          The Carpatho-Russian people of the Carpathian Mountain region (present-day Slovakia,
          Ukraine, and Hungary) were evangelized in the 9th century by Sts. Cyril and Methodius.
          Waves of Carpatho-Russian immigrants brought their Orthodox faith to North America in
          the late 19th and early 20th centuries, establishing parishes such as St. Mary&apos;s
          throughout the United States.
        </p>
        <h2>The American Carpatho-Russian Orthodox Diocese</h2>
        <p>
          The American Carpatho-Russian Orthodox Diocese (ACROD) was founded in 1938 under
          Patriarch Benjamin I of Constantinople. Today it continues to serve Carpatho-Russian
          Orthodox Christians throughout North America under the Ecumenical Patriarchate.
        </p>
      </div>
    </>
  );
}
