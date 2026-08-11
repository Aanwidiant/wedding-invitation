import Image from "next/image";

interface StoryItem {
    date: string;
    title: string;
    description: string;
    image?: string;
}

interface StoryProps {
    items: readonly StoryItem[];
}

export default function Story({ items }: StoryProps) {
    return (
        <section className="bg-background px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-2xl">
                <p className="text-center font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Kisah Kami
                </p>

                <ol className="relative mt-12 space-y-12 sm:mt-16 sm:space-y-16">
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-1 w-px bg-border"
                    />

                    {items.map((item) => (
                        <li key={item.title} className="relative pl-8 sm:pl-10">
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
                            />

                            <p className="font-display text-lg text-primary sm:text-xl">
                                {item.date}
                            </p>
                            <h3 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
                                {item.title}
                            </h3>
                            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-secondary sm:text-base">
                                {item.description}
                            </p>

                            {item.image ? (
                                <div className="relative mt-5 aspect-[4/3] w-full max-w-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width: 640px) 384px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
