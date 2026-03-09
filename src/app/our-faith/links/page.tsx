import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { orthodoxLinks, OrthodoxLink } from "@/data/links";
import { ExternalLink } from "lucide-react";

export const metadata = buildMetadata({
  title: "Orthodox Links",
  description: "Links to Orthodox Christian resources, our diocese, and sister parishes.",
  path: "/our-faith/links",
});

const categoryLabels: Record<OrthodoxLink["category"], string> = {
  diocese: "Our Diocese",
  national: "National Organizations",
  resources: "Resources & Media",
  local: "Local Sister Parishes",
};

const categoryOrder: OrthodoxLink["category"][] = ["diocese", "local", "national", "resources"];

function LinkCard({ link }: { link: OrthodoxLink }) {
  return (
    <a
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
  );
}

export default function LinksPage() {
  return (
    <>
      <PageHero title="Orthodox Links" subtitle="Resources for Orthodox Christians" />
      <div className="py-8 space-y-10">
        {categoryOrder.map((cat) => {
          const links = orthodoxLinks.filter((l) => l.category === cat);
          if (!links.length) return null;
          return (
            <section key={cat}>
              <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4 pb-2 border-b border-church-cream-dark">
                {categoryLabels[cat]}
              </h2>
              <div className="space-y-3">
                {links.map((link) => (
                  <LinkCard key={link.url} link={link} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
