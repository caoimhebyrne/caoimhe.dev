<script lang="ts">
  export let href: string;
  export let external: boolean = false;
</script>

<a
  class="text-blue-700 transition-colors hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-300"
  rel="noreferrer noopener"
  target={external ? "_blank" : null}
  {href}
>
  <slot />
</a>
