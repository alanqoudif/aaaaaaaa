import { getRequestConfig } from 'next-intl/server';
import { i18n } from '@/i18n.config';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
    // التحقق من أن اللغة مدعومة
    if (!locale || !i18n.locales.includes(locale)) {
        notFound();
    }

    try {
        const messages = (await import(`@/messages/${locale}/index`)).default;
        return {
            messages,
            // يمكنك إضافة المزيد من الإعدادات هنا إذا لزم الأمر
            timeZone: 'Asia/Riyadh',
            now: new Date(),
        };
    } catch (error) {
        notFound();
    }
}); 