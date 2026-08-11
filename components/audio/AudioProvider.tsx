'use client';

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';

interface AudioContextValue {
    isPlaying: boolean;
    isOpened: boolean;
    play: () => Promise<void>;
    pause: () => void;
    toggle: () => Promise<void>;
    openAudio: () => Promise<void>;
}

interface AudioProviderProps {
    children: ReactNode;
    src: string;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({
    children,
    src,
}: AudioProviderProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const wasPlayingRef = useRef(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const audio = new Audio(src);

        audio.loop = true;
        audio.volume = 0.5;

        audioRef.current = audio;

        const handlePlay = () => {
            setIsPlaying(true);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.pause();
            audio.removeAttribute('src');
            audio.load();

            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, [src]);

    useEffect(() => {
        const handleVisibilityChange = async () => {
            const audio = audioRef.current;

            if (!audio) return;

            if (document.hidden) {
                wasPlayingRef.current = !audio.paused;

                if (wasPlayingRef.current) {
                    audio.pause();
                }

                return;
            }

            if (wasPlayingRef.current) {
                try {
                    await audio.play();
                } catch (error) {
                    console.error('Gagal melanjutkan audio:', error);
                }
            }
        };

        document.addEventListener(
            'visibilitychange',
            handleVisibilityChange,
        );

        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
        };
    }, []);

    const play = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        try {
            await audio.play();
        } catch (error) {
            console.error('Gagal memutar audio:', error);
        }
    };

    const pause = () => {
        audioRef.current?.pause();
    };

    const toggle = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            await play();
        } else {
            pause();
        }
    };

    const openAudio = async () => {
        setIsOpened(true);
        await play();
    };

    return (
        <AudioContext.Provider
            value={{
                isPlaying,
                isOpened,
                play,
                pause,
                toggle,
                openAudio,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);

    if (!context) {
        throw new Error(
            'useAudio must be used inside AudioProvider',
        );
    }

    return context;
}
