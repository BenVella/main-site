import { allTechnologies } from '@/features/home/content';

export type SkillCategory = {
  id: string;
  title: string;
  intro: string;
  collage: Array<{ src: string; alt: string }>;
  skillIds: string[];
  whereUsed: Array<{
    label: string;
    href?: string;
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'game-client-development',
    title: 'Game Client Development',
    intro:
      'Production Unity client engineering spanning gameplay features, engine-facing systems, rendering-sensitive workflows, and platform integration.',
    collage: [
      { src: 'images/titles/subwaysurfers_arcade.jpg', alt: 'Subway Surfers+ artwork highlighting production Unity client work.' },
      { src: 'images/projects/utimate_sackboy.jpg', alt: 'Ultimate Sackboy gameplay visual associated with package and cloud save work.' },
      { src: 'images/projects/angry_birds.jpg', alt: 'Angry Birds: Fury Road artwork reflecting systems and camera engineering.' },
    ],
    skillIds: ['unity', 'csharp', 'steam'],
    whereUsed: [
      { label: 'Subway Surfers+' },
      { label: 'Lemmings' },
      { label: 'Ultimate Sackboy' },
      { label: 'Angry Birds: Fury Road' },
      { label: 'Unity Package Engineering', href: 'projects/unity-package-engineering' },
      { label: 'Unity Systems Modernization', href: 'projects/unity-systems-modernization' },
    ],
  },
  {
    id: 'backend-service-development',
    title: 'Backend & Service Development',
    intro:
      'Service-side delivery across gameplay-adjacent backend APIs, authentication and commerce integration, and resilient storage/upload pipelines.',
    collage: [
      { src: 'images/projects/cloud-save-platform.svg', alt: 'Cloud Save Platform architecture artwork for backend service engineering.' },
      { src: 'images/projects/firebase-ugc-platform.svg', alt: 'Firebase UGC platform illustration for backend and auth hardening work.' },
      { src: 'images/skills/openapi-green-signal.svg', alt: 'OpenAPI green signal artwork representing API contract-driven service delivery.' },
    ],
    skillIds: ['go', 'java', 'dotnet', 'openapi'],
    whereUsed: [
      { label: 'Cloud Save Platform', href: 'projects/cloud-save-platform-go-aws' },
      { label: 'Firebase UGC Platform Hardening', href: 'projects/firebase-ugc-platform-hardening' },
      { label: 'Cards, the Universe and Everything' },
      { label: 'Subway Surfers+' },
    ],
  },
  {
    id: 'cloud-integration',
    title: 'Cloud Integration',
    intro:
      'Enterprise and gameplay-adjacent integration delivery focused on data movement, orchestration layers, transformation logic, and reliability.',
    collage: [
      { src: 'images/skills/mulesoft-flow-workbench.svg', alt: 'MuleSoft flow workbench styled diagram showcasing integration components and flow references.' },
      { src: 'images/skills/mulesoft-flow-tests.svg', alt: 'Mule flow testing styled diagram highlighting mock, spy, and response validation behavior.' },
      { src: 'images/skills/openapi-green-signal.svg', alt: 'OpenAPI green logo visual emphasizing API-first integration contracts.' },
    ],
    skillIds: ['mulesoft'],
    whereUsed: [
      { label: 'Enterprise/cloud integration work' },
      { label: 'Cloud Integrations & Data Pipelines', href: 'projects/cloud-integrations-data-pipelines' },
    ],
  },
  {
    id: 'devops-platform-operations',
    title: 'DevOps & Platform Operations',
    intro:
      'Operational engineering for deployability and reliability, from containerized single-VM workflows to Kubernetes Helm-driven platform rollouts.',
    collage: [
      { src: 'images/projects/Hero_Banner_Lemmings-1920x1080-1.jpg', alt: 'Lemmings banner associated with backend DevOps support and operations work.' },
      { src: 'images/projects/cloud-save-platform.svg', alt: 'Cloud service deployment visual for containerized backend operations.' },
      { src: 'images/projects/cloud-integrations-data-pipelines.svg', alt: 'Pipeline artwork linked to analytics and workflow modernization support.' },
    ],
    skillIds: ['docker', 'kubernetes', 'helm', 'windmill'],
    whereUsed: [
      { label: 'Lemmings backend DevOps support' },
      { label: 'internal analytics pipeline modernization' },
      { label: 'Cloud Save Platform', href: 'projects/cloud-save-platform-go-aws' },
    ],
  },
  {
    id: 'delivery-tooling-collaboration',
    title: 'Delivery Tooling & Collaboration',
    intro:
      'Practical team delivery through source-control governance, PR-first collaboration patterns, and resilient CI/CD-connected release workflows.',
    collage: [
      { src: 'images/projects/unity-package-engineering.svg', alt: 'Reusable package delivery artwork associated with collaborative engineering practices.' },
      { src: 'images/projects/unity-systems-modernization.svg', alt: 'Modernization visual for collaborative refactor and quality workflows.' },
      { src: 'images/titles/cards-the-universe-and-everything.jpg', alt: 'Cards title art reflecting cross-team release and delivery collaboration.' },
    ],
    skillIds: ['git', 'perforce'],
    whereUsed: [
      { label: 'PR-driven workflows' },
      { label: 'protected branches' },
      { label: 'CI/CD-connected workflows' },
      { label: 'repo recovery / support' },
      { label: 'Perforce streams usage' },
    ],
  },
];

const technologiesById = new Map(allTechnologies.map((technology) => [technology.id, technology]));

export const fullSkillTechnologies = allTechnologies;

export const skillCategoryEntries = skillCategories.map((category) => ({
  ...category,
  skills: category.skillIds
    .map((skillId) => technologiesById.get(skillId))
    .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill)),
}));
