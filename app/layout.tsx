import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";

const fontSans = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathaniel Naduaran",
  description: "Who loves building things from idea to launch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${geistSans.variable} bg-secondary antialiased`}
    >
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
