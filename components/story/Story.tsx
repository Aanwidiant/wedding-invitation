import Image from 'next/image';

interface StoryItem {
    date: string;
    title: string;
    description: string;
    image?: string;
    alt?: string;
}

interface StoryProps {
    items: readonly StoryItem[];
}

export default function Story({ items }: StoryProps) {
    return (
        <section className='bg-surface px-6 py-20 sm:py-24'>
            <div className='mx-auto max-w-5xl'>
                <p className='font-body text-secondary text-center text-xs tracking-[0.3em] uppercase'>
                    Kisah Kami
                </p>

                <div className='relative mt-12 sm:mt-16'>
                    <div
                        aria-hidden='true'
                        className='bg-border absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block'
                    />

                    <div
                        aria-hidden='true'
                        className='bg-border absolute inset-y-0 left-1 w-px md:hidden'
                    />

                    <ol className='space-y-12 sm:space-y-16 md:space-y-24'>
                        {items.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <li
                                    key={item.title}
                                    className='relative md:grid md:grid-cols-2'
                                    data-aos='fade-up'
                                    data-aos-duration='700'
                                    data-aos-offset='100'
                                >
                                    <span
                                        aria-hidden='true'
                                        className='bg-primary absolute top-1.5 left-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block'
                                    />

                                    {isEven ? (
                                        <>
                                            <div className='hidden pr-10 text-right md:block'>
                                                <p className='font-display text-primary text-lg sm:text-xl'>
                                                    {item.date}
                                                </p>

                                                <h3 className='font-display text-foreground mt-1 text-2xl sm:text-3xl'>
                                                    {item.title}
                                                </h3>

                                                <p className='font-body text-secondary mt-3 text-sm leading-relaxed sm:text-base'>
                                                    {item.description}
                                                </p>

                                                {item.image && (
                                                    <div className='relative mt-5 ml-auto aspect-4/3 w-full max-w-sm'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.alt ?? item.title}
                                                            fill
                                                            sizes='(min-width: 768px) 384px, 100vw'
                                                            className='rounded-xl object-cover'
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            <div className='hidden md:block' />

                                            <div className='pl-8 sm:pl-10 md:hidden'>
                                                <p className='font-display text-primary text-lg sm:text-xl'>
                                                    {item.date}
                                                </p>

                                                <h3 className='font-display text-foreground mt-1 text-2xl sm:text-3xl'>
                                                    {item.title}
                                                </h3>

                                                <p className='font-body text-secondary mt-3 max-w-md text-sm leading-relaxed sm:text-base'>
                                                    {item.description}
                                                </p>

                                                {item.image && (
                                                    <div className='relative mt-5 aspect-4/3 w-full max-w-sm'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.alt ?? item.title}
                                                            fill
                                                            sizes='(min-width: 640px) 384px, 100vw'
                                                            className='rounded-xl object-cover'
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='hidden md:block' />

                                            <div className='hidden pl-10 md:block'>
                                                <p className='font-display text-primary text-lg sm:text-xl'>
                                                    {item.date}
                                                </p>

                                                <h3 className='font-display text-foreground mt-1 text-2xl sm:text-3xl'>
                                                    {item.title}
                                                </h3>

                                                <p className='font-body text-secondary mt-3 text-sm leading-relaxed sm:text-base'>
                                                    {item.description}
                                                </p>

                                                {item.image && (
                                                    <div className='relative mt-5 aspect-4/3 w-full max-w-sm'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.alt ?? item.title}
                                                            fill
                                                            sizes='(min-width: 768px) 384px, 100vw'
                                                            className='rounded-xl object-cover'
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            <div className='pl-8 sm:pl-10 md:hidden'>
                                                <p className='font-display text-primary text-lg sm:text-xl'>
                                                    {item.date}
                                                </p>

                                                <h3 className='font-display text-foreground mt-1 text-2xl sm:text-3xl'>
                                                    {item.title}
                                                </h3>

                                                <p className='font-body text-secondary mt-3 max-w-md text-sm leading-relaxed sm:text-base'>
                                                    {item.description}
                                                </p>

                                                {item.image && (
                                                    <div className='relative mt-5 aspect-4/3 w-full max-w-sm'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.alt ?? item.title}
                                                            fill
                                                            sizes='(min-width: 640px) 384px, 100vw'
                                                            className='rounded-xl object-cover'
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}

                                    <span
                                        aria-hidden='true'
                                        className='bg-primary absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full md:hidden'
                                    />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
