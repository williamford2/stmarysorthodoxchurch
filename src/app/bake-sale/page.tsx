import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { church } from "@/data/church";

export const metadata = buildMetadata({
  title: "Bake Sale & Roll Orders",
  description: "Order traditional Carpatho-Russian baked goods from St. Mary's Orthodox Christian Church.",
  path: "/bake-sale",
});

export default function BakeSalePage() {
  return (
    <>
      <PageHero title="Bake Sale & Roll Orders" subtitle="Traditional Carpatho-Russian baked goods" />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-church-cream rounded-lg p-8 mb-8">
          <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-4">
            Famous Nut Rolls
          </h2>
          <p className="text-gray-700 mb-4">
            St. Mary&apos;s is known throughout the Southern Tier for our traditional
            Carpatho-Russian nut rolls (kolachi) and other baked goods, lovingly prepared
            by our parishioners using generations-old recipes.
          </p>
          <p className="text-gray-700 mb-6">
            To place an order, please call our roll order line:
          </p>
          <a
            href={`tel:${church.rollOrderPhone}`}
            className="inline-flex items-center gap-2 bg-church-burgundy text-white font-bold text-lg px-6 py-4 rounded-lg hover:bg-church-burgundy-dark transition-colors"
          >
            &#128222; {church.rollOrderPhone}
          </a>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Our Baked Goods</h2>
          <ul>
            <li>Traditional walnut roll (nut roll / kolach)</li>
            <li>Poppy seed roll</li>
            <li>Pirohi (pierogi)</li>
            <li>Holupki (stuffed cabbage rolls)</li>
            <li>Seasonal specialties</li>
          </ul>
          <p>
            Items are available at parish bake sales throughout the year, and pre-orders
            are accepted by phone. Proceeds support the parish ministry.
          </p>
          <p>
            For online ordering (when available), please check back here or contact the
            parish office for details.
          </p>
        </div>
      </div>
    </>
  );
}
