"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
    targetDateTime: string;
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
        <div className="flex flex-col items-center gap-1">
            <span className="font-display text-3xl text-primary sm:text-4xl">
                {String(value).padStart(2, "0")}
            </span>
            <span className="font-body text-[0.65rem] uppercase tracking-widest text-secondary sm:text-xs">
                {label}
            </span>
        </div>
    );
}

export default function Countdown({ targetDateTime }: CountdownProps) {
    // `remaining` starts as `null` so the server-rendered markup and the
    // client's first render are identical (neither depends on `Date.now()`).
    // The real, time-dependent value is only computed once the component
    // has mounted on the client, avoiding a hydration mismatch.
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

    return (
        <section className="bg-background px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-md text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-secondary">
                    Menuju Hari Bahagia
                </p>

                {isComplete ? (
                    <p className="mt-8 font-display text-2xl text-primary sm:text-3xl">
                        Hari bahagia telah tiba
                    </p>
                ) : (
                    <div
                        role="timer"
                        aria-live="off"
                        aria-label={
                            remaining
                                ? `${remaining.days} hari ${remaining.hours} jam ${remaining.minutes} menit ${remaining.seconds} detik menuju hari pernikahan`
                                : "Menghitung waktu menuju hari pernikahan"
                        }
                        className="mt-8 grid grid-cols-4 gap-4 sm:gap-8"
                    >
                        <div aria-hidden="true">
                            <CountdownUnit
                                value={remaining?.days ?? 0}
                                label="Hari"
                            />
                        </div>
                        <div aria-hidden="true">
                            <CountdownUnit
                                value={remaining?.hours ?? 0}
                                label="Jam"
                            />
                        </div>
                        <div aria-hidden="true">
                            <CountdownUnit
                                value={remaining?.minutes ?? 0}
                                label="Menit"
                            />
                        </div>
                        <div aria-hidden="true">
                            <CountdownUnit
                                value={remaining?.seconds ?? 0}
                                label="Detik"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
