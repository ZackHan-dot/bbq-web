import type { Metadata } from 'next';
import '@/styles/global.css';
import { ThemeProvider } from '@/providers';

export const metadata: Metadata = {
    title: '小韩日记｜个人博客',
    description: '分享技术，记录生活',
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
