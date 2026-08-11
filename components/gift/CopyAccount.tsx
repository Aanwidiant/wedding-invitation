'use client';

import { useEffect, useState } from 'react';

interface CopyAccountProps {
    value: string;
    buttonLabel: string;
    ariaLabel: string;
    successMessage: string;
    errorMessage: string;
}

export default function CopyAccount({
    value,
    buttonLabel,
    ariaLabel,
    successMessage,
    errorMessage,
}: CopyAccountProps) {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (status === 'idle') {
            return;
        }

        const timeout = window.setTimeout(() => setStatus('idle'), 2500);
        return () => window.clearTimeout(timeout);
    }, [status]);

    async function copyValue() {
        try {
            await navigator.clipboard.writeText(value);
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }

    const label =
        status === 'success' ? 'Tersalin' : status === 'error' ? 'Gagal menyalin' : buttonLabel;

    return (
        <div>
            <button
                type='button'
                onClick={copyValue}
                className='border-primary font-body text-primary hover:bg-primary hover:text-surface focus-visible:outline-primary-dark inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
                aria-label={ariaLabel}
            >
                {label}
            </button>
            <p aria-live='polite' className='font-body text-secondary mt-2 min-h-5 text-xs'>
                {status === 'error' ? errorMessage : status === 'success' ? successMessage : ''}
            </p>
        </div>
    );
}
