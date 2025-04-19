import logo from "./assets/images/minecraft-logo.png";
import linkedIn from "./assets/svg/linkedIn.svg";
import instagram from "./assets/svg/instagram.svg";
import tiktok from "./assets/svg/tiktok.svg";
export const footer = {
  logo,
  logoAlt: "Oddity Emporium logo",
  titleAlt: "Oddity Emporium",
  description: "Join us on our website!",
  button: "Login",
  buttona: "About us",
  question: "Questions/answers",
  questions: [
    "Are your items safe to use?",
    "Can I return an invisible item?",
    "What if my purchase disappears?",
    "Can I request a oddity?",
    "What happens if my item starts whispering?",
  ],
  shopTitle: "Shop",
  shop: [
    { name: "Browse category", href: "/shop" },
    { name: "Search items", href: "/shop" },
    { name: "Your shopping cart", href: "/shop" },
    { name: "Rest API", href: import.meta.env.VITE_SHOP_API },
  ],
  conc: "Contact",
  contactdesc: "You can use form or just click below and go to social media",
  images: [
    { alt: "LinkedIn", img: linkedIn, href: "https://www.linkedin.com/" },
    { alt: "Instagram", img: instagram, href: "https://www.instagram.com/" },
    { alt: "TikTok", img: tiktok, href: "https://www.tiktok.com/" },
  ],
  footerAuthor: "2025 Capyright: Minecraft Server List",
  footerCreated: "Created by: ER Studio",
};

export const slogans = [
  "TO TEST YOUR SKILLS",
  "TO MEET NEW FRIENDS",
  "TO BUILD YOUR WORLD",
  "TO START YOUR ADVENTURE",
  "TO JOIN THE FUN",
  "TO RULE THE BLOCKS",
  "TO SHOW YOUR CREATIVITY",
  "TO CONQUER CHALLENGES",
  "TO TEAM UP OR GO SOLO",
  "TO EXPLORE ENDLESSLY",
  "TO BE A #MITOMAN",
];
import tnt from "../src/assets/images/tnt-anim.png";
import dragon from "../src/assets/images/dragon-anim.png";
export const loading = [tnt, dragon];
