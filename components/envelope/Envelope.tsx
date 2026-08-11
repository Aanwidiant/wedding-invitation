"use client";

import { useState } from "react";

interface EnvelopeProps {
    guestName: string;
    groomName: string;
    brideName: string;
}

function initial(name: string) {
    return name.trim().charAt(0).toUpperCase();
}

export default function Envelope({
    guestName,
    groomName,
    brideName,
}: EnvelopeProps) {
    const [isOpening, setIsOpening] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            aria-hidden={isOpening}
            onTransitionEnd={() => {
                if (isOpening) setIsVisible(false);
            }}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-background px-6 transition-all duration-700 ease-out ${
                isOpening
                    ? "pointer-events-none scale-95 opacity-0"
                    : "scale-100 opacity-100"
            }`}
        >
            <div className="w-full max-w-sm rounded-sm border border-border bg-surface px-8 py-12 text-center">
                <p className="font-script text-4xl text-primary">
                    {initial(groomName)}
                    <span className="mx-2 text-accent">&</span>
                    {initial(brideName)}
                </p>

                <div className="mx-auto my-6 h-px w-16 bg-border" />

                <p className="font-body text-xs uppercase tracking-widest text-secondary">
                    Kepada Yth.
                </p>

                <p className="mt-3 font-display text-2xl text-foreground">
                    {guestName}
                </p>

                <p className="mt-6 font-body text-sm leading-relaxed text-secondary">
                    Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk
                    hadir dan memberikan doa restu pada acara pernikahan kami.
                </p>

                <button
                    type="button"
                    onClick={() => setIsOpening(true)}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-body text-sm tracking-wide text-surface transition-colors hover:bg-primary-dark"
                >
                    Buka Undangan
                </button>
            </div>
        </div>
    );
}
