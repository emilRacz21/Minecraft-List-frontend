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
    title: `Are your items safe to use?`,
    description: `Absolutely. While some of our items may seem unusual, 
      they are carefully crafted with the highest standards 
      of safety in mind. Just remember: always handle with curiosity.`,
  },
  {
    title: `Can I return an invisible item?`,
    description: `Invisible items are tricky, but we'll work with you. If you feel like 
      it's not meeting your expectations, contact us and we'll find a way to 
      make things right—just be sure to describe it as best you can.`,
  },
  {
    title: `What if my purchase disappears?`,
    description: `If an item mysteriously vanishes, don't panic. It's likely just exploring other dimensions. 
      Reach out to us, and we'll help guide it back to your world.`,
  },
  {
    title: `Can I request a custom oddity?`,
    description: `Yes! We offer bespoke oddities for the truly adventurous. Send us your wildest ideas, 
      and we'll craft something uniquely suited to your needs—or perhaps your unspoken desires.`,
  },
  {
    title: `What happens if my item whispering?`,
    description: `If your item starts whispering, you're in for an adventure. Listen closely—sometimes 
      it's simply imparting wisdom. If it becomes too chatty, feel free to let us know, and we'll help restore quiet.`,
  },
];
