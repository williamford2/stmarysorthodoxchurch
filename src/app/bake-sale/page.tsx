import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { church } from "@/data/church";

export const metadata = buildMetadata({
  title: "Bake Sale & Roll Orders",
  description: "Order traditional Carpatho-Russian holiday rolls from St. Mary's Orthodox Christian Church.",
  path: "/bake-sale",
});

const rolls = [
  { name: "Nut Roll", description: "Classic walnut filling in a tender, sweet dough." },
  { name: "Poppy Seed Roll", description: "Rich poppy seed filling, a Carpatho-Russian staple." },
  { name: "Apricot Roll", description: "Sweet apricot preserves wrapped in soft dough." },
  { name: "Lekvar (Prune) Roll", description: "Traditional prune butter filling." },
  { name: "Apple Roll", description: "Spiced apple filling, perfect for the season." },
];

export default function BakeSalePage() {
  return (
    <>
      <PageHero title="Bake Sale & Roll Orders" subtitle="Traditional Carpatho-Russian holiday rolls" />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-church-cream rounded-lg p-8 mb-8">
          <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-4">
            Holiday Rolls — $15.00 each
          </h2>
          <p className="text-gray-700 mb-4">
            St. Mary&apos;s is known throughout the Southern Tier for our traditional
            Carpatho-Russian holiday rolls, lovingly baked by our parishioners using
            generations-old recipes. Available in five varieties.
          </p>
          <p className="text-gray-700 mb-2 font-medium">
            Pickup on Saturdays during the Easter and Christmas seasons at:
          </p>
          <p className="text-gray-700 mb-6">
            1907 Jenkins Street, Endicott, NY 13760<br />
            <em>Order by the Sunday before your desired pickup date.</em>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={church.bakeSale.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-church-burgundy text-white font-bold text-lg px-6 py-4 rounded-lg hover:bg-church-burgundy-dark transition-colors"
            >
              Order Online
            </a>
            <a
              href={`tel:${church.rollOrderPhone}`}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-church-burgundy text-church-burgundy font-bold text-lg px-6 py-4 rounded-lg hover:bg-church-cream transition-colors"
            >
              &#128222; Order by Phone: {church.rollOrderPhone}
            </a>
          </div>
        </div>

        <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-4">
          Available Varieties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {rolls.map((roll) => (
            <div
              key={roll.name}
              className="bg-white rounded-lg border border-church-cream-dark p-4"
            >
              <p className="font-semibold text-church-charcoal">{roll.name}</p>
              <p className="text-gray-600 text-sm mt-1">{roll.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          Proceeds from roll sales support the ministry and programs of St. Mary&apos;s Parish.
          Thank you for your support!
        </p>
      </div>
    </>
  );
}
