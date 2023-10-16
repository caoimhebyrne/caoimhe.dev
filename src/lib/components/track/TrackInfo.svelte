<script lang="ts">
  import { image } from "$lib/lastfm/client";
  import type { Track } from "$lib/lastfm/types";

  import clsx from "clsx";
  import Record from "../icons/Record.svelte";

  export let data: Promise<Track | undefined>;

  let containerClasses = "flex flex-row items-center gap-2 text-neutral-600 dark:text-neutral-400";
</script>

<div
  class={clsx(
    containerClasses,
    "rounded-md border-2 border-neutral-200 bg-neutral-100 px-3 py-2 transition-opacity hover:opacity-70 dark:border-neutral-800 dark:bg-neutral-900",
  )}
>
  {#await data}
    <Record />
    Loading...
  {:then data}
    {#if data}
      {@const imageUrl = image(data)}

      <a rel="noreferrer noopener" target="_blank" class={containerClasses} href={data.url}>
        {#if imageUrl}
          <img class="aspect-square w-5 rounded-full" src={imageUrl} alt="Album art" />
        {:else}
          <Record />
        {/if}

        <p class="line-clamp-1">
          Listening to <span class="font-semibold">{data.name}</span> by
          <span class="font-semibold">{data.artist["#text"]}</span>
        </p>
      </a>
    {:else}
      <Record />
      Not playing anything.
    {/if}
  {/await}
</div>
