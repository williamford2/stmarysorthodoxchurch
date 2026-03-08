import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { church } from "@/data/church";

export const metadata = buildMetadata({
  title: "Sermon Videos",
  description: "Watch sermon videos from St. Mary's Orthodox Christian Church.",
  path: "/parish-life/sermons",
});

export default function SermonsPage() {
  return (
    <>
      <PageHero title="Sermon Videos" subtitle="Watch and listen to Orthodox preaching" />
      <div className="py-8">
        <p className="text-gray-600 mb-6">
          Sermons from our Sunday Divine Liturgy are available on our YouTube channel.
        </p>
        {church.social.youtube ? (
          <a
            href={church.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-church-burgundy text-white font-semibold px-6 py-3 rounded-lg hover:bg-church-burgundy-dark transition-colors"
          >
            Visit Our YouTube Channel
          </a>
        ) : (
          <p className="text-gray-500 italic">
            YouTube channel link coming soon. Please contact the parish for information about accessing sermon recordings.
          </p>
        )}
      </div>
    </>
  );
}
