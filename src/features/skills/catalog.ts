import { allTechnologies } from '@/features/home/content';

export type SkillCategory = {
  id: string;
  title: string;
  intro: string;
  collage: Array<{ src: string; alt: string; caption?: string }>;
  skillIds: string[];
  usageLabel?: string;
  whereUsed: Array<{
    label: string;
    href?: string;
    description?: string;
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'game-client-development',
    title: 'Game Client Development',
    intro:
      'Production Unity client engineering spanning gameplay features, engine-facing systems, rendering-sensitive workflows, and platform integration.',
    collage: [
      {
        src: 'images/titles/subwaysurfers_arcade.jpg',
        alt: 'Subway Surfers+ artwork highlighting production Unity client work.',
        caption: 'Lead-level Unity ownership on production gameplay systems and client architecture.',
      },
      {
        src: 'images/projects/utimate_sackboy.jpg',
        alt: 'Ultimate Sackboy gameplay visual associated with package and cloud save work.',
        caption: 'Package engineering, cloud save, and bootstrap flow improvements for a shipped title.',
      },
      {
        src: 'images/projects/angry_birds.jpg',
        alt: 'Angry Birds: Fury Road artwork reflecting systems and camera engineering.',
        caption: 'Gameplay and camera-side engineering work in production mobile delivery contexts.',
      },
    ],
    skillIds: ['unity', 'csharp', 'steam'],
    usageLabel: 'Key areas',
    whereUsed: [
      {
        label: 'Production Unity systems',
        description: 'Gameplay, camera, package, and runtime work for shipped mobile titles.',
      },
      {
        label: 'Client-service features',
        description: 'Authentication, UGC, cloud save, and bootstrap flows across gameplay-adjacent services.',
      },
      {
        label: 'Platform integration',
        description: 'Release-minded client work with Steam, store, and service connectivity constraints.',
      },
      {
        label: 'Performance-minded R&D',
        description: 'Shaders, mesh generation, renderer experiments, and data-oriented runtime patterns.',
      },
    ],
  },
  {
    id: 'backend-service-development',
    title: 'Backend & Service Development',
    intro:
      'Service-side delivery across gameplay-adjacent backend APIs, authentication and commerce integration, and resilient storage/upload pipelines.',
    collage: [
      {
        src: 'images/projects/cloud-save-platform.svg',
        alt: 'Cloud Save Platform architecture artwork for backend service engineering.',
        caption: 'Signed upload flows and service implementation built around operational backend constraints.',
      },
      {
        src: 'images/projects/firebase-ugc-platform.svg',
        alt: 'Firebase UGC platform illustration for backend and auth hardening work.',
        caption: 'Authentication hardening and storage reliability for user-generated content pipelines.',
      },
      {
        src: 'images/skills/openapi-green-signal.svg',
        alt: 'OpenAPI green signal artwork representing API contract-driven service delivery.',
        caption: 'Contract-first backend work that keeps client and service boundaries explicit.',
      },
    ],
    skillIds: ['go', 'java', 'dotnet', 'openapi'],
    usageLabel: 'Key areas',
    whereUsed: [
      {
        label: 'Steam auth and purchasing',
        description: 'Platform authentication and purchase service integration for PC release support.',
      },
      {
        label: 'UGC services',
        description: 'User-generated content flows with authentication, storage, and reliability hardening.',
      },
      {
        label: 'App Store Connect integrations',
        description: 'Async leaderboard and challenge flows tied into app store service boundaries.',
      },
      {
        label: 'Contract-led service APIs',
        description: 'OpenAPI-guided backend work for clear client, service, and storage handoffs.',
      },
    ],
  },
  {
    id: 'cloud-integration',
    title: 'Cloud Integration',
    intro:
      'Enterprise and gameplay-adjacent integration delivery focused on data movement, orchestration layers, transformation logic, and reliability.',
    collage: [
      {
        src: 'images/skills/mulesoft-flow-workbench.svg',
        alt: 'MuleSoft flow workbench styled diagram showcasing integration components and flow references.',
        caption: 'Layered flow design for system, process, and application integration responsibilities.',
      },
      {
        src: 'images/skills/mulesoft-flow-tests.svg',
        alt: 'Mule flow testing styled diagram highlighting mock, spy, and response validation behavior.',
        caption: 'Production-minded testing around mocks, spies, and message transformations.',
      },
      {
        src: 'images/skills/openapi-green-signal.svg',
        alt: 'OpenAPI green logo visual emphasizing API-first integration contracts.',
        caption: 'Clear contracts that reduce ambiguity between integration points and downstream consumers.',
      },
    ],
    skillIds: ['mulesoft'],
    usageLabel: 'Key areas',
    whereUsed: [
      {
        label: 'Large-scale, high-load capability',
        description: 'Integration patterns designed around throughput, reliability, and production pressure.',
      },
      {
        label: 'Data transformation',
        description: 'Mapping, validation, and message-shaping work across enterprise payloads.',
      },
      {
        label: 'Client integration layers',
        description: 'Application-facing integration points that keep consumer contracts clear.',
      },
      {
        label: 'Business and warehouse layers',
        description: 'Process, system, and data warehousing paths for multi-layer integration flows.',
      },
    ],
  },
  {
    id: 'devops-platform-operations',
    title: 'DevOps & Platform Operations',
    intro:
      'Operational engineering for deployability and reliability, from containerized single-VM workflows to Kubernetes Helm-driven platform rollouts.',
    collage: [
      {
        src: 'images/projects/Hero_Banner_Lemmings-1920x1080-1.jpg',
        alt: 'Lemmings banner associated with backend DevOps support and operations work.',
        caption: 'Operational support for live backend environments tied to shipped game services.',
      },
      {
        src: 'images/projects/cloud-save-platform.svg',
        alt: 'Cloud service deployment visual for containerized backend operations.',
        caption: 'Containerized service delivery with repeatable local and deployment workflows.',
      },
      {
        src: 'images/projects/cloud-integrations-data-pipelines.svg',
        alt: 'Pipeline artwork linked to analytics and workflow modernization support.',
        caption: 'Pipeline maintenance and rollout work focused on reliability and operational clarity.',
      },
    ],
    skillIds: ['docker', 'kubernetes', 'helm', 'windmill'],
    usageLabel: 'Key areas',
    whereUsed: [
      {
        label: 'Automated testing and validation',
        description: 'Checks and validation gates that keep deployment readiness visible.',
      },
      {
        label: 'Multi-environment support',
        description: 'Repeatable local, staging, and production-oriented runtime patterns.',
      },
      {
        label: 'Deployment operations',
        description: 'Docker, Kubernetes, and Helm workflows for reliable service rollout.',
      },
      {
        label: 'Monitoring alerts',
        description: 'Operational alerting paths that make production issues easier to spot and triage.',
      },
    ],
  },
  {
    id: 'git-enthusiast',
    title: 'Git Enthusiast',
    intro:
      'Git evangelist and workshop host for Git and GitHub, focused on practical workflows, repository governance, clean history, and team enablement.',
    collage: [
      {
        src: 'images/skills/gitflow-1.png',
        alt: 'Git flow diagram used as the backdrop for Git workflow and process guidance.',
        caption: 'A practical branching model for explaining how feature, develop, and release flows stay understandable.',
      },
    ],
    skillIds: ['git'],
    usageLabel: 'Key areas',
    whereUsed: [
      {
        label: 'Lightweight Git workflows',
        description: 'Practical, robust setups that scale from small teams to larger delivery groups.',
      },
      {
        label: 'Repo setup for security',
        description: 'Branch protection, rulesets, and CODEOWNERS patterns that make safeguards explicit.',
      },
      {
        label: 'Commit hygiene',
        description: 'Judicious squash vs true merge choices, rebasing, and conflict resolution support.',
      },
      {
        label: 'Coaching with workshops',
        description: 'Training power users and everyday contributors on Git and GitHub workflows.',
      },
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
