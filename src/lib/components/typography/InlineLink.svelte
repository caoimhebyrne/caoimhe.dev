<script lang="ts">
  import clsx from "clsx";

  export let href: string;
  export let external: boolean = false;
</script>

<a
  class="text-blue-600 transition-colors hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-300"
  rel="noreferrer noopener"
  target={external ? "_blank" : null}
  {href}
>
  <slot />
</a>
