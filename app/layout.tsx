import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl py-6 px-6 flex-grow">
              {children}
            </main>
            <footer className="bg-gray-100 text-gray-400 w-full flex items-center justify-center gap-1 py-3">
              <span className="text-default-600 text-xs">
                Copyright © 2024 Mr.Han
              </span>
              <span className="text-primary text-xs">
                京ICP备
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  rel="noreferrer"
                  target="_blank"
                >
                  2024094880
                </a>
                号
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
