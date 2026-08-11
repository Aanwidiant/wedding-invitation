import { Location } from '@/components/icons';

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

function EventItem({ title, event, delay }: { title: string; event: EventInfo; delay?: number }) {
    return (
        <div
            className='flex flex-col items-center text-center'
            data-aos='fade-up'
            data-aos-offset='100'
            data-aos-delay={delay}
        >
            <h3 className='font-display text-primary text-2xl sm:text-3xl'>{title}</h3>

            <p className='font-body text-foreground mt-2 text-sm sm:text-base'>{event.date}</p>

            <p className='font-body text-secondary mt-1 text-sm sm:text-base'>{event.time}</p>

            <p className='font-body text-secondary mt-3 max-w-64 text-sm leading-relaxed sm:text-base'>
                {event.location}
            </p>

            <a
                href={event.mapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary font-body text-surface hover:bg-primary-dark focus-visible:outline-primary-dark mt-4 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
            >
                <Location className='size-4' />
                Lihat Lokasi
            </a>
        </div>
    );
}

export default function EventDetails({ ceremony, reception }: EventDetailsProps) {
    return (
        <section className='border-border bg-surface border-y px-6 py-20 sm:py-24'>
            <div className='mx-auto max-w-3xl'>
                <p className='font-body text-secondary text-center text-xs tracking-[0.3em] uppercase'>
                    Rangkaian Acara
                </p>

                <div className='mt-10 grid gap-10 sm:mt-12 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10'>
                    <EventItem title='Akad Nikah' event={ceremony} />

                    <div className='flex items-center justify-center md:flex-col'>
                        <span className='bg-border h-px w-10 md:h-10 md:w-px' />
                    </div>

                    <EventItem title='Resepsi' event={reception} delay={150} />
                </div>
            </div>
        </section>
    );
}
