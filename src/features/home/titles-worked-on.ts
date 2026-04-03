export type WorkedTitle = {
  id: string;
  title: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  tagline: string;
  platform: string;
  role: string;
  contribution: string;
};

// TODO: Replace these placeholder thumbnail paths with final high-quality exports in public/images/titles.
export const workedTitles: WorkedTitle[] = [
  {
    id: 'lemmings',
    title: 'Lemmings',
    thumbnail: {
      src: 'images/titles/lemmings.webp',
      alt: 'Lemmings title artwork thumbnail.',
    },
    tagline: 'Live mobile title, full-stack production support',
    platform: 'Android / iOS',
    role: 'Full-Stack Game Engineer',
    contribution:
      'Maintained a Firebase-backed UGC platform, introduced DevOps testing practices, implemented client reward systems, overhauled data configuration flows, and supported custom Firebase authentication.',
  },
  {
    id: 'subway-surfers-plus',
    title: 'Subway Surfers+',
    thumbnail: {
      src: 'images/titles/subway-surfers-plus.webp',
      alt: 'Subway Surfers+ title artwork thumbnail.',
    },
    tagline: 'Apple Arcade port and platform backend delivery',
    platform: 'Apple Arcade / iOS',
    role: 'Lead Client Engineer, Sole Backend Engineer',
    contribution:
      'Led client engineering for the Apple Arcade port and owned backend work for Apple platform-facing services and release support.',
  },
  {
    id: 'angry-birds-fury-road',
    title: 'Angry Birds: Fury Road',
    thumbnail: {
      src: 'images/titles/angry-birds-fury-road.webp',
      alt: 'Angry Birds: Fury Road title artwork thumbnail.',
    },
    tagline: 'Arcade systems engineering for motion-rig hardware',
    platform: 'Custom Arcade Motion Rig / Windows PC',
    role: 'Systems Engineer',
    contribution:
      'Worked on rig communication, bootstrap flow, save systems, analytics, coin transactions, camera features, and asynchronous performance-focused systems improvements.',
  },
  {
    id: 'ultimate-sackboy',
    title: 'Ultimate Sackboy',
    thumbnail: {
      src: 'images/titles/ultimate-sackboy.webp',
      alt: 'Ultimate Sackboy title artwork thumbnail.',
    },
    tagline: 'Mobile cloud save and reusable client integration',
    platform: 'Android / iOS',
    role: 'Full-Stack Game Engineer',
    contribution:
      'Built cloud save support across backend and Unity client layers, packaged reusable Unity-side integrations, and improved bootstrap and logging systems.',
  },
  {
    id: 'cards-the-universe-and-everything',
    title: 'Cards, the Universe and Everything',
    thumbnail: {
      src: 'images/titles/cards-the-universe-and-everything.webp',
      alt: 'Cards, the Universe and Everything title artwork thumbnail.',
    },
    tagline: 'Steam backend integration and commerce support',
    platform: 'Steam / PC',
    role: 'Backend Engineer',
    contribution:
      'Delivered backend integrations for Steam authentication and purchasing, with limited frontend UI and systems support.',
  },
];
