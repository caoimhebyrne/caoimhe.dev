<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ArrowUpRight from "$lib/components/icons/ArrowUpRight.svelte";
  import InlineLink from "$lib/components/typography/InlineLink.svelte";
  import Title from "$lib/components/typography/Title.svelte";
</script>

<main class="flex flex-col gap-6">
  <section class="flex flex-col gap-2">
    <Title>Hi, I'm Caoimhe 👋</Title>

    <h2 class="text-lg text-neutral-700 dark:text-neutral-300">
      I'm a software developer and open-source contributor. I currently work at
      <InlineLink href="https://essential.gg" external>Essential</InlineLink>
      and code in Java, Kotlin, and TypeScript.
    </h2>
  </section>

  <section class="grid grid-flow-col grid-cols-3">
    <ProjectCard
      name="Essential"
      description="Essential is a quality of life mod that boosts Minecraft Java to the next level."
      logo="https://static.essential.gg/icon/96x96.png"
      href="https://essential.gg"
    />
  </section>
</main>
