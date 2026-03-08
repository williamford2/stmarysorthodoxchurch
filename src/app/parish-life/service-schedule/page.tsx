import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
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
      <div className="py-8">
        <div className="space-y-4 mb-8">
          {services.map((service) => (
            <div key={service.name} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-church-cream-dark shadow-sm">
              <Clock className="h-6 w-6 text-church-burgundy mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-church-burgundy text-lg">{service.name}</h3>
                <p className="text-church-charcoal">{service.day} &middot; {service.time}</p>
                {service.notes && <p className="text-gray-500 text-sm mt-1">{service.notes}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-church-cream p-6 rounded-lg">
          <h2 className="font-heading text-xl font-semibold text-church-burgundy mb-2">Special Services</h2>
          <p className="text-gray-700">
            During Great Lent, additional services are held: the Presanctified Liturgy on Wednesday
            evenings, Paraklesis on Friday evenings, and other seasonal services. Please check the
            weekly bulletin for current schedules and any changes.
          </p>
        </div>
      </div>
    </>
  );
}
