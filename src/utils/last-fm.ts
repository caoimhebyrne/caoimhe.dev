// A Last.FM track object.
type Track = {
    artist: {
        "#text": string;
    };

    name: string;
    url?: string;
};

// The response from the user.getRecentTracks endpoint.
type GetRecentTracksResponse = {
    recenttracks: {
        track: Track[];
    };
};

export async function fetchMostRecentTrack(): Promise<Track> {
    const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&limit=1&format=json`,
        { next: { revalidate: 60 } },
    );

    if (response.status !== 200) {
        throw "Failed to fetch data from Last.FM API.";
    }

    // I could use something like Zod, but Last.FM should never change
    // their schema, and we're not dealing with user input here.
    const json: GetRecentTracksResponse = await response.json();
    const track = json.recenttracks.track[0];
    if (!track) {
        throw "Failed to fetch data from Last.FM API.";
    }

    return track;
}
