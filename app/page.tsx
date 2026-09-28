import Image from "next/image";

interface TechStack {
  label: string;
  src: string;
}

const techStack: TechStack[] = [
  {
    label: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    label: "Laravel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    label: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    label: "Vue",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    label: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    label: "Ansible",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  },
  {
    label: "Next js",
    src: "/next.svg",
  },
];

export default function Home() {
  const techStackList = techStack.map((tech) => (
    <li key={tech.label}>
      <Image src={tech.src} alt={tech.label} width={80} height={80} />
    </li>
  ));

  return (
    <>
      <main className="flex flex-col px-2 py-10">
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
            Full-stack developer who loves building things from idea to launch.
          </p>
        </div>
      </main>

      <section className="flex flex-col px-2 py-10">
        <h2 className="text-2xl leading-10 font-semibold tracking-tight">
          Feature Projects
        </h2>
      </section>

      <section className="flex flex-col px-2 py-10">
        <h2 className="text-2xl leading-10 font-semibold tracking-tight">
          My Stack
        </h2>

        <div>
          <ul className="flex items-center justify-center gap-4">
            {techStackList}
          </ul>
        </div>
      </section>

      <section className="flex flex-col px-2 py-10">
        <h2 className="text-2xl leading-10 font-semibold tracking-tight">
          About
        </h2>
      </section>
    </>
  );
}
