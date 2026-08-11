interface Person {
    fullname: string;
    parents: {
        father: string;
        mother: string;
    };
}

interface CoupleProps {
    groom: Person;
    bride: Person;
}

function PersonDetail({ person, label }: { person: Person; label: string }) {
    return (
        <div className='flex flex-col items-center gap-3 text-center'>
            <h2 className='font-display text-foreground text-3xl sm:text-4xl'>{person.fullname}</h2>
            <div className='space-y-1'>
                <p className='font-body text-secondary text-xs tracking-widest uppercase'>
                    {label}
                </p>
                <p className='font-body text-foreground text-sm'>{person.parents.father}</p>
                <p className='font-body text-foreground text-sm'>{person.parents.mother}</p>
            </div>
        </div>
    );
}

export default function Couple({ groom, bride }: CoupleProps) {
    return (
        <section
            className='bg-background px-6 py-20 sm:py-24'
            data-aos='fade-up'
            data-aos-offset='100'
        >
            <div className='mx-auto max-w-3xl text-center'>
                <p className='font-body text-secondary mx-auto max-w-md text-sm leading-relaxed sm:text-base'>
                    Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
                    Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami.
                </p>

                <div className='mt-12 grid gap-10 sm:mt-16 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10'>
                    <PersonDetail person={groom} label='Putra ke dua dari' />

                    <div className='flex items-center justify-center gap-4 md:flex-col'>
                        <span className='bg-border h-px w-10 md:h-10 md:w-px' />
                        <span className='font-script text-primary text-3xl sm:text-4xl'>&amp;</span>
                        <span className='bg-border h-px w-10 md:h-10 md:w-px' />
                    </div>

                    <PersonDetail person={bride} label='Putri ke dua dari' />
                </div>
            </div>
        </section>
    );
}
