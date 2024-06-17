import { clazz } from "@/utils/clazz";

// Used by the link to provide colors for the background & text when hovered.
const styles = {
    black: "hover:bg-black hover:text-white",
    essential:
        "text-essential-blue hover:bg-essential-blue hover:text-essential-light-blue",
};

type LinkStyle = keyof typeof styles;

type LinkProps = {
    /** The location of this link. */
    href: string;

    /** The style for this link to use, @see LinkStyle */
    style: LinkStyle;

    /** The content of this element. */
    children: React.ReactNode;

    /** Any additional overrides for the element's style. */
    className?: string;
};

export default function Link({ href, style, children, className }: LinkProps) {
    return (
        <a
            href={href}
            className={clazz(
                "inline-flex flex-row items-center gap-2 rounded-md py-2 transition-all hover:px-3",
                styles[style],
                className,
            )}
            target="_blank"
            rel="noreferrer noopener"
        >
            {children}
        </a>
    );
}
