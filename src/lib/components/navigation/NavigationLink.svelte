<script lang="ts">
  import clsx from "clsx";

  import { page } from "$app/stores";

  export let href: string;
  export let label: string;
  export let external: boolean = false;

  $: active = $page.url.pathname === href;
</script>

<a
  aria-label={label}
  class={clsx("font-semibold transition-colors", {
    "pointer-events-none cursor-default text-black dark:text-neutral-200": active,
    "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-200": !active,
  })}
  rel="noreferrer noopener"
  target={external ? "_blank" : null}
  {href}
>
  <slot />
</a>
