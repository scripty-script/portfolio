"use client";
import { Heading } from "@/components/heading";
import {
  TypewriterEffectSmooth,
  Word,
} from "@/components/ui/typewriter-effect";
import { reduce } from "es-toolkit/compat";
import { useEffect, useEffectEvent, useState } from "react";

const words = new Map<number, Word[]>([
  [
    0,
    [
      {
        text: "Full-stack",
      },
      {
        text: "developer",
      },
    ],
  ],
  [
    1,
    [
      {
        text: "Software",
      },
      {
        text: "Engineer",
      },
    ],
  ],
  [
    2,
    [
      {
        text: "DevOps",
      },
    ],
  ],
]);

export function HeroTitle({ className }: { className?: string }) {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      onTick();
    }, 3_000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Heading
      as="h6"
      aria-label={reduce(
        words.get(count % 3) as Word[],
        (accumulate, word) => accumulate + word.text + " ",
        "",
      )}
      className="text-muted-foreground"
    >
      <TypewriterEffectSmooth
        words={words.get(count % 3) as Word[]}
        className={className}
      />
    </Heading>
  );
}
