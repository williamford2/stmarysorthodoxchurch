import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "St. Mary's Kitchen",
  description: "Traditional recipes and food ministry at St. Mary's Orthodox Christian Church.",
  path: "/parish-life/kitchen",
});

export default function KitchenPage() {
  return (
    <>
      <PageHero title="St. Mary's Kitchen" subtitle="Traditional recipes and fellowship through food" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Food is a central part of Orthodox life &mdash; from the fasting seasons that punctuate our
          liturgical year to the festive meals that celebrate great feasts. At St. Mary&apos;s,
          our kitchen ministry brings the parish together in fellowship and serves our community.
        </p>
        <h2>Famous Nut Rolls &amp; Baked Goods</h2>
        <p>
          St. Mary&apos;s is known throughout the region for our traditional Carpatho-Russian baked
          goods, especially our nut rolls (kolachi). These treats are baked by our parishioners
          and available at our annual bake sale. Visit our{" "}
          <a href="/bake-sale" className="text-church-burgundy hover:underline">Bake Sale page</a>{" "}
          for more information on ordering.
        </p>
        <p>
          Recipes and more content coming soon. Contact the parish office for information about
          our kitchen ministry.
        </p>
      </div>
    </>
  );
}
