import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

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
        {/* 在 app 路由模式中（即使用 app/ 目录），SessionProvider 会自动处理 session 的上下文，而你不需要手动传递 session prop。*/}
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
