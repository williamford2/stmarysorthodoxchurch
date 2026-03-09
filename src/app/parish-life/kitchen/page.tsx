import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "St. Mary's Kitchen",
  description: "Traditional Carpatho-Russian recipes and food ministry at St. Mary's Orthodox Christian Church.",
  path: "/parish-life/kitchen",
});

const recipes = [
  {
    name: "Spiedies",
    description: "A Southern Tier classic — marinated meat skewers beloved in the Binghamton region.",
  },
  {
    name: "Hrutka (Easter Cheese)",
    description: "Traditional Orthodox Easter cheese, a cherished Carpatho-Rusyn Pascha tradition.",
  },
  {
    name: "Paska (Easter Bread)",
    description: "Sweet, braided Easter bread blessed at the Paschal feast.",
  },
  {
    name: "BBQ Chicken",
    description: "A parish favorite for outdoor gatherings and fundraisers.",
  },
];

export default function KitchenPage() {
  return (
    <>
      <PageHero title="St. Mary's Kitchen" subtitle="Recipes and fellowship through food" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          Food is central to Orthodox life &mdash; from the fasting seasons that punctuate our
          liturgical year to the festive meals that celebrate great feasts. At St. Mary&apos;s,
          our kitchen ministry carries on generations of Carpatho-Russian culinary tradition.
        </p>

        <h2>Our Famous Nut Rolls</h2>
        <p>
          St. Mary&apos;s is known throughout the Southern Tier for our traditional Carpatho-Russian
          nut rolls and holiday baked goods. A demonstration video is available on our{" "}
          <a
            href="https://www.youtube.com/channel/UCZiCQrPnRmJWQj_vEjuTURg/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-church-burgundy hover:underline"
          >
            YouTube channel
          </a>.
        </p>
        <p>
          To order nut rolls for the Easter or Christmas season, visit our{" "}
          <a href="/bake-sale" className="text-church-burgundy hover:underline">Bake Sale page</a>.
        </p>

        <h2>Parish Recipes</h2>
        <p>
          We are glad to share some of our treasured recipes with you. Download them below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.name}
            className="bg-church-cream rounded-lg p-5 border border-church-cream-dark"
          >
            <h3 className="font-heading text-lg font-bold text-church-burgundy mb-1">
              {recipe.name}
            </h3>
            <p className="text-gray-600 text-sm">{recipe.description}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          Recipe PDFs are available — please contact the parish office or ask after Sunday Liturgy.
        </p>

        <h2>St. Mary&apos;s Ladies Guild Cookbook</h2>
        <p>
          Our Ladies Guild has compiled a beloved cookbook featuring the meals and desserts that
          our parishioners know and love. The cookbook is available for purchase at{" "}
          <strong>$20.00</strong>. Contact the parish office to purchase a copy.
        </p>

        <h2>Coffee Hour</h2>
        <p>
          Every Sunday after the Divine Liturgy, the parish gathers in the church hall for Coffee
          Hour &mdash; a chance to share food, fellowship, and community. All visitors are warmly
          invited. See our{" "}
          <a href="/parish-life/coffee-hour" className="text-church-burgundy hover:underline">
            Coffee Hour page
          </a>{" "}
          for the volunteer schedule.
        </p>
      </div>
    </>
  );
}
