import { getRecentTracks } from '$lib/lastfm/index.js';

export async function load() {
	return {
		streamed: {
            // Get the first track from my Last.FM profile
            track: getRecentTracks("caoimhereal", 1).then((it) => it.at(0))
        }
	};
}
