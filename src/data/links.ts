export interface OrthodoxLink {
  name: string;
  url: string;
  description: string;
  category: "diocese" | "national" | "resources" | "local";
}

export const orthodoxLinks: OrthodoxLink[] = [
  {
    name: "American Carpatho-Russian Orthodox Diocese",
    url: "https://www.acrod.org",
    description: "The official website of our diocese.",
    category: "diocese",
  },
  {
    name: "Orthodox Church in America",
    url: "https://www.oca.org",
    description: "Resources for Orthodox Christians in America.",
    category: "national",
  },
  {
    name: "Greek Orthodox Archdiocese",
    url: "https://www.goarch.org",
    description: "Resources from the Greek Orthodox Archdiocese.",
    category: "national",
  },
  {
    name: "Ancient Faith Radio",
    url: "https://www.ancientfaith.com",
    description: "Orthodox Christian podcasts, music, and resources.",
    category: "resources",
  },
  {
    name: "Orthodox Wiki",
    url: "https://orthodoxwiki.org",
    description: "An Orthodox Christian encyclopedia.",
    category: "resources",
  },
];
