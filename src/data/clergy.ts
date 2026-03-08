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
    bio: "His Eminence Metropolitan Gregory of Nyssa is the ruling bishop of the American Carpatho-Russian Orthodox Diocese, headquartered in Johnstown, Pennsylvania.",
    image: "/images/clergy/metropolitan-gregory.jpg",
  },
];
