import { LASTFM_API_KEY } from "$env/static/private";
import type { RecentTracksResponse } from "./types";

const BASE_URL: string = "https://ws.audioscrobbler.com/2.0/?"

/**
 * Fetches the tracks that a user has listened to, ordered by date.
 * @param user The username to fetch the tracks for.
 */
export async function getRecentTracks(user: string, limit: number = 50) {
    const params = new URLSearchParams();
    params.append("method", "user.getrecenttracks");
    params.append("user", user);
    params.append("api_key", LASTFM_API_KEY);
    params.append("limit", limit.toString());
    params.append("format", "json");

    try {
        const response = await fetch(BASE_URL + params);
        const data: RecentTracksResponse = await response.json();
        return data.recenttracks.track;
    } catch (e) {
        return [];
    }
}
