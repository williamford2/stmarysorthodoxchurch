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
    notes: "9:00 AM during summer months",
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
    notes: "Also available by appointment — contact the pastor",
  },
  {
    name: "Weekday Liturgy",
    day: "Weekdays",
    time: "9:00 AM",
    notes: "As scheduled; see bulletin",
  },
];

export const lentenServices: ServiceTime[] = [
  {
    name: "Paraklesis",
    day: "Monday",
    time: "6:00 PM",
  },
  {
    name: "Liturgy of the Presanctified Gifts",
    day: "Wednesday",
    time: "6:00 PM",
  },
  {
    name: "Vespers",
    day: "Friday",
    time: "6:00 PM",
    notes: "Select Fridays — see bulletin",
  },
  {
    name: "Souls Saturday Liturgy",
    day: "Saturday",
    time: "10:00 AM",
    notes: "Selected Saturdays during Great Lent",
  },
  {
    name: "Great Vespers",
    day: "Saturday",
    time: "4:00 PM",
  },
];
