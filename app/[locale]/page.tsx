import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function Home() {
    const t = useTranslations();
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-black pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-zinc-800/30 lg:p-4">
                    {t('site.name')} - {t('site.tagline')}
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto">
                    <LanguageSwitcher />
                </div>
            </div>

            <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
                <div className="text-6xl font-bold mb-4">🤖</div>
                <h1 className="text-5xl font-bold mb-4">{t('site.name')}</h1>
                <p className="text-xl opacity-80">{t('site.description')}</p>
                <div className="flex gap-4 mt-8">
                    <a href="/search" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                        {t('actions.tryNow')}
                    </a>
                    <a href="https://github.com/yourusername/thaki" target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                        {t('actions.viewSource')}
                    </a>
                </div>
            </div>

            <div className="w-full max-w-5xl mt-16">
                <div className="bg-zinc-800/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">{t('features.rag.title')}</h2>
                    <p className="text-gray-400">{t('features.rag.description')}</p>
                </div>
            </div>
        </main>
    );
}