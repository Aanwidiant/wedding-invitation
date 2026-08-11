interface QuranVerseProps {
    arabic: string;
    latin: string;
    translation: string;
    reference: string;
}

export default function QuranVerse({
    arabic,
    latin,
    translation,
    reference,
}: QuranVerseProps) {
    return (
        <section className="border-y border-border bg-surface px-6 py-20 sm:py-24">
            <div className="verse-fade-in mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
                <div className="h-px w-12 bg-accent" />

                <p
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-2xl leading-loose text-primary sm:text-3xl"
                >
                    {arabic}
                </p>

                <p className="font-body text-sm italic text-secondary sm:text-base">
                    {latin}
                </p>

                <p className="font-body text-sm leading-relaxed text-foreground sm:text-base">
                    {translation}
                </p>

                <p className="font-display text-sm uppercase tracking-[0.2em] text-primary">
                    {reference}
                </p>

                <div className="h-px w-12 bg-accent" />
            </div>
        </section>
    );
}
