export const homeHero = {
  eyebrow: 'Lead Game Programmer',
  title:
    'Building production game systems in Unity with strengths in systems programming and backend multiplayer.',
  intro:
    'I am Bennet Vella, a lead game programmer building production game systems in Unity. My background spans gameplay architecture, systems-level technical work, and backend multiplayer capabilities, with earlier backend and integration experience still shaping how I structure tools and delivery.',
  supportingPoints: [
    'Industry experience across gameplay systems, technical delivery, and cross-discipline collaboration.',
    'A foundation across backend services, integrations, and operational software that carries into multiplayer-aware game development.',
  ],
};

export const heroHighlights = [
  {
    label: 'Current focus',
    value: 'Lead programming, Unity systems, delivery quality',
  },
  {
    label: 'Engineering lens',
    value: 'Gameplay, systems programming, backend multiplayer, tools',
  },
  {
    label: 'Based in',
    value: 'Malta',
  },
];

export type Technology = {
  shortLabel: string;
  name: string;
  iconFile?: string;
};

export const technologyIconDirectory = 'assets/technology-icons';

export const heroTechnologies: Technology[] = [
  { shortLabel: 'U', name: 'Unity' },
  { shortLabel: 'C#', name: 'C#' },
  { shortLabel: 'P4', name: 'Perforce' },
  { shortLabel: 'S', name: 'Steam', iconFile: 'official/steam.png' },
  { shortLabel: 'G', name: 'Git' },
  { shortLabel: 'D', name: 'Docker' },
  { shortLabel: '.N', name: '.NET' },
  { shortLabel: 'Go', name: 'Go' },
  { shortLabel: 'J', name: 'Java' },
  { shortLabel: 'M', name: 'MuleSoft' },
  { shortLabel: 'W', name: 'Windmill' },
];
