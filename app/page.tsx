import { Heading } from "@/components/heading";
import { HeroTitle } from "@/components/hero-title";
import { Section, SectionHeader } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Item, ItemContent, ItemGroup, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
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
            <Heading as="h1" className="text-6xl uppercase sm:text-9xl">
              Nathaniel
              <span className="ml-10 block sm:ml-20">Naduaran</span>
            </Heading>
          </SectionHeader>

          <Image
            src="/headshot.png"
            alt="Headshot"
            width={400}
            height={600}
            priority
          />
        </Section>

        <div className="dark bg-background">
          <Section>
            <SectionHeader>
              <Heading as="h2">What I work with</Heading>
            </SectionHeader>

            {techStackScope()}
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
        <article key={id} className="border-primary border p-9">
          <Heading as="h3" className="mb-5">
            {project.title}
          </Heading>
          <p>{project.sub_title}</p>

          <Separator className="bg-primary my-6" />

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
        </article>
      ))}
    </div>
  );
}

function techStackList(items: string[]) {
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

function techStackScope() {
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
            {techStackList(tech.frameworks)}
          </div>
          <div className="flex items-center gap-4">
            <Heading as="h6" className="uppercase">
              Langauges
            </Heading>
            {techStackList(tech.languages)}
          </div>
          <div className="flex items-center gap-4">
            <Heading as="h6" className="uppercase">
              Tools
            </Heading>
            {techStackList(tech.tools)}
          </div>
        </li>
      ))}
    </ul>
  );
}
