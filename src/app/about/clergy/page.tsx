import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { clergy } from "@/data/clergy";

export const metadata = buildMetadata({
  title: "Clergy",
  description: "Meet the clergy of St. Mary's Orthodox Christian Church in Endicott, NY.",
  path: "/about/clergy",
});

export default function ClergyPage() {
  return (
    <>
      <PageHero title="Clergy" subtitle="Servants of the Church" />
      <div className="py-8 space-y-10">
        {clergy.map((person) => (
          <div key={person.name} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-church-cream-dark last:border-0">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-church-cream-dark overflow-hidden border-2 border-church-gold">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-church-burgundy text-3xl font-heading">
                    &#10013;
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-1">
                {person.title}
              </h2>
              <p className="text-church-gold font-medium mb-3">{person.role}</p>
              <p className="text-gray-700 leading-relaxed">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
