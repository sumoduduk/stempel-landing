import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';
import { FooterSection } from '@/components/layout/sections/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Fast Watermark - Stempel',
    description: 'Stempel : Fast Image Watermarking App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-br' suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background', inter.className)}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='light'
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />

                    {children}

                    <FooterSection />
                </ThemeProvider>
            </body>
        </html>
    );
}
