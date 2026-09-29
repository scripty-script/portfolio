import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathaniel Naduaran",
  description:
    "Full-stack developer who loves building things from idea to launch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-secondary antialiased`}
    >
      <body className="mx-auto max-w-3xl">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
