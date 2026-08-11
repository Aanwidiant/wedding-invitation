'use client';

import { useAudio } from '@/components/audio/AudioProvider';
import { Pause, Music } from '@/components/icons'

export default function AudioButton() {
    const { isPlaying, isOpened, toggle } = useAudio();

    return (
        <div
            className={`fixed right-6 bottom-6 z-40 transition-all duration-500 ${isOpened
                ? 'scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'
                }`}
        >
            {isPlaying && (
                <span className='bg-primary/30 pointer-events-none absolute -inset-1.5 rounded-full animate-pulse' />
            )}

            <button
                type='button'
                onClick={toggle}
                aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
                className='bg-primary text-surface relative flex size-11 cursor-pointer items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg'
            >
                {isPlaying ? (
                    <Pause className='size-5' />
                ) : (
                    <Music className='size-5' />
                )}
            </button>
        </div>
    );
}
