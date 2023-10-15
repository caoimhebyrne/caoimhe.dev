<script lang="ts">
  import type { Track } from "$lib/lastfm/types";

  import TrackInfo from "../track/TrackInfo.svelte";
  import NavigationLink from "./NavigationLink.svelte";

  export let track: Promise<Track | undefined>;
</script>

<nav class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
  <div class="flex flex-row items-center gap-4 md:gap-6">
    <img class="aspect-square w-8 rounded-full" src="profile.webp" alt="My Logo" />

    <NavigationLink href="/">Home</NavigationLink>
    <!-- <NavigationLink href="/blog">Blog</NavigationLink> -->
  </div>

  <TrackInfo data={track} />
</nav>
