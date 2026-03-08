import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { church } from "@/data/church";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Contact St. Mary's Orthodox Christian Church in Endicott, NY.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We would love to hear from you" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-6">
              Get in Touch
            </h2>
            <ContactInfo />
            <div className="mt-8 p-4 bg-church-cream rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Roll Orders:</strong> Call {church.rollOrderPhone} to place orders for
                our famous nut rolls and baked goods.
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-church-burgundy mb-6">
              Find Us
            </h2>
            {/* PLACEHOLDER: Replace this src with the real Google Maps embed URL from
                maps.google.com → Share → Embed a map → copy the iframe src */}
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-dashed border-amber-400 bg-amber-50 flex flex-col items-center justify-center gap-2">
              <p className="text-amber-800 font-semibold text-sm">Map placeholder</p>
              <p className="text-amber-700 text-xs text-center px-4">
                Replace with real Google Maps embed URL from<br />
                maps.google.com → Share → Embed a map
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">{church.address.full}</p>
          </div>
        </div>
      </div>
    </>
  );
}
