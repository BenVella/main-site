export const homeHero = {
  eyebrow: 'Lead Game Programmer',
  title: 'Lead game programmer for production Unity systems and multiplayer backend.',
  intro:
    'I build production Unity game systems with a focus on gameplay architecture and multiplayer backends. My backend and integration background helps me deliver reliable tools and cross-discipline execution.',
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
  iconStyle?: 'symbol' | 'wide';
};

export const technologyIconDirectory = 'assets/technology-icons';

export const heroTechnologies: Technology[] = [
  { shortLabel: 'U', name: 'Unity', iconFile: 'official/unity.svg', iconStyle: 'wide' },
  { shortLabel: 'C#', name: 'C#', iconFile: 'official/csharp.svg' },
  { shortLabel: 'P4', name: 'Perforce', iconFile: 'official/perforce.svg', iconStyle: 'wide' },
  { shortLabel: 'S', name: 'Steam', iconFile: 'official/steam.png', iconStyle: 'wide' },
  { shortLabel: 'G', name: 'Git', iconFile: 'official/git.svg' },
  { shortLabel: 'D', name: 'Docker', iconFile: 'official/docker.svg' },
  { shortLabel: '.N', name: '.NET', iconFile: 'official/dotnet.svg', iconStyle: 'wide' },
  { shortLabel: 'Go', name: 'Go', iconFile: 'official/go.svg', iconStyle: 'wide' },
  { shortLabel: 'J', name: 'Java' },
  { shortLabel: 'M', name: 'MuleSoft' },
  { shortLabel: 'W', name: 'Windmill', iconFile: 'official/windmill.svg' },
];
