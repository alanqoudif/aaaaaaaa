import { NextIntlClientProvider } from 'next-intl';
import { i18n } from '@/i18n.config';
import arMessages from '@/messages/ar';
import enMessages from '@/messages/en';

export function generateStaticParams() {
    return i18n.locales.map(locale => ({ locale }));
}

async function getLocale(params: { locale: string }) {
    'use server';
    return params.locale;
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // انتظار الحصول على قيمة locale
    const paramLocale = await getLocale(params);
    
    // التحقق من صحة اللغة
    const locale = i18n.locales.includes(paramLocale) ? paramLocale : i18n.defaultLocale;
    
    // اختيار ملف الترجمة المناسب
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