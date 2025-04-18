import logo from "/public/images/minecraft-logo.png";
import linkedIn from "./assets/svg/linkedin.svg";
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
  footerAuthor: "2024 Capyright: Oddity Emporium",
  footerCreated: "Created by: ER Studio",
};
