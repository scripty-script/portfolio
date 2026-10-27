import { TechStack } from "@/types";

export const techStacks = new Map<string, TechStack>([
  [
    "frontend",
    {
      scope: "frontend",
      tools: ["vite"],
      frameworks: ["Vue", "React", "Next js", "Inertia js", "Tailwindcss"],
      languages: ["TypeScript"],
      description:
        "Smooth, stable UIs that never stutter. I deliver SSR, accessible design, solid design systems, and 90+ Lighthouse scores.",
    },
  ],
  [
    "backend",
    {
      scope: "backend",
      tools: ["Redis", "Mysql", "Docker", "Ansible"],
      frameworks: ["Laravel", "NodeJs"],
      languages: ["PHP"],
      description:
        "I design and develop backend infrastructure spanning APIs, queueing systems, databases, and caching.",
    },
  ],
  [
    "testing",
    {
      scope: "testing",
      tools: ["Github Actions", "Docker"],
      frameworks: ["Pest"],
      languages: [],
      description:
        "I test at every level: unit, integration, e2e, and load. Bugs get caught before prod, not in it.",
    },
  ],
  [
    "deploy",
    {
      scope: "deploy",
      tools: ["Github Actions", "Ansible"],
      frameworks: [],
      languages: [],
      description:
        "I build automated deployment pipelines that ship code reliably and repeatably.",
    },
  ],
]);
