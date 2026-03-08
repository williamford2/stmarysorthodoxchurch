import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { church } from "@/data/church";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-church-burgundy text-church-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Church Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-church-gold mb-4">
              {church.shortName}
            </h3>
            <p className="text-church-cream/80 text-sm mb-4">
              Orthodox Christian Church in Endicott, NY.<br />
              Part of the {church.diocese}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-church-gold mt-0.5 flex-shrink-0" />
                <span className="text-church-cream/80">{church.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-church-gold flex-shrink-0" />
                <a href={`tel:${church.phone}`} className="text-church-cream/80 hover:text-church-gold transition-colors">
                  {church.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-church-gold flex-shrink-0" />
                <a href={`mailto:${church.email}`} className="text-church-cream/80 hover:text-church-gold transition-colors">
                  {church.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Service Times */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-church-gold mb-4">
              Service Times
            </h3>
            <div className="space-y-2">
              {services.slice(0, 4).map((s) => (
                <div key={s.name} className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-church-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-church-cream font-medium">{s.name}</div>
                    <div className="text-church-cream/70">{s.day} &middot; {s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-church-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Visit Us", href: "/visit" },
                { label: "Contact Us", href: "/contact" },
                { label: "Sermon Videos", href: "/parish-life/sermons" },
                { label: "Bulletins", href: "/parish-life/bulletins" },
                { label: "Bake Sale", href: "/bake-sale" },
                { label: "Our Faith", href: "/our-faith" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-church-cream/80 hover:text-church-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Give / Connect */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-church-gold mb-4">
              Give &amp; Connect
            </h3>
            <p className="text-church-cream/80 text-sm mb-4">
              Support our parish ministry through secure online giving.
            </p>
            {/* Giving link — update church.giving.url with real Tithe.ly parish URL */}
            <a
              href={church.giving.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-church-gold text-church-burgundy font-semibold text-sm px-4 py-2 rounded hover:bg-church-gold-light transition-colors mb-4"
            >
              Give Online <span className="font-normal opacity-70">(placeholder link)</span>
            </a>
            <div className="space-y-1.5 text-sm">
              {/* Social links — add URLs to src/data/church.ts once confirmed */}
              <div>
                {church.social.facebook ? (
                  <a href={church.social.facebook} target="_blank" rel="noopener noreferrer" className="text-church-cream/80 hover:text-church-gold transition-colors">
                    Facebook
                  </a>
                ) : (
                  <span className="text-church-cream/40 italic">Facebook (URL needed)</span>
                )}
              </div>
              <div>
                {church.social.youtube ? (
                  <a href={church.social.youtube} target="_blank" rel="noopener noreferrer" className="text-church-cream/80 hover:text-church-gold transition-colors">
                    YouTube
                  </a>
                ) : (
                  <span className="text-church-cream/40 italic">YouTube (URL needed)</span>
                )}
              </div>
              <div>
                <a href={church.social.flickr} target="_blank" rel="noopener noreferrer" className="text-church-cream/80 hover:text-church-gold transition-colors">
                  Photo Gallery (Flickr)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-church-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-church-cream/60">
          <p>&copy; {new Date().getFullYear()} {church.name}. All rights reserved.</p>
          <p>Diocese of the American Carpatho-Russian Orthodox</p>
        </div>
      </div>
    </footer>
  );
}
