import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { services, lentenServices } from "@/data/services";
import { Clock } from "lucide-react";

export const metadata = buildMetadata({
  title: "Service Schedule",
  description: "Weekly and seasonal service schedule at St. Mary's Orthodox Christian Church.",
  path: "/parish-life/service-schedule",
});

export default function ServiceSchedulePage() {
  return (
    <>
      <PageHero title="Service Schedule" subtitle="Join us for worship" />
      <div className="py-8 space-y-10">

        <section>
          <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4 pb-2 border-b border-church-cream-dark">
            Regular Schedule
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-church-cream-dark shadow-sm"
              >
                <Clock className="h-6 w-6 text-church-burgundy mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-church-burgundy text-lg">
                    {service.name}
                  </h3>
                  <p className="text-church-charcoal">
                    {service.day} &middot; {service.time}
                  </p>
                  {service.notes && (
                    <p className="text-gray-500 text-sm mt-1">{service.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-church-burgundy mb-4 pb-2 border-b border-church-cream-dark">
            Great Lent Schedule
          </h2>
          <p className="text-gray-600 mb-4">
            Additional services are held during Great Lent. Please check the weekly bulletin
            for any schedule changes.
          </p>
          <div className="space-y-4">
            {lentenServices.map((service) => (
              <div
                key={service.name}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-church-cream-dark shadow-sm"
              >
                <Clock className="h-6 w-6 text-church-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-church-burgundy text-lg">
                    {service.name}
                  </h3>
                  <p className="text-church-charcoal">
                    {service.day} &middot; {service.time}
                  </p>
                  {service.notes && (
                    <p className="text-gray-500 text-sm mt-1">{service.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-church-cream p-6 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-church-burgundy mb-2">
            Stay Updated
          </h2>
          <p className="text-gray-700">
            The most current schedule is always available in the weekly bulletin,{" "}
            <em>The Bells of Saint Mary&apos;s</em>. Subscribe or check the{" "}
            <a href="/parish-life/bulletins" className="text-church-burgundy hover:underline">
              Bulletins page
            </a>{" "}
            for the latest edition.
          </p>
        </div>
      </div>
    </>
  );
}
