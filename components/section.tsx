import { cn } from "cn";
import * as React from "react";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex flex-col px-5 py-10 sm:mx-auto sm:max-w-5xl sm:px-2",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return <header className={cn("mb-12 flex flex-col", className)} {...props} />;
}

// =======================
// Section header Title
// =======================
type SectionHeaderTitleProps = React.ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

function SectionHeaderTitle({
  as: Tag = "h2",
  className,
  ...props
}: SectionHeaderTitleProps) {
  return (
    <Tag
      className={cn(
        "font-heading text-5xl leading-10 font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-lg text-balance lg:text-2xl",
        className,
      )}
      {...props}
    />
  );
}

export { Section, SectionHeader, SectionHeaderDescription, SectionHeaderTitle };
