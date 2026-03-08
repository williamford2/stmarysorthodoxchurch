export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Parish", href: "/about" },
      { label: "Patron Saint", href: "/about/patron-saint" },
      { label: "Clergy", href: "/about/clergy" },
      { label: "Pastor's Message", href: "/about/pastors-message" },
      { label: "Confession", href: "/about/confession" },
      { label: "Russian Club", href: "/about/russian-club" },
    ],
  },
  {
    label: "Our Faith",
    href: "/our-faith",
    children: [
      { label: "Introduction", href: "/our-faith" },
      { label: "House of God", href: "/our-faith/house-of-god" },
      { label: "Worship", href: "/our-faith/worship" },
      { label: "Liturgy", href: "/our-faith/liturgy" },
      { label: "The Sacraments", href: "/our-faith/sacraments" },
      { label: "Special Services", href: "/our-faith/special-services" },
      { label: "Teachings", href: "/our-faith/teachings" },
      { label: "Spirituality", href: "/our-faith/spirituality" },
      { label: "History", href: "/our-faith/history" },
      { label: "The Church", href: "/our-faith/the-church" },
      { label: "Links", href: "/our-faith/links" },
    ],
  },
  {
    label: "Parish Life",
    href: "/parish-life",
    children: [
      { label: "Service Schedule", href: "/parish-life/service-schedule" },
      { label: "Bulletins", href: "/parish-life/bulletins" },
      { label: "Sermon Videos", href: "/parish-life/sermons" },
      { label: "St. Mary's Kitchen", href: "/parish-life/kitchen" },
      { label: "Coffee Hour", href: "/parish-life/coffee-hour" },
    ],
  },
  { label: "Visit Us", href: "/visit" },
  { label: "Contact Us", href: "/contact" },
  { label: "Bake Sale", href: "/bake-sale" },
  {
    label: "Give Online",
    href: "https://tithe.ly/give_new/www/#/tithely/give-one-time/",
    external: true,
  },
];

export const aboutNav: NavItem[] = [
  { label: "Our Parish", href: "/about" },
  { label: "Patron Saint", href: "/about/patron-saint" },
  { label: "Clergy", href: "/about/clergy" },
  { label: "Pastor's Message", href: "/about/pastors-message" },
  { label: "Confession", href: "/about/confession" },
  { label: "Russian Club", href: "/about/russian-club" },
];

export const faithNav: NavItem[] = [
  { label: "Introduction", href: "/our-faith" },
  { label: "House of God", href: "/our-faith/house-of-god" },
  { label: "Worship", href: "/our-faith/worship" },
  { label: "Liturgy", href: "/our-faith/liturgy" },
  { label: "The Sacraments", href: "/our-faith/sacraments" },
  { label: "Special Services", href: "/our-faith/special-services" },
  { label: "Teachings", href: "/our-faith/teachings" },
  { label: "Spirituality", href: "/our-faith/spirituality" },
  { label: "History", href: "/our-faith/history" },
  { label: "The Church", href: "/our-faith/the-church" },
  { label: "Links", href: "/our-faith/links" },
];

export const parishLifeNav: NavItem[] = [
  { label: "Service Schedule", href: "/parish-life/service-schedule" },
  { label: "Bulletins", href: "/parish-life/bulletins" },
  { label: "Sermon Videos", href: "/parish-life/sermons" },
  { label: "St. Mary's Kitchen", href: "/parish-life/kitchen" },
  { label: "Coffee Hour", href: "/parish-life/coffee-hour" },
];
