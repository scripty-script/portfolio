import { HeroTitle } from "@/components/hero-title";
import {
  Section,
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/section";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { projects } from "@/lib/projects";
import { techStacks } from "@/lib/tech-stach";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Section className="h-screen items-center justify-between pt-10 pb-0">
          <SectionHeader className="mb-0">
            <p className="text-lg leading-10 font-semibold tracking-tight">
              Nathaniel Naduaran
            </p>
            <div className="flex flex-col gap-2">
              <HeroTitle className="font-heading text-5xl leading-10 font-semibold tracking-tight" />

              <SectionHeaderDescription>
                who loves building things from idea to launch.
              </SectionHeaderDescription>
            </div>
          </SectionHeader>

          <Image
            src="/headshot.png"
            alt="Headshot"
            width={400}
            height={600}
            priority
          />
        </Section>

        <Section className="py-28">
          <SectionHeader>
            <SectionHeaderTitle>My Stack</SectionHeaderTitle>
          </SectionHeader>
          {techStackList()}
        </Section>

        <Section>
          <SectionHeader>
            <SectionHeaderTitle>Feature Projects</SectionHeaderTitle>
          </SectionHeader>

          {featureProjects()}
        </Section>
      </main>
    </>
  );
}

function featureProjects() {
  return (
    <ItemGroup className="grid grid-cols-3 gap-5">
      {Array.from(projects).map(([id, project]) => (
        <Item key={id} variant="outline" className="relative">
          <Link className="absolute inset-0" href={`/projects/${id}`}>
            <span className="sr-only">{project.title}</span>
          </Link>
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
  return (
    <ItemGroup className="flex flex-row flex-wrap items-center justify-center gap-4">
      {Array.from(techStacks).map(([id, tech]) => (
        <Item key={id} variant="outline" className="w-fit">
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
