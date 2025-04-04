'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    
    const toggleLocale = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        
        // الانتقال إلى نفس المسار ولكن باللغة المختلفة
        // تحويل المسار من /ar/xyz إلى /en/xyz أو العكس
        let newPath;
        if (pathname.startsWith('/ar/') || pathname === '/ar') {
            newPath = pathname.replace('/ar', `/en`);
        } else if (pathname.startsWith('/en/') || pathname === '/en') {
            newPath = pathname.replace('/en', `/ar`);
        } else {
            // إذا لم يكن هناك بادئة لغة، أضف اللغة الجديدة
            newPath = `/${newLocale}${pathname}`;
        }
        
        router.push(newPath);
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