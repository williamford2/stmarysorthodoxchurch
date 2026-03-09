import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Confession",
  description: "Information about the Holy Mystery of Confession at St. Mary's Orthodox Christian Church.",
  path: "/about/confession",
});

export default function ConfessionPage() {
  return (
    <>
      <PageHero title="Holy Confession" subtitle="The Mystery of Repentance and Reconciliation" />
      <div className="py-8 prose prose-lg max-w-none">
        <h2>Schedule</h2>
        <p>
          Confession is heard every <strong>Saturday from 3:00 PM to 4:00 PM</strong>, before
          Great Vespers. Confession is also available by appointment &mdash; please contact the
          pastor to arrange a time.
        </p>

        <h2>About the Mystery of Confession</h2>
        <p>
          Holy Confession is one of the Seven Holy Mysteries (Sacraments) of the Orthodox Church.
          Rather than functioning as a legal tribunal, Confession is understood as a visit to the
          Great Physician &mdash; a moment of healing for the soul. The priest stands as a witness
          and guide, while the confession itself is made directly to God.
        </p>
        <p>
          Orthodox Christians are encouraged to confess regularly &mdash; especially before
          receiving Holy Communion &mdash; and to prepare thoughtfully through prayer, fasting,
          and examination of conscience.
        </p>

        <h2>How to Prepare</h2>
        <ul>
          <li>Spend time in quiet prayer and self-examination before coming to Confession</li>
          <li>Review the Ten Commandments and reflect honestly on how you have fallen short</li>
          <li>
            Read from an Orthodox prayer book before Confession. Recommended titles include{" "}
            <em>Come to Me</em> and <em>Chlib D&uacute;si</em>
          </li>
          <li>
            A <em>Guide to Holy Confession</em> is also available from the ACRY (American
            Carpatho-Russian Youth) &mdash; ask the pastor for a copy
          </li>
          <li>Come with a sincere desire to repent and amend your life</li>
        </ul>

        <p>
          If you have questions about Confession or are new to the practice, please speak with
          the pastor. He is glad to guide you.
        </p>
      </div>
    </>
  );
}
