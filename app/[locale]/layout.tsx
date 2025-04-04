'use client';

import { NextIntlClientProvider } from 'next-intl';
import { i18n } from '@/i18n.config';
import arMessages from '@/messages/ar';
import enMessages from '@/messages/en';
import { notFound, useParams } from 'next/navigation';

export function generateStaticParams() {
    return i18n.locales.map(locale => ({ locale }));
}

type Props = {
    children: React.ReactNode;
};

export default function LocaleLayout({
    children,
}: Props) {
    const params = useParams();
    const locale = params.locale as string;

    if (!i18n.locales.includes(locale)) {
        notFound();
    }

    const messages = locale === 'ar' ? arMessages : enMessages;
    const isRTL = locale === 'ar';

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
                {children}
            </div>
        </NextIntlClientProvider>
    );
} 