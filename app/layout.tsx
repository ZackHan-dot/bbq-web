import type { Metadata } from "next";

import { ThemeProvider } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "认真的维尼熊",
  description: "分享故事，创作乐趣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
