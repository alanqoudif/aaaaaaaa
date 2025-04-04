'use client';

import { useParams } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

export default function LocaleTemplate({ children }: Props) {
    const params = useParams();
    const locale = params.locale as string;

    return (
        <>
            {children}
        </>
    );
} 