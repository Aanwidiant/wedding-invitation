'use client';

import { useEffect, useState } from 'react';
import { Date as Calendar } from '@/components/icons';

interface CountdownProps {
    targetDateTime: string;
    location: string;
    mapsUrl: string;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isComplete: boolean;
}

function getTimeRemaining(targetTime: number): TimeRemaining {
    const diff = Math.max(0, targetTime - Date.now());
    const totalSeconds = Math.floor(diff / 1000);

    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        isComplete: diff <= 0,
    };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className='flex flex-col items-center gap-1'>
            {' '}
            <span className='font-display text-primary text-3xl sm:text-4xl'>
                {String(value).padStart(2, '0')}{' '}
            </span>
            <span className='font-body text-secondary text-[0.65rem] tracking-widest uppercase sm:text-xs'>
                {label}
            </span>
        </div>
    );
}

function createGoogleCalendarUrl({
    title,
    targetDateTime,
    location,
    mapsUrl,
}: {
    title: string;
    targetDateTime: string;
    location: string;
    mapsUrl: string;
}) {
    const start = new Date(targetDateTime);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

    const formatDate = (date: Date) =>
        date
            .toISOString()
            .replace(/[-:]/g, '')
            .replace(/\.\d{3}/, '');

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates: `${formatDate(start)}/${formatDate(end)}`,
        location,
        details: `Menghadiri acara ngunduh mantu pernikahan Rudi & Nandifa. Lokasi di Google Maps:\n${mapsUrl}`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function Countdown({ targetDateTime, location, mapsUrl }: CountdownProps) {
    const [remaining, setRemaining] = useState<TimeRemaining | null>(null);

    useEffect(() => {
        const targetTime = new Date(targetDateTime).getTime();

        const tick = () => {
            const next = getTimeRemaining(targetTime);
            setRemaining(next);
            return next;
        };

        const first = tick();

        if (first.isComplete) {
            return;
        }

        const interval = setInterval(() => {
            if (tick().isComplete) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDateTime]);

    const isComplete = remaining?.isComplete ?? false;

    const googleCalendarUrl = createGoogleCalendarUrl({
        title: 'Ngunduh Mantu Pernikahan Rudi & Nandifa',
        targetDateTime,
        location,
        mapsUrl,
    });

    return (
        <section
            className='bg-background px-6 py-20 sm:py-24'
            data-aos='fade-up'
            data-aos-offset='100'
        >
            <div className='mx-auto max-w-md text-center'>
                <p className='font-body text-secondary text-xs tracking-[0.3em] uppercase'>
                    Menuju Ngunduh Mantu
                </p>

                <h2 className='font-display text-foreground mt-3 text-2xl sm:text-3xl'>
                    Hari Bahagia Kami
                </h2>

                {isComplete ? (
                    <p className='font-display text-primary mt-8 text-2xl sm:text-3xl'>
                        Hari bahagia telah tiba
                    </p>
                ) : (
                    <div
                        role='timer'
                        aria-live='off'
                        aria-label={
                            remaining
                                ? `${remaining.days} hari ${remaining.hours} jam ${remaining.minutes} menit ${remaining.seconds} detik menuju ngunduh mantu`
                                : 'Menghitung waktu menuju ngunduh mantu'
                        }
                        className='mt-8 grid grid-cols-4 gap-4 sm:gap-8'
                    >
                        <div aria-hidden='true'>
                            <CountdownUnit value={remaining?.days ?? 0} label='Hari' />
                        </div>

                        <div aria-hidden='true'>
                            <CountdownUnit value={remaining?.hours ?? 0} label='Jam' />
                        </div>

                        <div aria-hidden='true'>
                            <CountdownUnit value={remaining?.minutes ?? 0} label='Menit' />
                        </div>

                        <div aria-hidden='true'>
                            <CountdownUnit value={remaining?.seconds ?? 0} label='Detik' />
                        </div>
                    </div>
                )}

                <a
                    href={googleCalendarUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-primary font-body text-surface hover:bg-primary-dark focus-visible:outline-primary-dark mt-12 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
                    data-aos='fade-up'
                    data-aos-delay='150'
                    data-aos-offset='50'
                >
                    <Calendar className='size-4' />
                    Simpan Tanggal
                </a>
            </div>
        </section>
    );
}
