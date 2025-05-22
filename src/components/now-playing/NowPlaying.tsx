import lastfmService from "@/lib/lastfm";
import { Suspense } from "react";

export function NowPlaying() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <NowPlayingContent />
    </Suspense>
  );
}

async function NowPlayingContent() {
  const track = await lastfmService.getRecentTracks("caoimhereal");
  if (!track) {
    return (
      <p className="text-red-500">
        failed to get current track from last.fm :(
      </p>
    );
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <img
        className="size-14"
        src={track.image[track.image.length - 1]["#text"]}
        alt={`${track.name} by ${track.artist["#text"]}`}
      />

      <div className="flex flex-col">
        <p className="font-semibold">{track.name}</p>
        <p className="text-foreground-secondary">by {track.artist["#text"]}</p>
      </div>
    </div>
  );
}
