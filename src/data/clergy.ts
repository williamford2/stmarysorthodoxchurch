export interface Clergy {
  name: string;
  title: string;
  role: string;
  bio: string;
  image?: string;
}

export const clergy: Clergy[] = [
  {
    name: "Rev. Alexander Hurtsellers",
    title: "Father Alexander",
    role: "Pastor",
    bio: "Rev. Alexander Hurtsellers serves as the pastor of St. Mary's Orthodox Christian Church in Endicott, New York, under the omophor of Metropolitan Gregory of Nyssa and the American Carpatho-Russian Orthodox Diocese.",
    image: "/images/clergy/rev-alexander-hurtsellers.jpg",
  },
  {
    name: "Metropolitan Gregory of Nyssa",
    title: "Metropolitan Gregory",
    role: "Diocesan Bishop",
    bio: "His Eminence Metropolitan Gregory of Nyssa is the ruling bishop of the American Carpatho-Russian Orthodox Diocese of the U.S.A., headquartered at 312 Garfield Street, Johnstown, PA 15906. He was consecrated Bishop and enthroned on November 27, 2012, and elevated to the rank of Metropolitan in September 2018. He oversees Christ the Saviour Seminary in Johnstown, PA, and Camp Nazareth Youth and Retreat Center in Mercer, PA. His Name's Day is November 14/27 (St. Gregory Palamas).",
    image: "/images/clergy/metropolitan-gregory.jpg",
  },
];
