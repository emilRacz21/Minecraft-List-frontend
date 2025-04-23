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
import creeper from "../src/assets/images/creeper-anim.png";
import crafting from "../src/assets/images/crafting-anim.png";
import piglin from "../src/assets/images/piglin-anim.png";
import steve from "../src/assets/images/steve-anim.png";
export const loading = [tnt, dragon, creeper, crafting, piglin, steve];

import sword_diamond from "../src/assets/images/sword_diamond.webp";
import pickaxe_diamond from "../src/assets/images/pickaxe_diamond.webp";
import chestplate_diamond from "../src/assets/images/chestplate_diamond.webp";
import axe_diamond from "../src/assets/images/axe_diamond.webp";
import sword_golden from "../src/assets/images/sword_golden.webp";
import axe_golden from "../src/assets/images/axe_golden.webp";
import chestplate_golden from "../src/assets/images/chestplate_golden.webp";
import sword_netherite from "../src/assets/images/sword_netherite.webp";
import axe_netherite from "../src/assets/images/axe_netherite.webp";
import chestplate_netherite from "../src/assets/images/chestplate_netherite.webp";

export const login = {
  img: [
    sword_diamond,
    pickaxe_diamond,
    chestplate_diamond,
    axe_diamond,
    sword_golden,
    axe_golden,
    chestplate_golden,
    sword_netherite,
    axe_netherite,
    chestplate_netherite,
  ],
  alt: "Key icon, login",
  title: "Please log in to your account!",
  userLabel: {
    title: "Your username",
    type: "text",
  },
  passwordLabel: {
    title: "Your password",
    type: "password",
  },
  desc: "Create account",
  descA: "*login or password is incorrect!",
  button: "Log in",
};

export const dialogContents = [
  {
    title: `Are all servers on the list active?`,
    description: `We do our best to keep the list up to date, but hey—Minecraft servers can vanish like endermen in the rain. If you stumble upon a quiet one, let us know and we'll investigate.`,
  },
  {
    title: `How can I add my server to the list?`,
    description: `Easy! Just click "Add Server," fill in a few details, and voilà—your portal is live. Make your description count—think of it as an invitation to a new world.`,
  },
  {
    title: `Can I rate other servers?`,
    description: `Absolutely. Your feedback helps fellow adventurers find the perfect realm. Vote, leave comments, and if a server sparks joy—let it know with a glowing review.`,
  },
  {
    title: `Server isn’t showing on the page?`,
    description: `Our homepage highlights the most popular and highly-rated servers—like a leaderboard of legends. Want to be seen? Rally your players and let those votes roll in!`,
  },
  {
    title: `What if a server breaks the rules?`,
    description: `If a server seems off—breaking rules, acting shady, or running suspicious plugins—report it. We protect our community like a sacred totem. Justice will be swift (and pixelated).`,
  },
];
