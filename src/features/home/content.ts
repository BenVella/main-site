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
  id?: string;
  shortLabel: string;
  name: string;
  summary?: string;
  experience?: string;
  iconFile?: string;
  iconStyle?: 'symbol' | 'wide';
  trademarkDisclaimer?: string;
};

export const technologyIconDirectory = 'assets/technology-icons';

export const allTechnologies: Technology[] = [
  {
    id: 'unity',
    shortLabel: 'U',
    name: 'Unity',
    summary:
      'Primary engine for shipped mobile titles, with lead-level ownership on Subway Surfers+ client systems and full-stack delivery on Lemmings.',
    experience:
      'Delivered gameplay and runtime systems, including Firebase authentication and UGC integration on Lemmings, plus packaging, cloud save, bootstrap, and logging improvements on Ultimate Sackboy. Personal R&D includes shaders, terrain/mesh generation, renderer-side solving, data-driven workflows, and Unity Job System patterns. Highlights: client systems ownership, UGC hardening, cloud save, package engineering, performance-oriented runtime design.',
    iconFile: 'official/unity-symbol.svg',
    trademarkDisclaimer:
      'Unity is a trademark or registered trademark of Unity Technologies or its affiliates in the U.S. and elsewhere.',
  },
  {
    id: 'csharp',
    shortLabel: 'C#',
    name: 'C#',
    summary:
      'Core language for gameplay systems architecture and production Unity runtime development across mobile projects.',
    experience:
      'Used for package development and maintenance, data-oriented/runtime refactors, and delivery of production gameplay features. Work emphasizes maintainable architecture and shipping reliability in mobile environments. Highlights: gameplay architecture, package maintenance, runtime refactors, production delivery.',
    iconFile: 'official/csharp.svg',
  },
  {
    id: 'perforce',
    shortLabel: 'P4',
    name: 'Perforce',
    summary: 'Daily source control platform for production game development with large binary asset workflows.',
    experience:
      'Regularly used in team delivery pipelines with strong familiarity in streams-based integration and release flow. Applied as part of cross-discipline production cadence where code and content move together. Highlights: daily production use, streams usage, integration flow, release support.',
    iconFile: 'official/perforce.svg',
    iconStyle: 'wide',
  },
  {
    id: 'steam',
    shortLabel: 'S',
    name: 'Steam',
    summary: 'Platform integration experience for PC release workflows and Steam service connectivity.',
    experience:
      'Served as sole backend engineer for the Cards Steam port, implementing Steam authentication and purchasing integration. Work focused on reliable platform-side connectivity and transaction flow support for release. Highlights: Steam auth, purchasing integration, backend delivery, PC port support.',
    iconFile: 'official/steam.png',
    iconStyle: 'wide',
    trademarkDisclaimer:
      'Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
  },
  {
    id: 'git',
    shortLabel: 'G',
    name: 'Git',
    summary: 'Primary VCS for collaborative engineering, release management, and CI/CD-connected workflows.',
    experience:
      'Hands-on with PR-driven processes, protected branches, and delivery pipelines tied to automated checks. Frequently supports repository troubleshooting and recovery during high-pressure delivery windows. Highlights: PR workflows, protected branches, CI/CD integration, repo recovery support.',
    iconFile: 'official/git.svg',
  },
  {
    id: 'docker',
    shortLabel: 'D',
    name: 'Docker',
    summary: 'Containerized backend and developer workflows for consistent local, CI, test, and deployment execution.',
    experience:
      'Used in service packaging and delivery pipelines, including Windmill deployments in Docker Compose single-VM setups. Also applied alongside Kubernetes-based deployments for environment parity and operational repeatability. Highlights: containerized dev flows, CI/test/deploy support, Compose deployments, Windmill operations.',
    iconFile: 'official/docker.svg',
  },
  {
    id: 'dotnet',
    shortLabel: '.N',
    name: '.NET',
    summary: 'Enterprise application and backend/service tooling platform experience.',
    experience:
      'Used for business-facing application development and service-side implementation, including Azure Functions workloads. Work centers on practical integrations and maintainable backend components. Highlights: enterprise apps, backend tooling, service development, Azure Functions.',
    iconFile: 'official/dotnet.svg',
    iconStyle: 'wide',
  },
  {
    id: 'go',
    shortLabel: 'Go',
    name: 'Go',
    summary: 'Contributor to production backend services where Go is used for API and pipeline implementation.',
    experience:
      'Contributes to shared backend features using OpenAPI-driven contracts and AWS S3 signed multipart upload flows. Role is implementation-focused within a broader team-owned service stack. Highlights: team backend contribution, OpenAPI contracts, S3 signed multipart uploads.',
    iconFile: 'official/go.svg',
    iconStyle: 'wide',
  },
  {
    id: 'java',
    shortLabel: 'J',
    name: 'Java',
    summary: 'Used across integration-focused backend work and Steam-related service development.',
    experience:
      'Implemented services with Jersey, built MuleSoft custom connectors, and developed Groovy transformation scripts in Java-centric integration environments. Applied where stable API integration and transformation logic were needed. Highlights: Jersey services, Steam backend work, MuleSoft connectors, Groovy transformations.',
    iconFile: 'official/java.svg',
    trademarkDisclaimer: 'Java is a trademark or registered trademark of Oracle and/or its affiliates.',
  },
  {
    id: 'mulesoft',
    shortLabel: 'M',
    name: 'MuleSoft',
    summary:
      'Integration platform background from high-load ETL and cloud integration environments, including Azure-connected delivery contexts.',
    experience:
      'Built and tested application, process, and system layer components, including custom connector development and transformation flows. Experience includes unit testing and production-minded integration delivery across enterprise systems. Highlights: layered API programming, custom connectors, ETL integration, unit testing.',
    iconFile: 'official/mulesoft.svg',
    trademarkDisclaimer:
      'MuleSoft is a trademark of Salesforce, Inc. and is used here only to identify platform experience.',
  },
  {
    id: 'windmill',
    shortLabel: 'W',
    name: 'Windmill',
    summary: 'Workflow orchestration platform used in modernized internal analytics and automation pipelines.',
    experience:
      'Maintainer of an internal data analytics pipeline modernization effort, focused on workflow reliability and platform operations rather than data-engineering ownership. Deployed and operated in both Kubernetes/Helm and Docker Compose environments. Highlights: pipeline maintenance, workflow orchestration, Kubernetes Helm deploys, Compose deploys.',
    iconFile: 'official/windmill.svg',
  },
  {
    id: 'kubernetes-helm',
    shortLabel: 'K8s',
    name: 'Kubernetes + Helm',
    summary: 'Container orchestration and chart-based deployment experience for internal platform workloads.',
    experience:
      'Used to deploy and manage Windmill-based services through Helm charts in Kubernetes environments. Applied as part of practical operations and release workflows for internal tooling. Highlights: Helm chart deployments, cluster-based operations, environment consistency, release support.',
    iconFile: 'official/kubernetes-helm.svg',
  },
  {
    id: 'openapi',
    shortLabel: 'OA',
    name: 'OpenAPI',
    summary: 'API contract specification used to define and align backend service interfaces.',
    experience:
      'Used in team backend workflows to guide implementation and integration boundaries, including Go service contributions. Supports clearer handoff between client, service, and integration work. Highlights: contract-first API design, backend coordination, integration alignment.',
    iconFile: 'official/openapi.svg',
  },
];

const curatedHeroSkillIds = ['unity', 'csharp', 'go', 'java', 'mulesoft', 'docker', 'git', 'kubernetes-helm'];

export const heroTechnologies = allTechnologies.filter((technology) =>
  curatedHeroSkillIds.includes(technology.id ?? ''),
);
