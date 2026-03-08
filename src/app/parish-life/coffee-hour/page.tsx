import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Coffee Hour",
  description: "Sunday fellowship after Divine Liturgy at St. Mary's Orthodox Christian Church.",
  path: "/parish-life/coffee-hour",
});

export default function CoffeeHourPage() {
  return (
    <>
      <PageHero title="Coffee Hour" subtitle="Fellowship after Divine Liturgy" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          After Sunday Divine Liturgy, all are invited to join us for Coffee Hour &mdash; a time of
          fellowship, refreshment, and community in our parish hall. Coffee Hour is one of the
          best opportunities to meet our parishioners and feel the warmth of our Orthodox community.
        </p>
        <p>
          Visitors and newcomers are especially welcome! Come introduce yourself and learn more
          about our parish family.
        </p>
      </div>
    </>
  );
}
