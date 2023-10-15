import type { ImageSize, Track } from "./types";

/**
 * Attempts to get the image of a specified size for a track object.
 * If the image isn't available in that size, the largest size is returned.
 */
export function image(track: Track, size: ImageSize = "medium"): string | undefined {
    return track.image.find((it) => it.size === size)?.["#text"] ?? track.image.at(-1)?.["#text"]
}
