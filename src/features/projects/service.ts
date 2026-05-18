export type ProjectAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  caption: string;
  period: string;
  role: string;
  company: string;
  featured: boolean;
  image: ProjectAsset;
  gallery?: ProjectAsset[];
  details: {
    summary: string;
    highlights: string[];
    stack: string[];
  };
  links?: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
  {
    slug: 'cloud-save-platform-go-aws',
    title: 'Cloud Save Platform',
    caption:
      'Full-stack cloud save delivery in Go with DynamoDB persistence and AWS S3 multipart upload flows using signed URLs.',
    period: '2023 to present',
    role: 'Game Programmer',
    company: 'Exient',
    featured: true,
    image: {
      src: 'images/projects/cloud-save-platform.svg',
      alt: 'Framed preview artwork representing cloud save architecture and storage pipelines.',
    },
    details: {
      summary:
        'Built a production-minded cloud save capability from the ground up, including service boundaries, data persistence patterns, and secure upload workflows for game content.',
      highlights: [
        'Designed Go service flows for account-bound save state lifecycle management.',
        'Implemented DynamoDB data models for durable player progression storage.',
        'Shipped S3 multipart upload support with signed URL orchestration for secure client uploads.',
      ],
      stack: ['Go', 'DynamoDB', 'AWS S3', 'Signed URLs', 'Backend Architecture'],
    },
  },
  {
    slug: 'unity-package-engineering',
    title: 'Unity Package Engineering',
    caption:
      'Creation and maintenance of reusable Unity packages to improve delivery speed and implementation consistency across teams.',
    period: '2023 to present',
    role: 'Game Programmer',
    company: 'Exient',
    featured: true,
    image: {
      src: 'images/projects/unity-package-engineering.png',
      alt: 'Preview image for Unity Package Engineering work, showing reusable Unity package development.',
    },
    details: {
      summary:
        'Developed and maintained package-level Unity tooling to reduce repeated implementation effort and improve code quality across project delivery streams.',
      highlights: [
        'Defined package structures with explicit ownership and maintainability boundaries.',
        'Improved package documentation and internal adoption workflows.',
        'Supported cross-project stability by addressing regressions and compatibility risks early.',
      ],
      stack: ['Unity', 'C#', 'Package Architecture', 'Maintainability'],
    },
  },
  {
    slug: 'firebase-ugc-platform-hardening',
    title: 'Firebase UGC Platform Hardening',
    caption:
      'Took a UGC backend from prototype to production-grade with stronger security, clearer operations, and sustainable DevOps practices.',
    period: '2023 to present',
    role: 'Game Programmer',
    company: 'Exient',
    featured: true,
    image: {
      src: 'images/projects/firebase-ugc-platform.png',
      alt: 'Preview image for Firebase UGC Platform Hardening work, showing Firestore-backed user-generated content data flows.',
    },
    gallery: [
      {
        src: 'images/projects/firebase-ugc-platform.png',
        alt: 'Preview image for Firebase UGC Platform Hardening work, showing Firestore-backed user-generated content data flows.',
        caption:
          'Firestore-backed data model view used to communicate UGC lifecycle structure and operational boundaries.',
      },
      {
        src: 'images/projects/firebase-ugc-platform-rules.png',
        alt: 'Preview image for Firebase UGC Platform Hardening work, showing Firestore security rules coverage.',
        caption:
          'Companion view showing Firestore security rules coverage for user-generated content access and moderation flows.',
      },
    ],
    details: {
      summary:
        'Scaled a prototype UGC stack into a stable production setup by tightening authentication paths, improving operability, and documenting lifecycle responsibilities.',
      highlights: [
        'Strengthened Firestore data and access boundaries for safer UGC operations.',
        'Hardened Firebase Functions execution paths and operational visibility.',
        'Introduced more explicit DevOps and security standards for release reliability.',
      ],
      stack: ['Firestore', 'Firebase Functions', 'UGC Systems', 'Security', 'DevOps'],
    },
  },
  {
    slug: 'unity-systems-modernization',
    title: 'Unity Systems Modernization',
    caption:
      'Refactored brittle legacy gameplay code into more resilient, data-oriented, and parallel-friendly engineering flows.',
    period: '2023 to present',
    role: 'Game Programmer',
    company: 'Exient',
    featured: true,
    image: {
      src: 'images/projects/unity-systems-modernization.svg',
      alt: 'Framed preview artwork representing system refactoring and performance-driven Unity workflows.',
    },
    details: {
      summary:
        'Improved delivery confidence by strengthening unstable systems, reducing fragility in legacy code, and introducing better-aligned execution paths for runtime performance.',
      highlights: [
        'Stabilized brittle systems through targeted architectural and structural refactoring.',
        'Applied data-oriented flow design where it improved runtime predictability.',
        'Parallelized practical workflows to reduce bottlenecks in implementation and iteration.',
      ],
      stack: ['Unity', 'Systems Programming', 'Data-Oriented Design', 'Parallel Workflows'],
    },
  },
  {
    slug: 'cloud-integrations-data-pipelines',
    title: 'Cloud Integrations & Data Pipelines',
    caption:
      'Integrated cloud services and data pipelines to support operational workflows and cross-system reliability at production pace.',
    period: '2023 to present',
    role: 'Game Programmer',
    company: 'Exient',
    featured: true,
    image: {
      src: 'images/projects/cloud-integrations-data-pipelines.png',
      alt: 'Preview image for Cloud Integrations and Data Pipelines work, showing MuleSoft architecture and connected system flows.',
    },
    details: {
      summary:
        'Delivered integration-heavy systems and pipeline setups that improved operational consistency, data movement clarity, and environment-level maintainability.',
      highlights: [
        'Connected platform services with game-facing systems through explicit integration contracts.',
        'Implemented maintainable data flow patterns for operational visibility and reliability.',
        'Reduced operational friction through practical architecture choices focused on delivery.',
      ],
      stack: ['Cloud Integrations', 'Data Pipelines', 'Operational Systems', 'Delivery Engineering'],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
