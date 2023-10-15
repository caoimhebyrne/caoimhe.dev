<script lang="ts">
  import NavigationLink from "./NavigationLink.svelte";
</script>

<nav class="flex flex-row items-center gap-4 md:gap-6">
  <img class="aspect-square w-8 rounded-full" src="profile.webp" alt="My Logo" />

  <NavigationLink href="/">Home</NavigationLink>
  <!-- <NavigationLink href="/blog">Blog</NavigationLink> -->
</nav>
