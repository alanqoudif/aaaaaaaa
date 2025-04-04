import './globals.css';
import { Providers } from './providers';
import { Noto_Sans_Arabic } from 'next/font/google';
import { Metadata, Viewport } from 'next';

const arabic = Noto_Sans_Arabic({
    subsets: ['arabic'],
    variable: '--font-arabic',
});

export const metadata: Metadata = {
    title: 'ذكي - محرك بحث ذكي',
    description: 'محرك بحث ذكي مدعوم بالذكاء الاصطناعي مع قدرات RAG والبحث المؤسس',
    icons: {
        icon: '/favicon.ico',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning>
            <body className={`${arabic.variable}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
