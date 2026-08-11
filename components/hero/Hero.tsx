import Image from "next/image";

interface HeroProps {
    groomName: string;
    brideName: string;
    date: string;
    imageSrc: string;
}

function firstName(fullName: string) {
    return fullName.trim().split(" ")[0];
}

export default function Hero({
    groomName,
    brideName,
    date,
    imageSrc,
}: HeroProps) {
    return (
        <section className="grid md:grid-cols-2">
            <div className="relative aspect-[4/5] w-full">
                <Image
                    src={imageSrc}
                    alt={`${groomName} & ${brideName}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="hero-fade-up flex flex-col items-center justify-center gap-5 px-6 py-14 text-center md:items-start md:px-16 md:text-left">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Undangan Pernikahan
                </p>

                <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
                    {firstName(groomName)}
                    <span className="mx-3 font-script text-3xl text-primary sm:text-4xl">
                        &
                    </span>
                    {firstName(brideName)}
                </h1>

                <p className="max-w-sm font-body text-sm leading-relaxed text-secondary">
                    Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i
                    untuk turut merayakan hari bahagia pernikahan kami.
                </p>

                <p className="font-display text-lg tracking-wide text-primary">
                    {date}
                </p>
            </div>
        </section>
    );
}
