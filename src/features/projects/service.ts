export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  period: string;
  tags: string[];
  featured: boolean;
  problem: string;
  work: string[];
  outcome: string;
  links?: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
  {
    slug: 'game-server-platform',
    title: 'Game Server Platform Prototype',
    summary:
      'A game-agnostic backend prototype for authentication, authorization, and session lifecycle management.',
    category: 'Backend Systems',
    period: 'Independent project',
    tags: ['Java', 'Authentication', 'Game Services', 'Architecture'],
    featured: true,
    problem:
      'I wanted a reusable backend foundation for game-facing services instead of rebuilding account and session primitives per project.',
    work: [
      'Defined a service shape for sign-in, identity checks, session creation, and access control.',
      'Focused on clean domain boundaries so the platform could support multiple game contexts.',
      'Kept the implementation small enough to iterate on architecture decisions before hardening.',
    ],
    outcome:
      'The result is a strong portfolio case study in backend thinking: clear service boundaries, reusable concerns, and an approach grounded in practical game infrastructure needs.',
  },
  {
    slug: 'production-game-engineering',
    title: 'Production Game Engineering',
    summary:
      'Gameplay and systems programming work shaped by shipping constraints, multidisciplinary collaboration, and platform realities.',
    category: 'Game Development',
    period: 'Professional work',
    tags: ['Unity', 'Gameplay', 'Console', 'Mobile'],
    featured: true,
    problem:
      'Production game work demands maintainable systems that survive content changes, platform requirements, and constant iteration.',
    work: [
      'Contributed to engineering work that balances gameplay needs with code health and delivery pressure.',
      'Worked across system behavior, implementation detail, and collaboration with non-engineering disciplines.',
      'Applied a delivery mindset shaped by both product and technical constraints.',
    ],
    outcome:
      'This area represents the strongest through-line in my portfolio: practical engineering that helps teams ship reliably without overcomplicating the stack.',
  },
  {
    slug: 'enterprise-integrations-and-data',
    title: 'Enterprise Integrations and Data Workflows',
    summary:
      'Integration-heavy engineering across business systems, operational tooling, and structured data movement.',
    category: 'Enterprise Delivery',
    period: 'Professional work',
    tags: ['Integrations', 'Cloud', 'Data', 'Business Systems'],
    featured: true,
    problem:
      'Business environments often fail at the seams, where systems, data, and process expectations do not line up cleanly.',
    work: [
      'Built and supported software that connects systems and turns fragmented workflows into repeatable operational paths.',
      'Worked in delivery environments where correctness, maintainability, and stakeholder confidence all mattered.',
      'Applied backend and integration experience to real operational needs rather than isolated proofs of concept.',
    ],
    outcome:
      'The work sharpened my ability to design practical solutions in environments where software has to fit into existing organizations, not just ideal architectures.',
  },
  {
    slug: 'graphics-and-systems-foundations',
    title: 'Graphics and Systems Foundations',
    summary:
      'University and independent work spanning a compiler, a ray tracer, and low-level graphics and physics experimentation.',
    category: 'Computer Science Foundations',
    period: 'Academic and exploratory work',
    tags: ['C', 'Compilers', 'Graphics', 'Physics'],
    featured: false,
    problem:
      'I used smaller technical projects to build fluency in how systems behave underneath higher-level tooling.',
    work: [
      'Built a simple compiler with lexer and parser components.',
      'Implemented ray tracing and scene processing work in C.',
      'Explored graphics and physics behavior close to the rendering and simulation fundamentals.',
    ],
    outcome:
      'These projects remain useful portfolio evidence because they show engineering curiosity, systems grounding, and a willingness to understand the machinery under the abstractions.',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
