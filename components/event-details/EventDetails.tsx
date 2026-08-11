interface EventInfo {
    date: string;
    time: string;
    location: string;
    mapsUrl: string;
}

interface EventDetailsProps {
    ceremony: EventInfo;
    reception: EventInfo;
}

function EventItem({
    title,
    event,
}: {
    title: string;
    event: EventInfo;
}) {
    return (
        <div className="flex flex-col items-center text-center">
            <h3 className="font-display text-2xl text-primary sm:text-3xl">
                {title}
            </h3>

            <p className="mt-2 font-body text-sm text-foreground sm:text-base">
                {event.date}
            </p>

            <p className="mt-1 font-body text-sm text-secondary sm:text-base">
                {event.time}
            </p>

            <p className="mt-3 max-w-64 font-body text-sm leading-relaxed text-secondary sm:text-base">
                {event.location}
            </p>

            <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-body text-sm tracking-wide text-surface transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
            >
                Lihat Lokasi
            </a>
        </div>
    );
}

export default function EventDetails({
    ceremony,
    reception,
}: EventDetailsProps) {
    return (
        <section className="border-y border-border bg-surface px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-3xl">
                <p className="text-center font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Rangkaian Acara
                </p>

                <div className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
                    <EventItem
                        title="Akad Nikah"
                        event={ceremony}
                    />

                    <div className="flex items-center justify-center md:flex-col">
                        <span className="h-px w-10 bg-border md:h-10 md:w-px" />
                    </div>

                    <EventItem
                        title="Resepsi"
                        event={reception}
                    />
                </div>
            </div>
        </section>
    );
}
