import { Heading } from "@/components/heading";
import { HeroTitle } from "@/components/hero-title";
import { Section, SectionHeader } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Item, ItemContent, ItemGroup, ItemTitle } from "@/components/ui/item";
import { projects } from "@/lib/projects";
import { techStacks } from "@/lib/tech-stach";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Section className="justify-between pt-10 pb-0">
          <SectionHeader className="mb-0">
            <HeroTitle className="font-heading text-3xl leading-10 font-semibold tracking-tight sm:text-5xl" />
            <Heading
              as="h1"
              className="text-6xl text-[length:clamp(2.25rem,1.2rem+7.5vw,8rem)] leading-[0.9] uppercase md:text-9xl"
            >
              <span>Nathaniel</span>
              <span className="ml-4 block sm:ml-20">Naduaran</span>
            </Heading>
          </SectionHeader>

          <Image
            src="/headshot.png"
            alt="Headshot"
            width={400}
            height={560}
            priority
          />
        </Section>

        <div className="dark bg-background">
          <Section>
            <SectionHeader>
              <Heading as="h2">What I work with</Heading>
            </SectionHeader>

            {techStackList()}
          </Section>
        </div>

        <Section className="min-h-0">
          <SectionHeader>
            <Heading as="h2">Feature Projects</Heading>
          </SectionHeader>

          {featureProjects()}
        </Section>
      </main>
    </>
  );
}

function featureProjects() {
  return (
    <div className="relative grid gap-5 sm:grid-cols-2">
      {Array.from(projects).map(([id, project]) => (
        <article key={id} className="border-primary flex flex-col border p-9">
          <Heading as="h3" className="mb-5">
            {project.title}
          </Heading>
          <p className="mb-6">{project.sub_title}</p>

          <div className="border-primary mt-auto border-t-2 border-dashed pt-6">
            <a
              href={project.link}
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                className: "border-primary! block rounded-none bg-transparent",
              })}
            >
              Visit <MoveRightIcon />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function techStackTags(items: string[]) {
  return (
    <ItemGroup className="flex flex-row flex-wrap items-center gap-2 rounded-full">
      {items.map((item) => (
        <Item key={item} variant="outline" className="w-fit">
          <ItemContent>
            <ItemTitle>{item}</ItemTitle>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

function techStackList() {
  return (
    <ul className="divide-primary border-primary divide-y-4 divide-dashed border-y-4 border-dashed">
      {Array.from(techStacks).map(([id, tech], index) => (
        <li key={id} className="space-y-4 py-10">
          <span className="text-muted-foreground block text-3xl font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Heading as="h3" className="uppercase">
            {tech.scope}
          </Heading>
          <p className="text-muted-foreground text-lg">{tech.description}</p>

          <div className="flex items-center gap-4">
            <Heading as="h6" className="uppercase">
              Frameworks
            </Heading>
            {techStackTags(tech.frameworks)}
          </div>
          <div className="flex items-center gap-4">
            <Heading as="h6" className="uppercase">
              Langauges
            </Heading>
            {techStackTags(tech.languages)}
          </div>
          <div className="flex items-center gap-4">
            <Heading as="h6" className="uppercase">
              Tools
            </Heading>
            {techStackTags(tech.tools)}
          </div>
        </li>
      ))}
    </ul>
  );
}
