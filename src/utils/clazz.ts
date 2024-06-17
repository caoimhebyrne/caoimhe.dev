import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tw-merge";

/**
 * Conditionally constructs a class name string from the provided {@link inputs} via {@link clsx},
 * then runs {@link twMerge} to remove redundant class-names from the string.
 *
 * @param inputs The inputs to construct the class name from, see {@link clsx}.
 */
export function clazz(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
