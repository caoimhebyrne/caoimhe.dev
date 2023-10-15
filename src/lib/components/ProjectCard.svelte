<script lang="ts">
  import ArrowUpRight from "./icons/ArrowUpRight.svelte";

  export let name: string;
  export let description: string;
  export let href: string | undefined = undefined;
  export let logo: string | undefined = undefined;
</script>

<div class="flex flex-col gap-1 rounded-lg border-2 border-neutral-700 bg-neutral-800 p-4">
  <div class="flex flex-row items-center justify-between">
    <div class="flex flex-row items-center gap-2">
      {#if logo}
        <img class="w-5" src={logo} alt="Essential Logo" />
      {/if}

      <h5 class="text-lg font-medium text-neutral-200">{name}</h5>
    </div>

    {#if href}
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full p-1 text-neutral-200 transition-colors hover:bg-neutral-700"
        {href}
      >
        <ArrowUpRight class="h-4 w-4" />
      </a>
    {/if}
  </div>

  <p class="text-neutral-400">{description}</p>
</div>
