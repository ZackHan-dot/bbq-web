import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "@/providers";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "HzyCoder | 韩宗源的个人网站",
  description: "书山有路勤为径，学海无涯苦作舟！！！",
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
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
