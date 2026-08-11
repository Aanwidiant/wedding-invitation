interface QuranVerseProps {
    arabic: string;
    latin: string;
    translation: string;
    reference: string;
}

export default function QuranVerse({ arabic, latin, translation, reference }: QuranVerseProps) {
    return (
        <section className='border-border bg-surface border-y px-6 py-20 sm:py-24'>
            <div className='verse-fade-in mx-auto flex max-w-xl flex-col items-center gap-6 text-center'>
                <div className='bg-accent h-px w-12' />

                <p
                    dir='rtl'
                    lang='ar'
                    className='font-arabic text-primary text-2xl leading-loose sm:text-3xl'
                >
                    {arabic}
                </p>

                <p className='font-body text-secondary text-sm italic sm:text-base'>{latin}</p>

                <p className='font-body text-foreground text-sm leading-relaxed sm:text-base'>
                    {translation}
                </p>

                <p className='font-display text-primary text-sm tracking-[0.2em] uppercase'>
                    {reference}
                </p>

                <div className='bg-accent h-px w-12' />
            </div>
        </section>
    );
}
