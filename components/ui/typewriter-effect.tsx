"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, type Variants } from "motion/react";

export interface Word {
  text: string;
  className?: string;
}

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    // wait for the old words to leave, then stagger in
    transition: { duration: 0.45, ease: "easeOut", delay: 0.3 + i * 0.15 },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -14,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: "easeIn", delay: i * 0.05 },
  }),
};

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: Word[];
  className?: string;
}) => {
  const groupKey = words.map((w) => w.text).join(" ");

  return (
    <AnimatePresence mode="popLayout">
      {words.map((word, idx) => (
        <motion.span
          key={`${groupKey}-${idx}`}
          custom={idx}
          variants={item}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn("inline-block", className, word.className)}
        >
          {word.text}
          &nbsp;
        </motion.span>
      ))}
    </AnimatePresence>
  );
};
