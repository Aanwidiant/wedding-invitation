interface Person {
    name: string;
    parents: {
        father: string;
        mother: string;
    };
}

interface CoupleProps {
    groom: Person;
    bride: Person;
}

function PersonDetail({
    person,
    label,
}: {
    person: Person;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                {person.name}
            </h2>
            <div className="space-y-1">
                <p className="font-body text-xs uppercase tracking-widest text-secondary">
                    {label}
                </p>
                <p className="font-body text-sm text-foreground">
                    {person.parents.father}
                </p>
                <p className="font-body text-sm text-foreground">
                    {person.parents.mother}
                </p>
            </div>
        </div>
    );
}

export default function Couple({ groom, bride }: CoupleProps) {
    return (
        <section className="bg-background px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-secondary sm:text-base">
                    Dengan memohon rahmat dan ridho Allah Subhanahu wa
                    Ta&apos;ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i
                    untuk hadir dan memberikan doa restu pada pernikahan kami.
                </p>

                <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
                    <PersonDetail person={groom} label="Putra dari" />

                    <div className="flex items-center justify-center gap-4 md:flex-col">
                        <span className="h-px w-10 bg-border md:h-10 md:w-px" />
                        <span className="font-script text-3xl text-primary sm:text-4xl">
                            &amp;
                        </span>
                        <span className="h-px w-10 bg-border md:h-10 md:w-px" />
                    </div>

                    <PersonDetail person={bride} label="Putri dari" />
                </div>
            </div>
        </section>
    );
}
