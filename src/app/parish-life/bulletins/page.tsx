import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { FileText } from "lucide-react";

export const metadata = buildMetadata({
  title: "Bulletins — The Bells of Saint Mary's",
  description: "Weekly parish bulletins from St. Mary's Orthodox Christian Church.",
  path: "/parish-life/bulletins",
});

export default function BulletinsPage() {
  return (
    <>
      <PageHero title="The Bells of Saint Mary's" subtitle="Weekly parish bulletins" />
      <div className="py-8">
        <div className="bg-church-cream rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-6 w-6 text-church-burgundy" />
            <h2 className="font-heading text-xl font-semibold text-church-burgundy">Parish Bulletins</h2>
          </div>
          <p className="text-gray-700">
            <em>The Bells of Saint Mary&apos;s</em> is our monthly parish bulletin, containing
            service schedules, parish announcements, and spiritual readings. New issues will be
            posted here each month.
          </p>
        </div>
        <p className="text-gray-500 text-center py-8">
          Bulletin PDFs will be posted here. Please check back soon or contact the parish office.
        </p>
      </div>
    </>
  );
}
