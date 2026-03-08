"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

interface SectionSidebarProps {
  nav: NavItem[];
  title: string;
}

export function SectionSidebar({ nav, title }: SectionSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-56 flex-shrink-0">
      <div className="bg-church-burgundy rounded-lg overflow-hidden">
        <div className="px-4 py-3 bg-church-burgundy-dark">
          <h2 className="font-heading text-church-gold font-semibold text-sm uppercase tracking-wide">
            {title}
          </h2>
        </div>
        <nav>
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2.5 text-sm border-b border-church-burgundy-light last:border-0 transition-colors",
                  isActive
                    ? "bg-church-gold text-church-burgundy font-semibold"
                    : "text-church-cream hover:bg-church-burgundy-light"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
