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
  id?: string;
  shortLabel: string;
  name: string;
  summary?: string;
  experience?: string;
  iconFile?: string;
  iconStyle?: 'symbol' | 'wide';
};

export const technologyIconDirectory = 'assets/technology-icons';

export const heroTechnologies: Technology[] = [
  {
    id: 'unity',
    shortLabel: 'U',
    name: 'Unity',
    summary: 'Generic game engine used for real-time gameplay development and tooling.',
    experience:
      'Systems and gameplay programmer. Built transactional reward system, bootstrap system, save system with versioned migration behavior, and backend integration for UGC.',
    iconFile: 'official/unity.svg',
    iconStyle: 'wide',
  },
  {
    id: 'csharp',
    shortLabel: 'C#',
    name: 'C#',
    summary: 'Primary language for Unity gameplay systems, tooling, and runtime architecture.',
    experience: 'TODO: Add role-specific C# work experience details from LinkedIn.',
    iconFile: 'official/csharp.svg',
  },
  {
    id: 'perforce',
    shortLabel: 'P4',
    name: 'Perforce',
    summary: 'Version control platform commonly used for large game development pipelines.',
    experience: 'TODO: Add Perforce workflow ownership details from LinkedIn.',
    iconFile: 'official/perforce.svg',
    iconStyle: 'wide',
  },
  {
    id: 'steam',
    shortLabel: 'S',
    name: 'Steam',
    summary: 'PC game distribution and platform services ecosystem.',
    experience: 'TODO: Add Steam integration and release workflow details from LinkedIn.',
    iconFile: 'official/steam.png',
    iconStyle: 'wide',
  },
  {
    id: 'git',
    shortLabel: 'G',
    name: 'Git',
    summary: 'Distributed version control system for code collaboration and release workflows.',
    experience: 'TODO: Add Git branching and delivery practices from LinkedIn.',
    iconFile: 'official/git.svg',
  },
  {
    id: 'docker',
    shortLabel: 'D',
    name: 'Docker',
    summary: 'Container tooling used for local development parity and service packaging.',
    experience: 'TODO: Add Docker-specific project usage details from LinkedIn.',
    iconFile: 'official/docker.svg',
  },
  {
    id: 'dotnet',
    shortLabel: '.N',
    name: '.NET',
    summary: 'Application platform used for backend, tooling, and service development.',
    experience: 'TODO: Add .NET service and tooling experience from LinkedIn.',
    iconFile: 'official/dotnet.svg',
    iconStyle: 'wide',
  },
  {
    id: 'go',
    shortLabel: 'Go',
    name: 'Go',
    summary: 'Compiled language suited for performant backend systems and APIs.',
    experience: 'TODO: Add Go backend implementation details from LinkedIn.',
    iconFile: 'official/go.svg',
    iconStyle: 'wide',
  },
  {
    id: 'java',
    shortLabel: 'J',
    name: 'Java',
    summary: 'General-purpose language used across enterprise backend integrations.',
    experience: 'TODO: Add Java integration and platform work from LinkedIn.',
  },
  {
    id: 'mulesoft',
    shortLabel: 'M',
    name: 'MuleSoft',
    summary: 'Integration platform for connecting services, APIs, and enterprise systems.',
    experience: 'TODO: Add MuleSoft delivery and integration outcomes from LinkedIn.',
  },
  {
    id: 'windmill',
    shortLabel: 'W',
    name: 'Windmill',
    summary: 'Workflow automation platform for internal tooling and operations.',
    experience: 'TODO: Add Windmill automation ownership details from LinkedIn.',
    iconFile: 'official/windmill.svg',
  },
];
