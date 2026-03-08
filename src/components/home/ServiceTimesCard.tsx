import { Clock, Calendar, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const icons = [Calendar, Clock, Heart, Clock];

export function ServiceTimesCard() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-church-burgundy mb-2">
          Join Us for Worship
        </h2>
        <p className="text-center text-gray-600 mb-8">
          All are welcome to attend our services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <Card key={service.name} className="border-church-cream-dark text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-church-burgundy/10 rounded-full flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-church-burgundy" />
                  </div>
                  <CardTitle className="font-heading text-lg text-church-burgundy">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-church-charcoal font-semibold">{service.time}</p>
                  <p className="text-gray-500 text-sm">{service.day}</p>
                  {service.notes && (
                    <p className="text-gray-400 text-xs mt-1">{service.notes}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
