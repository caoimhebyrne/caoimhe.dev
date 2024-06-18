import { fetchMostRecentTrack } from "@/utils/last-fm";
import { Suspense } from "react";
import { MusicNote } from "@/components/icons";

async function NowPlayingContent() {
    try {
        const track = await fetchMostRecentTrack();

        return (
            <a
                className="flex w-full flex-row items-center gap-2 font-mono text-sm transition-all md:w-auto md:min-w-0 hover:text-blue-500"
                href={track.url ?? "https://last.fm/caoimhereal"}
                target="_blank"
                rel="noreferrer noopener"
                title={`${track.name} on Last.FM`}
            >
                <p className="flex-1 truncate">
                    {track.name} by {track.artist["#text"]}
                </p>

                <MusicNote className="size-5" />
            </a>
        );
    } catch (e) {
        return <></>;
    }
}

export default async function NowPlaying() {
    return (
        <Suspense fallback={<p className="font-mono text-sm">Loading...</p>}>
            <NowPlayingContent />
        </Suspense>
    );
}
