
interface FooterProps {
    groomName: string;
    brideName: string;
    date: string;
}

function firstName(fullName: string) {
    return fullName.trim().split(" ")[0];
}

export default function Footer({
    groomName,
    brideName,
    date,
}: FooterProps) {
    return (
        <footer className="border-t border-border bg-surface px-6 py-20 sm:py-24">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Terima Kasih
                </p>

                <h2 className="mt-6 font-display text-3xl text-foreground sm:text-4xl">
                    {firstName(groomName)}
                    <span className="mx-3 font-script text-3xl text-primary sm:text-4xl">
                        &
                    </span>
                    {firstName(brideName)}
                </h2>

                <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-secondary sm:text-base">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami
                    apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                    doa restu untuk pernikahan kami.
                </p>

                <p className="mt-7 font-display text-base tracking-wide text-primary sm:text-lg">
                    {date}
                </p>

                <div className="mt-10 h-px w-10 bg-border" />

                <p className="mt-6 font-body text-xs text-secondary">
                    Dengan penuh kasih,
                </p>

                <p className="mt-2 font-display text-sm text-foreground">
                    {firstName(groomName)} & {firstName(brideName)}
                </p>

                <p className="mt-12 font-body text-xs tracking-wide text-secondary/70"> Created by Suroso Tech </p>
            </div>
        </footer>
    );
}
