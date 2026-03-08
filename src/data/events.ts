export interface ChurchEvent {
  title: string;
  date: string; // ISO date string
  time?: string;
  description?: string;
  location?: string;
}

export const events: ChurchEvent[] = [
  // Events are announced weekly in the bulletin
  // This list can be updated as events are confirmed
];
