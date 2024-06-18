"use client";

import { Email } from "@/components/icons";
import { toast } from "sonner";
import type { MouseEvent } from "react";

const EMAIL_ADDRESS: string = "me@caoimhe.dev";

export default function CopyEmailButton() {
    const showCopiedToast = () => {
        toast.success("Copied email address to clipboard!", {
            id: "clipboard-success",
        });
    };

    const showErrorToast = (reason: unknown) => {
        toast.error(`Failed to copy \`${EMAIL_ADDRESS}\` to clipboard.`, {
            id: "clipboard-failed",
        });

        console.error("Failed to copy email address to clipboard.", reason);
    };

    const onClick = async (_: MouseEvent<HTMLButtonElement>) => {
        try {
            await navigator.clipboard.writeText(EMAIL_ADDRESS);
            showCopiedToast();
        } catch (e) {
            showErrorToast(e);
        }
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
