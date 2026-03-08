import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { orthodoxLinks } from "@/data/links";
import { ExternalLink } from "lucide-react";

export const metadata = buildMetadata({
  title: "Orthodox Links",
  description: "Links to Orthodox Christian resources and organizations.",
  path: "/our-faith/links",
});

export default function LinksPage() {
  return (
    <>
      <PageHero title="Orthodox Links" subtitle="Resources for Orthodox Christians" />
      <div className="py-8 space-y-4">
        {orthodoxLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-4 bg-white rounded-lg border border-church-cream-dark hover:border-church-gold hover:shadow-md transition-all group"
          >
            <ExternalLink className="h-5 w-5 text-church-burgundy mt-0.5 flex-shrink-0 group-hover:text-church-gold transition-colors" />
            <div>
              <p className="font-semibold text-church-burgundy group-hover:text-church-gold transition-colors">
                {link.name}
              </p>
              <p className="text-gray-600 text-sm mt-0.5">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
