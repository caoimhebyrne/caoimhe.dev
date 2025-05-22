import Navigation from "@/components/root/Navigation";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caoimhe Byrne",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} flex min-h-screen flex-col font-mono text-sm antialiased md:text-base`}
      >
        <header className="border-border border-b">
          <section className="mx-auto border-border px-3 py-2 md:w-2/3 md:border-x md:px-6 md:py-4 xl:w-1/2 2xl:w-3/8">
            <Navigation />
          </section>
        </header>

        <main className="flex-1 border-border p-6 md:mx-auto md:w-2/3 md:border-x xl:w-1/2 2xl:w-3/8">
          {children}
        </main>
      </body>
    </html>
  );
}
