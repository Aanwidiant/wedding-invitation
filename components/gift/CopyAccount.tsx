"use client";

import { useEffect, useState } from "react";

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
    const [status, setStatus] = useState<"idle" | "success" | "error">(
        "idle",
    );

    useEffect(() => {
        if (status === "idle") {
            return;
        }

        const timeout = window.setTimeout(() => setStatus("idle"), 2500);
        return () => window.clearTimeout(timeout);
    }, [status]);

    async function copyValue() {
        try {
            await navigator.clipboard.writeText(value);
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    const label =
        status === "success"
            ? "Tersalin"
            : status === "error"
              ? "Gagal menyalin"
              : buttonLabel;

    return (
        <div>
            <button
                type="button"
                onClick={copyValue}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary px-6 py-3 font-body text-sm text-primary transition-colors hover:bg-primary hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                aria-label={ariaLabel}
            >
                {label}
            </button>
            <p
                aria-live="polite"
                className="mt-2 min-h-5 font-body text-xs text-secondary"
            >
                {status === "error"
                    ? errorMessage
                    : status === "success"
                      ? successMessage
                      : ""}
            </p>
        </div>
    );
}
