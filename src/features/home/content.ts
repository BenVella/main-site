export const homeHero = {
  eyebrow: 'Lead game programmer',
  title: 'Unity game development shaped by a backend engineering foundation.',
  intro:
    'I am Bennet Vella, a lead game programmer building production game systems in Unity. My earlier backend and integration work still informs how I structure tools, services, and maintainable delivery.',
  supportingPoints: [
    'Industry experience across gameplay systems, technical delivery, and cross-discipline collaboration.',
    'A backend-first foundation spanning APIs, integrations, and operational software before moving deeper into game development.',
  ],
};

export const heroHighlights = [
  {
    label: 'Current focus',
    value: 'Lead programming, Unity systems, delivery quality',
  },
  {
    label: 'Engineering lens',
    value: 'Gameplay, tools, backend workflows, integrations',
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
  { shortLabel: 'G', name: 'Git' },
  { shortLabel: 'D', name: 'Docker' },
  { shortLabel: 'M', name: 'MuleSoft' },
  { shortLabel: '.N', name: '.NET' },
  { shortLabel: 'W', name: 'Windmill' },
];
