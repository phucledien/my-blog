import type { StaticImageData } from "next/image";

import stackbackIcon from "../assets/projects/stackback/icon.png";

import hiddenIcon from "../assets/projects/hidden/icon.png";
import hiddenScreen1 from "../assets/projects/hidden/screen1.webp";
import hiddenTutorial from "../assets/projects/hidden/tutorial.gif";
import saigonCover from "../assets/projects/saigon-town/cover.png";
import saigonBoard from "../assets/projects/saigon-town/board.png";
import saigonCoffee from "../assets/projects/saigon-town/shop-coffee.png";
import saigonBanhmi from "../assets/projects/saigon-town/shop-banhmi.png";
import saigonPho from "../assets/projects/saigon-town/shop-pho.png";
import saigonFlowers from "../assets/projects/saigon-town/shop-flowers.png";
import saigonTailor from "../assets/projects/saigon-town/shop-tailor.png";
import saigonGrocery from "../assets/projects/saigon-town/shop-grocery.png";
import skillsTitle from "../assets/projects/skills/title.jpg";
import skillsPlay from "../assets/projects/skills/play.gif";
import skillsHome from "../assets/projects/skills/home.jpg";
import skillsArmory from "../assets/projects/skills/armory.jpg";
import skillsPaywall from "../assets/projects/skills/paywall.jpg";
import skillsRanks from "../assets/projects/skills/ranks.jpg";
import skillsBusted from "../assets/projects/skills/busted.jpg";
import localizeBanner from "../assets/projects/switch-localize/banner.jpg";
import localizeShowcase from "../assets/projects/switch-localize/showcase.jpg";
import beansIcon from "../assets/projects/beans/icon.webp";
import beansReflection from "../assets/projects/beans/reflection.webp";
import beansWelcome from "../assets/projects/beans/welcome.webp";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  year?: string;
  role: string;
  stack: string[];
  repo?: string;
  homepage?: string;
  homepageLabel?: string;
  // Small square artwork shown next to the title.
  icon?: StaticImageData;
  cover: ProjectImage;
  // "contain" for artwork that must not be cropped, like window screenshots.
  coverFit?: "cover" | "contain";
  // Used for link previews; must be close to 1.91:1. Falls back to the generated card.
  ogImage?: StaticImageData;
  intro: string[];
  highlights: string[];
  gallery: ProjectImage[];
  // Tiny sprites rendered as a row, e.g. game pieces.
  sprites?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "stackback",
    title: "Stackback",
    tagline: "Solve a new sum while remembering an earlier answer.",
    year: "2026",
    role: "Creator",
    stack: ["Godot", "GDScript", "iOS"],
    homepage: "/projects/stackback/support",
    homepageLabel: "Get support",
    icon: stackbackIcon,
    cover: {
      src: stackbackIcon,
      alt: "Stackback app icon",
    },
    coverFit: "contain",
    intro: [
      "Stackback combines arithmetic with an N-back memory challenge: solve each card, remember its answer, then answer the card from N turns ago.",
      "Choose a 2- or 5-minute Daily Training session or climb through increasingly demanding floors. Write answers with your finger or use the keypad. Core play and handwriting recognition work on your device.",
      "Optional Game Center leaderboards let you compare eligible Climb scores. TestFlight beta 0.5.0 (202610041156) includes sandbox purchases and optional adult-only Google sample ads. Production billing and advertising remain disabled.",
    ],
    highlights: [
      "Short Daily Training sessions and endless Climb",
      "On-device handwriting recognition with a keypad alternative",
      "Offline core play with local progress and inventory",
      "Open and Fair Climb with optional Game Center leaderboards",
    ],
    gallery: [],
  },
  {
    id: "saigon-town",
    title: "Saigon Town",
    tagline: "Pull up a stool. There's a deal to make.",
    year: "2026",
    role: "Creator",
    stack: ["TypeScript", "Vite", "Aseprite"],
    repo: "https://github.com/phucledien/saigon-town",
    homepage: "https://saigontown.phucld.com",
    cover: {
      src: saigonCover,
      alt: "Saigon Town: Vietnamese storefronts, colorful plastic stools, and a neighborhood ready for business",
    },
    ogImage: saigonCover,
    intro: [
      "A browser board game about opening shops, bargaining with neighbors, and finding the right corner of a fictional Sài Gòn. It's inspired by Chinatown, drawn entirely in original Aseprite pixel art, and playable in Vietnamese or English.",
      "You play against Linh, Minh, and An across 72 addresses in six neighborhood blocks. Every year you receive plots, trade cash and shop pieces, build, then collect income. Whoever has the most cash after the sixth payday wins.",
    ],
    highlights: [
      "Six storefronts: cà phê, bánh mì, phở, flowers, tailoring, and groceries",
      "Visual bargaining with counteroffers and bilingual reactions from your neighbors",
      "Street life: Ninja Lead riders, buses, pedestrians, and shop-opening animations",
      "Locally synthesized lo-fi music and sound effects, with no audio files shipped",
      "Every raster asset has an editable Aseprite source plus Lua export scripts",
    ],
    sprites: [
      { src: saigonCoffee, alt: "Cà phê shop" },
      { src: saigonBanhmi, alt: "Bánh mì shop" },
      { src: saigonPho, alt: "Phở shop" },
      { src: saigonFlowers, alt: "Florist" },
      { src: saigonTailor, alt: "Tailor" },
      { src: saigonGrocery, alt: "Grocery" },
    ],
    gallery: [
      {
        src: saigonBoard,
        alt: "The Saigon Town city board with six neighborhood blocks",
        caption: "72 addresses across six irregular neighborhood blocks",
      },
    ],
  },
  {
    id: "skills",
    title: "Agent Skills",
    tagline: "Agent skills for turning ideas into things you can play, read, and ship.",
    year: "2026",
    role: "Creator",
    stack: ["Agent Skills", "Claude Code", "JavaScript"],
    repo: "https://github.com/phucledien/skills",
    homepage: "https://skills.sh/phucledien/skills/game-prototype-bible",
    cover: {
      src: skillsTitle,
      alt: "Title screen of Lane Thief, a game prototype generated by the game-prototype-bible skill",
    },
    ogImage: skillsTitle,
    intro: [
      "A collection of agent skills that works with Claude Code, Codex, Cursor and other agents. The first one, game-prototype-bible, turns a game idea (or \"a game like X, but ours\") into a single page: a playable browser prototype of every screen on top, and a detailed design bible underneath.",
      "The showcase below is Lane Thief, a last-hit timing game where your own allies compete with you for the kill. The characters, animation, UI, effects, and music were all generated in code by the skill.",
    ],
    highlights: [
      "Covers title, menu, shop, IAP store, paywall, gameplay waves, win/lose, and leaderboards",
      "Skeletal-rig characters with sprite sheets sampled from the game's own code",
      "Design bible tables (loop, economy, items, crafting, audio) generated from the prototype",
      "Installs as a Claude Code plugin or through skills.sh for any agent",
    ],
    gallery: [
      { src: skillsPlay, alt: "Lane Thief gameplay", caption: "Gameplay, all generated in code" },
      { src: skillsHome, alt: "Lane Thief home screen", caption: "Home: play, armory, store, pass, daily, ranks" },
      { src: skillsArmory, alt: "Lane Thief armory screen", caption: "Armory: buy parts, craft, upgrade, equip" },
      { src: skillsPaywall, alt: "Lane Thief paywall screen", caption: "Paywall: plans, trial terms, restore, honest close" },
      { src: skillsRanks, alt: "Lane Thief ranks screen", caption: "Ranks: weekly board and a fixed-kit challenge" },
      { src: skillsBusted, alt: "Lane Thief lose screen", caption: "Busted: the hero kneels under a rain cloud" },
    ],
  },
  {
    id: "switch-localize",
    title: "Switch Localize",
    tagline: "Every line. Every menu. Even the tiny stamp.",
    year: "2026",
    role: "Creator",
    stack: ["Agent Skills", "Python"],
    repo: "https://github.com/phucledien/switch-localize-skill",
    homepage: "https://skills.sh/phucledien/switch-localize-skill",
    cover: {
      src: localizeBanner,
      alt: "Switch Localize banner: pixel-art night scene with the tagline Every line. Every menu. Even the tiny stamp.",
    },
    ogImage: localizeBanner,
    intro: [
      "An agent skill for the whole fan-localization workflow: private setup, extraction, dialogue, fonts, sprites, and a verified patch.",
      "Translating a script is only part of translating a game. The skill teaches an agent to find the words players actually see (choices, names, save screens, selected buttons, tiny stamps, atlas sprites, captions hidden inside images) and to pair editorial work like voice and terminology with format-aware engineering like control codes, glyph coverage, and round trips.",
    ],
    highlights: [
      "Scene-by-scene translation that keeps speaker voice, variables, and line breaks",
      "Hunts image-based text across texture atlases, menus, HUD, and every interaction state",
      "Checks glyph coverage for the target language, including Vietnamese diacritics",
      "Ends with a reproducible, hashed patch plus install and rollback instructions",
    ],
    gallery: [
      {
        src: localizeShowcase,
        alt: "Fictional before-and-after examples: a tiny stamp, menu sprites, and contextual dialogue",
        caption: "Fictional before/after demos generated for the repo, not real game assets",
      },
    ],
  },
  {
    id: "beans",
    title: "Beans",
    tagline: "A quiet space for daily reflection and small acts of kindness.",
    role: "Volunteer contributor",
    stack: [],
    homepage: "https://apps.apple.com/vn/app/beans/id1542925956",
    homepageLabel: "View on the App Store",
    icon: beansIcon,
    cover: {
      src: beansIcon,
      alt: "Beans app icon: two smiling beans in a heart with a cross",
    },
    coverFit: "contain",
    intro: [
      "I contributed to Beans as a volunteer. It's an iPhone lifestyle app for Catholics, Christians, and anyone seeking time to reflect and reconnect with themselves, other people, and God.",
      "A short end-of-day journal records moments of joy and things to work on. Those reflections become an examination-of-conscience list, while 24-hour challenges encourage small acts of kindness for yourself and others.",
    ],
    highlights: [
      "Daily reflection and journaling in just a few minutes",
      "An examination-of-conscience list to help prepare for confession",
      "24-hour challenges for random acts of kindness",
      "Good deeds and reflections represented as beans in a personal garden",
    ],
    gallery: [
      {
        src: beansReflection,
        alt: "Beans daily reflection screen with self, others, and God categories and a 24-hour challenge",
        caption: "Daily reflection, from the official App Store listing",
      },
      {
        src: beansWelcome,
        alt: "Beans welcome screen with its smiling bean logo",
        caption: "Welcome screen, from the official App Store listing",
      },
    ],
  },
  {
    id: "hidden",
    title: "Hidden Bar",
    tagline: "An ultra-light macOS utility that hides menu bar items.",
    year: "2019",
    role: "Top contributor · Dwarves Foundation",
    stack: ["Swift", "AppKit", "macOS"],
    repo: "https://github.com/dwarvesf/hidden",
    homepage: "https://apps.apple.com/app/hidden-bar/id1452453066",
    icon: hiddenIcon,
    cover: {
      src: hiddenScreen1,
      alt: "Hidden Bar preferences window showing hidden and shown menu bar sections",
    },
    coverFit: "contain",
    intro: [
      "Hidden Bar lets you hide menu bar items to give your Mac a cleaner look. Hold ⌘ and drag icons to the left of the separator, then click the arrow to tuck them away.",
      "Built as open source at Dwarves Foundation, it's on the Mac App Store and Homebrew and has grown to around 15k stars on GitHub. I'm its top contributor.",
    ],
    highlights: [
      "Free on the Mac App Store or through Homebrew: brew install --cask hiddenbar",
      "Global shortcut and optional auto-hide after a delay",
      "Tiny footprint, notarized builds, and MIT licensed",
    ],
    gallery: [
      { src: hiddenTutorial, alt: "Animation of hiding menu bar items with Hidden Bar", caption: "⌘ + drag to arrange, click the arrow to hide" },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
