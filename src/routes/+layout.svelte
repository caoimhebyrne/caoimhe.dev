<script>
  import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";
  import "../app.css";
</script>

<main class="container mx-auto flex flex-col gap-4 px-4 py-8 md:gap-8">
  <NavigationBar />

  <slot />
</main>
