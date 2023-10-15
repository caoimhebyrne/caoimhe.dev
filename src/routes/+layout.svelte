<script>
  import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";
  import "../app.css";

  export let data;
</script>

<main class="container mx-auto flex flex-col gap-4 px-4 py-8 md:gap-8">
  <NavigationBar track={data.streamed.track} />

  <slot />
</main>
