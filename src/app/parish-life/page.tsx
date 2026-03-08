import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Parish Life",
  description: "Life and activities at St. Mary's Orthodox Christian Church.",
  path: "/parish-life",
});

export default function ParishLifePage() {
  return (
    <>
      <PageHero title="Parish Life" subtitle="Community, worship, and fellowship at St. Mary's" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Life at St. Mary&apos;s revolves around our common worship and the bonds of Christian
          community. Explore the various aspects of parish life using the navigation menu.
        </p>
      </div>
    </>
  );
}
