'use client';

import { useEffect, useState } from 'react';
import { useAudio } from '@/components/audio/AudioProvider';

interface EnvelopeProps {
    guestName: string;
    groomName: string;
    brideName: string;
}

function initial(name: string) {
    return name.trim().charAt(0).toUpperCase();
}

export default function Envelope({ guestName, groomName, brideName }: EnvelopeProps) {
    const [isOpening, setIsOpening] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { openAudio } = useAudio();

    useEffect(() => {
        if (!isVisible) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    const handleOpen = async () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });

        await openAudio();

        setIsOpening(true);
    };

    return (
        <div
            aria-hidden={isOpening}
            onTransitionEnd={() => {
                if (isOpening) {
                    setIsVisible(false);
                }
            }}
            className={`bg-background fixed inset-0 z-50 flex items-center justify-center px-6 transition-all duration-700 ease-out ${
                isOpening ? 'pointer-events-none scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
        >
            <div className='border-primary-soft bg-surface w-full max-w-sm rounded-3xl border px-8 py-12 text-center'>
                <p className='text-primary text-7xl'>
                    {initial(groomName)}
                    <span className='text-secondary font-script mx-2 align-middle text-4xl'>&</span>
                    {initial(brideName)}
                </p>

                <div className='bg-border mx-auto my-6 h-px w-16' />

                <p className='font-body text-secondary text-xs tracking-widest uppercase'>
                    Kepada Yth.
                </p>

                <p className='font-display text-foreground mt-3 text-2xl'>{guestName}</p>

                <p className='font-body text-secondary mt-6 text-sm leading-relaxed'>
                    Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan
                    doa restu pada acara pernikahan kami.
                </p>

                <button
                    type='button'
                    onClick={handleOpen}
                    className='bg-primary font-body text-surface hover:bg-primary-dark mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm tracking-wide transition-colors'
                >
                    Buka Undangan
                </button>
            </div>
        </div>
    );
}
