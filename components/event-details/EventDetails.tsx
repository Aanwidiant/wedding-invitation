interface EventInfo {
    date: string;
    time: string;
    location: string;
}

interface EventDetailsProps {
    ceremony: EventInfo;
    reception: EventInfo;
}

function EventItem({ title, event }: { title: string; event: EventInfo }) {
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="font-display text-2xl text-primary sm:text-3xl">
                {title}
            </h3>
            <p className="font-body text-sm text-foreground sm:text-base">
                {event.date}
            </p>
            <p className="font-body text-sm text-secondary sm:text-base">
                {event.time}
            </p>
            <p className="mt-2 max-w-64 font-body text-sm leading-relaxed text-secondary sm:text-base">
                {event.location}
            </p>
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
                    <EventItem title="Akad Nikah" event={ceremony} />

                    <div className="flex items-center justify-center md:flex-col">
                        <span className="h-px w-10 bg-border md:h-10 md:w-px" />
                    </div>

                    <EventItem title="Resepsi" event={reception} />
                </div>
            </div>
        </section>
    );
}
