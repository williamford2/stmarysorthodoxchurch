import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Russian Club",
  description: "The Russian Club at St. Mary's Orthodox Christian Church, Endicott, NY.",
  path: "/about/russian-club",
});

export default function RussianClubPage() {
  return (
    <>
      <PageHero title="Russian Club" subtitle="Celebrating our cultural heritage" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Russian Club at St. Mary&apos;s celebrates and preserves the rich cultural heritage
          of our Carpatho-Russian community. Activities include cultural events, traditional
          music, food traditions, and educational programs for all ages.
        </p>
        <p>
          For more information about the Russian Club and upcoming events, please contact the
          parish office.
        </p>
      </div>
    </>
  );
}
