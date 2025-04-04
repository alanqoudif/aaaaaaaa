'use client';

import { useParams } from 'next/navigation';
import { i18n } from '@/i18n.config';

type Props = {
    children: React.ReactNode;
};

export default function LocaleTemplate({ children }: Props) {
    const params = useParams();
    const locale = params.locale as string;

    if (!i18n.locales.includes(locale)) {
        return null;
    }

    return children;
} 