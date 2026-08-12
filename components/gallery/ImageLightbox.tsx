'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface ImageLightboxProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function ImageLightbox({ src, alt, width, height }: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const lightbox = isOpen ? (
        <div
            className='fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm'
            role='dialog'
            aria-modal='true'
            aria-label={alt}
            onClick={() => setIsOpen(false)}
        >
            <button
                type='button'
                onClick={() => setIsOpen(false)}
                aria-label='Tutup gambar'
                className='absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            >
                ×
            </button>

            <div
                className='relative flex max-h-[90vh] max-w-[90vw] items-center justify-center'
                onClick={(event) => event.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes='90vw'
                    className='max-h-[90vh] w-auto max-w-[90vw] rounded-xl object-contain'
                />
            </div>
        </div>
    ) : null;

    return (
        <>
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                aria-label={`Buka gambar: ${alt}`}
                className='group block w-full cursor-zoom-in'
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes='(min-width: 640px) 33vw, 50vw'
                    className='h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]'
                />
            </button>

            {isOpen && typeof document !== 'undefined'
                ? createPortal(lightbox, document.body)
                : null}
        </>
    );
}
