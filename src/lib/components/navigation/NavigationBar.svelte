<script lang="ts">
  import type { Track } from "$lib/lastfm/types";
  import GitHub from "../icons/GitHub.svelte";
  import XLogo from "../icons/XLogo.svelte";

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

  <div class="flex flex-row items-center gap-4 md:gap-6">
    <NavigationLink href="https://x.com/caoimhedev_" external>
      <XLogo class="h-5 w-5" />
    </NavigationLink>

    <NavigationLink href="https://github.com/caoimhebyrne" external>
      <GitHub class="h-5 w-5" />
    </NavigationLink>

    <TrackInfo data={track} />
  </div>
</nav>
