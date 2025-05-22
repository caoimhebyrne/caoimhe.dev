import { cache } from "react";

type GetRecentTracksResponse = {
  recenttracks: {
    track: Track[];
  };
};

type Track = {
  name: string;

  artist: {
    "#text": string;
  };

  image: {
    size: "small" | "medium" | "large" | "extralarge";
    "#text": string;
  }[];

  "@attr"?: {
    nowplaying?: string;
  };
};

const getRecentTracks: (username: string) => Promise<Track | null> = cache(
  async (username) => {
    try {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.LASTFM_API_KEY}&format=json`,
      );

      if (!response.ok) {
        return null;
      }

      const data: GetRecentTracksResponse = await response.json();
      console.log(data);
      return data.recenttracks.track[0];
    } catch (e) {
      return null;
    }
  },
);

const lastfmService = {
  getRecentTracks,
};

export default lastfmService;
