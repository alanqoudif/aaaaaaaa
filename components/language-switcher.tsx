'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const toggleLocale = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        router.push(`/${newLocale}`);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLocale}
            className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
            title={locale === 'ar' ? 'Switch to English' : 'تغيير إلى العربية'}
        >
            <Languages className="h-5 w-5" />
        </Button>
    );
} 