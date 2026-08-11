interface EventLocation {
    location: string;
    mapsUrl: string;
}

interface LocationProps {
    ceremony: EventLocation;
    reception: EventLocation;
}

function LocationItem({
    title,
    event,
}: {
    title: string;
    event: EventLocation;
}) {
    return (
        <div>
            <h3 className="font-display text-2xl text-primary sm:text-3xl">
                {title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-foreground sm:text-base">
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

export default function Location({ ceremony, reception }: LocationProps) {
    return (
        <section className="border-y border-border bg-surface px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-md text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Lokasi Acara
                </p>

                <div className="mt-8 flex flex-col gap-8">
                    <LocationItem title="Akad Nikah" event={ceremony} />

                    <div className="mx-auto h-px w-10 bg-border" />

                    <LocationItem title="Resepsi" event={reception} />
                </div>
            </div>
        </section>
    );
}
