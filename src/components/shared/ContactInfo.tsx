import { Phone, Mail, MapPin } from "lucide-react";
import { church } from "@/data/church";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-church-burgundy mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-church-charcoal">Address</p>
          <p className="text-gray-600">{church.address.full}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-church-burgundy flex-shrink-0" />
        <div>
          <p className="font-medium text-church-charcoal">Phone</p>
          <a href={`tel:${church.phone}`} className="text-gray-600 hover:text-church-burgundy transition-colors">
            {church.phone}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-church-burgundy flex-shrink-0" />
        <div>
          <p className="font-medium text-church-charcoal">Email</p>
          <a href={`mailto:${church.email}`} className="text-gray-600 hover:text-church-burgundy transition-colors">
            {church.email}
          </a>
        </div>
      </div>
    </div>
  );
}
