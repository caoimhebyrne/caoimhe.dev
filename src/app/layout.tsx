import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clazz } from "@/utils/clazz";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Caoimhe Byrne",
    description: "18 year-old Java and Kotlin Developer from Ireland",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clazz(
                    inter.className,
                    "container mx-auto flex max-w-3xl flex-col gap-8 px-8 py-12 dark:bg-neutral-950 lg:px-0",
                )}
            >
                {children}
            </body>
        </html>
    );
}
