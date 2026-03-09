export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string; // ISO date string
  youtubeId: string;
  description?: string;
}

export const youtubeChannelUrl =
  "https://www.youtube.com/channel/UCZiCQrPnRmJWQj_vEjuTURg/videos";

export const welcomeVideoId = "kxlq803Q4jo";

export const sermons: Sermon[] = [
  // Add sermon entries here as new sermons are recorded.
  // YouTube IDs can be found in the video URL: youtube.com/watch?v=YOUTUBE_ID
  // Example:
  // {
  //   id: "sermon-2024-01-07",
  //   title: "Nativity of Our Lord",
  //   preacher: "Rev. Alexander Hurtsellers",
  //   date: "2024-01-07",
  //   youtubeId: "YOUTUBE_ID_HERE",
  // },
];
