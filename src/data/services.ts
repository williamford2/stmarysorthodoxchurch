export interface ServiceTime {
  name: string;
  time: string;
  day: string;
  notes?: string;
}

export const services: ServiceTime[] = [
  {
    name: "Divine Liturgy",
    day: "Sunday",
    time: "10:00 AM",
  },
  {
    name: "Sunday School",
    day: "Sunday",
    time: "11:00 AM",
    notes: "September through May",
  },
  {
    name: "Confession",
    day: "Saturday",
    time: "3:00–4:00 PM",
  },
  {
    name: "Weekday Liturgy",
    day: "Weekdays",
    time: "9:00 AM",
    notes: "As scheduled",
  },
  {
    name: "Lenten Services",
    day: "Various evenings",
    time: "See bulletin",
    notes: "Paraklesis, Presanctified Liturgy, Vespers",
  },
];
