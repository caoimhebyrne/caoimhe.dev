"use client";

import { Email } from "@/components/icons";
import { toast } from "sonner";
import type { MouseEvent } from "react";

const EMAIL_ADDRESS: string = "me@caoimhe.dev";

export default function CopyEmailButton() {
    const showCopiedToast = () => {
        toast.success("Copied email address to clipboard!");
    };

    const showErrorToast = (reason: unknown) => {
        console.error("Failed to copy content to clipboard:", reason);
        toast.error("Failed to copy email address to clipboard.");
    };

    const onClick = (_: MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard
            .writeText(EMAIL_ADDRESS)
            .then(showCopiedToast)
            .catch(showErrorToast);
    };

    return (
        <button
            title="Copy email address"
            type="button"
            className="p-1 transition-all active:scale-90 hover:text-blue-500"
            onClick={onClick}
        >
            <Email className="size-6" removeTitleElement />
        </button>
    );
}
