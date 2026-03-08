export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string; // ISO date string
  youtubeId: string;
  description?: string;
}

export const sermons: Sermon[] = [
  // Placeholder — YouTube channel URL to be provided by parish
  // Add sermon entries here once channel is confirmed
];
