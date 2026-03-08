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
          Confession is heard on <strong>Saturdays from 3:00 PM to 4:00 PM</strong>.
          Confession is also available by appointment &mdash; please contact Father Alexander to arrange a time.
        </p>
        <h2>About the Mystery of Confession</h2>
        <p>
          Holy Confession is one of the Seven Holy Mysteries (Sacraments) of the Orthodox Church.
          Through Confession, a penitent Christian confesses sins to God in the presence of the
          priest, who witnesses and pronounces absolution by God&apos;s grace.
        </p>
        <p>
          Orthodox Christians are encouraged to confess regularly &mdash; especially before receiving
          Holy Communion &mdash; and to prepare thoughtfully through prayer, fasting, and examination
          of conscience.
        </p>
        <h2>How to Prepare</h2>
        <ul>
          <li>Spend time in quiet prayer and self-examination before coming to Confession</li>
          <li>Review the Ten Commandments and reflect on how you have fallen short</li>
          <li>Read from an Orthodox prayer book &mdash; many include prayers before Confession</li>
          <li>Come with a sincere desire to repent and amend your life</li>
        </ul>
        <p>
          If you have questions about Confession or are new to the practice, please speak with
          Father Alexander. He is glad to guide you.
        </p>
      </div>
    </>
  );
}
