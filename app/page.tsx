import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { Project, TechStack } from "@/types";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 px-5 py-10 sm:px-2">
        <section>
          <div className="mb-10 size-16 overflow-hidden rounded-full">
            <Image
              className="size-16"
              src="/headshot-bg.jpg"
              alt="Headshot"
              width={64}
              height={64}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl leading-10 font-semibold tracking-tight">
              Nathaniel Naduaran
            </h1>
            <p>
              Full-stack developer who loves building things from idea to
              launch.
            </p>
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="mb-4 text-2xl leading-10 font-semibold tracking-tight">
            My Stack
          </h2>
          {techStackList()}
        </section>

        <section className="flex flex-col">
          <h2 className="mb-4 text-2xl leading-10 font-semibold tracking-tight">
            Feature Projects
          </h2>

          {featureProjects()}
        </section>
      </main>
    </>
  );
}

function featureProjects() {
  const projects: Project[] = [
    {
      title: "SalarEase",
      sub_title: "HR System",
      image: "/salarease-logo.svg",
    },
    {
      title: "FAXedge Technologie",
      sub_title: "Transforming FAX communication for the modern era.",
      image: "/faxedge-logo.svg",
    },
    {
      title: "Netlink Voice's Connectware",
      sub_title: "Voice. Networking, Managed Services",
      image: "/netlinkvoice-logo.svg",
    },
  ];

  return (
    <ItemGroup className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <Item key={project.title} variant="outline">
          <ItemHeader>
            <Image
              src={project.image}
              alt={project.title}
              width={120}
              height={120}
              className="aspect-square w-full object-scale-down"
              loading="eager"
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>{project.title}</ItemTitle>
            <ItemDescription>{project.sub_title}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

function techStackList() {
  const techStacks: TechStack[] = [
    {
      label: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      label: "Laravel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      label: "PHP",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      label: "Vue",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    {
      label: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      label: "Ansible",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
    },
    {
      label: "Inertia",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
    },
    {
      label: "Next js",
      image: "/next.svg",
    },
    {
      label: "Redis",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    },
    {
      label: "MySql",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <ItemGroup className="flex flex-row flex-wrap items-center justify-center gap-4">
      {techStacks.map((tech) => (
        <Item key={tech.label} variant="outline" className="w-fit">
          <ItemHeader className="flex aspect-square size-20 justify-center">
            <Image
              src={tech.image}
              alt={tech.label}
              width={64}
              height={64}
              style={{ width: "auto", height: "auto" }}
              className="object-cover"
              loading="eager"
            />
          </ItemHeader>
          <ItemContent className="sr-only">
            <ItemTitle>{tech.label}</ItemTitle>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}
