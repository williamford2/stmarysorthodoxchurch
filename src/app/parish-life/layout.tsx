import { SectionSidebar } from "@/components/layout/SectionSidebar";
import { parishLifeNav } from "@/data/nav";

export default function ParishLifeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <SectionSidebar nav={parishLifeNav} title="Parish Life" />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
