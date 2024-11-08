import home from "../assets/icons/home.svg?raw";
import briefcase from "../assets/icons/briefcase.svg?raw";
import person from "../assets/icons/person.svg?raw";
import pencil from "../assets/icons/pencil.svg?raw";
import letter from "../assets/icons/letter.svg?raw";
import x from "../assets/icons/x.svg?raw";
import linkedin from "../assets/icons/linkedin.svg?raw";

type NavLink = {
  title: string;
  icon: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    title: "Homepage",
    icon: home,
    href: "/",
  },
  {
    title: "Projects",
    icon: briefcase,
    href: "/projects",
  },
  {
    title: "About",
    icon: person,
    href: "/about",
  },
  {
    title: "Blog",
    icon: pencil,
    href: "/blog",
  },
  {
    title: "Contact",
    icon: letter,
    href: "/contact",
  },
];

export const SOCIAL_LINKS: NavLink[] = [
  {
    title: "X (Twitter)",
    icon: x,
    href: "https://x.com/dreyescabrera_",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/diegoreyescabrera",
  },
];
