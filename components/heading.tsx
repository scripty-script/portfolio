import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  as: HeadingTag;
  className?: string;
};

const headingVariants = cva(
  "font-heading text-foreground leading-tight font-semibold tracking-tight",
  {
    variants: {
      as: {
        h1: "text-4xl sm:text-7xl",
        h2: "text-3xl sm:text-5xl",
        h3: "text-3xl sm:text-5xl",
        h4: "text-xl sm:text-3xl",
        h5: "text-lg sm:text-2xl",
        h6: "text-base sm:text-lg",
      },
    },
  },
);

export function Heading({
  as,
  className,
  ...props
}: React.ComponentProps<"h1"> & HeadingProps) {
  const Tag = as;

  return <Tag className={cn(headingVariants({ as }), className)} {...props} />;
}
