import { NextIntlClientProvider } from 'next-intl';
import { i18n } from '@/i18n.config';
import arMessages from '@/messages/ar';
import enMessages from '@/messages/en';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const locale = params.locale;
    return {
        title: locale === 'ar' ? 'ذكي' : 'Scira',
        description: locale === 'ar' ? 'محرك بحث ذكي' : 'Smart Search Engine',
    };
}

export function generateStaticParams() {
    return i18n.locales.map(locale => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

async function getLocale(params: { locale: string }) {
    'use server';
    return params.locale;
}

export default async function LocaleLayout({
    children,
    params,
}: Props) {
    const locale = await getLocale(params);
    const messages = locale === 'ar' ? arMessages : enMessages;
    const isRTL = locale === 'ar';

    if (!i18n.locales.includes(locale)) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
                {children}
            </div>
        </NextIntlClientProvider>
    );
} 