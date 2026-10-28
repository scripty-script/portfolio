import { cn } from "cn";
import * as React from "react";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex min-h-screen w-full flex-col px-3 py-10 sm:mx-auto sm:max-w-5xl sm:px-4 lg:px-5",
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

export { Section, SectionHeader, SectionHeaderDescription };
