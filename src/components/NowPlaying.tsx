import { fetchMostRecentTrack } from "@/utils/last-fm";
import { Suspense } from "react";
import { MusicNote } from "@/components/icons";

async function NowPlayingContent() {
    try {
        const track = await fetchMostRecentTrack();

        return (
            <a
                className="flex max-w-[90%] flex-row items-center gap-2 transition-all lg:max-w-full hover:text-blue-500"
                href={track.url ?? "https://last.fm/caoimhereal"}
                target="_blank"
                rel="noreferrer noopener"
                title={`${track.name} on Last.FM`}
            >
                <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
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
        <div className="font-mono">
            <Suspense fallback={<p>Loading...</p>}>
                <NowPlayingContent />
            </Suspense>
        </div>
    );
}
