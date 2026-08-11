import ImageLightbox from '@/components/gallery/ImageLightbox';

interface GalleryItem {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface GalleryProps {
    items: readonly GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
    return (
        <section className='bg-background px-6 py-20 sm:py-24'>
            <div className='mx-auto max-w-5xl'>
                <p className='font-body text-secondary text-center text-xs tracking-[0.3em] uppercase'>
                    Galeri
                </p>

                <div className='gallery-fade-in mt-10 columns-2 gap-4 sm:mt-12 sm:columns-3 sm:gap-6'>
                    {items.map((item) => (
                        <div
                            key={item.src}
                            className='mb-4 break-inside-avoid overflow-hidden rounded-2xl sm:mb-6'
                        >
                            <ImageLightbox
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
