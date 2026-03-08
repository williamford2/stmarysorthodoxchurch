export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  youtubeId: string;
  description?: string;
}

export interface Bulletin {
  title: string;
  date: string;
  filename: string;
}

export interface ChurchEvent {
  title: string;
  date: string;
  time?: string;
  description?: string;
  location?: string;
}

export interface Clergy {
  name: string;
  title: string;
  role: string;
  bio: string;
  image?: string;
}
