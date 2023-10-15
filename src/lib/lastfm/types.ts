
export type RecentTracksResponse = {
    recenttracks: {
        track: Track[]
    }
};

export type Track = {
    name: string;
    artist: TextObject;
    image: Image[];
    url: string;
};

export type TextObject = {
    "#text": string;
};

export type ImageSize = "small" | "medium" | "large" | "extralarge";

export type Image = {
    size: ImageSize;
    "#text": string;
};
