import { Project } from "@/types";

export const projects = new Map<number, Project>([
  [
    1,
    {
      title: "SalarEase",
      sub_title:
        "A comprehensive HR system that handles time tracking, leave requests, payroll processing, and related workflows.",
      link: "https://salarease-staging.laraflair.com/",
    },
  ],
  [
    2,
    {
      title: "FAXedge Technologie",
      sub_title: "Transforming FAX communication for the modern era.",
      link: "https://faxedge.com/",
    },
  ],
  [
    3,
    {
      title: "Netlink Voice's Connectware",
      sub_title: "Voice. Networking, Managed Services",
      link: "https://netlinkvoice.com/",
    },
  ],
]);
