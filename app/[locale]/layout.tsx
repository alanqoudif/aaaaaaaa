import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { i18n } from '@/i18n.config';

export function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`@/messages/${locale}/index`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body className={locale === 'ar' ? 'font-arabic' : 'font-sans'}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 