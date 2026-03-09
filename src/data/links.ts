export interface OrthodoxLink {
  name: string;
  url: string;
  description: string;
  category: "diocese" | "national" | "resources" | "local";
}

export const orthodoxLinks: OrthodoxLink[] = [
  // Diocese
  {
    name: "American Carpatho-Russian Orthodox Diocese",
    url: "https://www.acrod.org",
    description: "The official website of our diocese.",
    category: "diocese",
  },
  {
    name: "Ecumenical Patriarchate of Constantinople",
    url: "https://www.patriarchate.org",
    description: "The Ecumenical Patriarchate, our spiritual authority under Patriarch Bartholomew I.",
    category: "diocese",
  },
  // National
  {
    name: "Greek Orthodox Archdiocese of America",
    url: "https://www.goarch.org",
    description: "The largest Orthodox jurisdiction in the United States.",
    category: "national",
  },
  {
    name: "Orthodox Christian Fellowship",
    url: "https://www.ocf.net",
    description: "Campus ministry for Orthodox Christians at colleges and universities.",
    category: "national",
  },
  // Resources
  {
    name: "Today's Readings (ACROD)",
    url: "https://www.acrod.org/prayercorner/todaysreadings",
    description: "Daily Scripture readings from the ACROD Prayer Corner.",
    category: "resources",
  },
  {
    name: "Orthodox Saints Podcast (ACROD)",
    url: "https://www.acrod.org/ministries/youth/arena/ymultimedia/podcasts/oc-saints-podcast",
    description: "A podcast about the saints of the Orthodox Church.",
    category: "resources",
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
  {
    name: "St. Mary's Photo Albums (Flickr)",
    url: "https://www.flickr.com/photos/129870610@N07/albums",
    description: "Photo albums from St. Mary's parish life and celebrations.",
    category: "resources",
  },
  // Local sister parishes
  {
    name: "St. Michael's Orthodox Church, Binghamton",
    url: "https://www.saintmichaels.info/",
    description: "Our neighboring ACROD parish in Binghamton, NY.",
    category: "local",
  },
  {
    name: "St. John the Baptist Orthodox Church",
    url: "https://sjoc.org/",
    description: "An ACROD sister parish in our region.",
    category: "local",
  },
  {
    name: "St. Nicholas Orthodox Church, Warren OH",
    url: "https://www.stnicholaswarren.org/",
    description: "An ACROD parish in Warren, Ohio.",
    category: "local",
  },
];
