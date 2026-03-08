"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/data/nav";
import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="px-3 py-2 text-sm font-medium text-church-cream hover:text-church-gold transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-church-cream hover:text-church-gold transition-colors">
        {item.label}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute top-full left-0 z-50 min-w-[200px] bg-white shadow-lg border border-church-cream-dark rounded-b-md py-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-church-charcoal hover:bg-church-cream hover:text-church-burgundy transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItems({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <nav className="flex flex-col gap-1 py-4">
      {items.map((item) => (
        <div key={item.href}>
          {item.children ? (
            <>
              <button
                onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-church-charcoal hover:bg-church-cream rounded-md transition-colors"
              >
                {item.label}
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", expanded === item.href && "rotate-180")}
                />
              </button>
              {expanded === item.href && (
                <div className="pl-4 border-l-2 border-church-gold ml-4 mb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-church-charcoal hover:text-church-burgundy transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className={cn(
                "block px-4 py-3 font-medium rounded-md transition-colors",
                item.external
                  ? "text-church-gold bg-church-burgundy hover:bg-church-burgundy-dark"
                  : "text-church-charcoal hover:bg-church-cream"
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-church-burgundy shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-church-gold flex items-center justify-center flex-shrink-0">
              <span className="text-church-burgundy font-bold text-lg lg:text-xl">&#10013;</span>
            </div>
            <div>
              <div className="text-church-cream font-heading font-bold text-base lg:text-lg leading-tight group-hover:text-church-gold transition-colors">
                St. Mary&apos;s
              </div>
              <div className="text-church-cream/70 text-xs hidden sm:block">
                Orthodox Christian Church
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <DesktopDropdown key={item.href} item={item} />
            ))}
          </nav>

          {/* Mobile Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className="lg:hidden text-church-cream hover:text-church-gold hover:bg-church-burgundy-dark inline-flex items-center justify-center rounded-md w-10 h-10 transition-colors"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0">
              <div className="flex items-center justify-between px-4 py-4 bg-church-burgundy">
                <span className="text-church-cream font-heading font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  className="text-church-cream hover:bg-church-burgundy-dark"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <MobileNavItems items={mainNav} onClose={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
