import { NextIntlClientProvider } from 'next-intl';
import { i18n } from '@/i18n.config';
import arMessages from '@/messages/ar';
import enMessages from '@/messages/en';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return i18n.locales.map(locale => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default function LocaleLayout({
    children,
    params,
}: Props) {
    const locale = params.locale;
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